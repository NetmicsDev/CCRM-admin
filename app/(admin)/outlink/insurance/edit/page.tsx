"use client";

import { redirect, useRouter, useSearchParams } from "next/navigation";
import InsuranceForm from "../_components/insurance-form";
import { Suspense } from "react";
import InsuranceModel from "@/app/_models/insurance";
import useModalStore from "@/app/_utils/store/modal";
import { updateInsurance } from "@/app/_services/insurance";

export default function InsuranceEditPage() {
  return (
    <Suspense fallback={<div></div>}>
      <InsuranceEditInner />
    </Suspense>
  );
}

const InsuranceEditInner = () => {
  const router = useRouter();
  const { openAlert } = useModalStore();

  const searchParams = useSearchParams();
  if (!searchParams.has("data")) {
    redirect("//outlink/insurance");
    return;
  }
  const insurance = InsuranceModel.fromJson(
    JSON.parse(searchParams.get("data") ?? "{}")
  );

  if (!insurance.id) {
    redirect("/outlink/insurance");
  }

  const editInsurance = async (notice: InsuranceModel) => {
    const { error } = await updateInsurance(notice);
    if (error) {
      openAlert({
        title: "보험 청구 업데이트 오류",
        description: error.message,
      });
    } else {
      await openAlert({
        title: "보험 청구 업데이트",
        description: "보험 청구 업데이트 완료!",
      });
      router.replace("/outlink/insurance");
    }
  };

  return (
    <InsuranceForm
      title="보험 청구 수정하기"
      insurance={insurance}
      onSubmit={editInsurance}
    />
  );
};
