"use client";

import { useRouter } from "next/navigation";
import InsuranceForm from "../_components/insurance-form";
import useModalStore from "@/app/_utils/store/modal";
import { addInsurance } from "@/app/_services/insurance";
import InsuranceModel from "@/app/_models/insurance";

export default function FaqNewPage() {
  const router = useRouter();
  const { openAlert } = useModalStore();
  const addNewInsurance = async (insurance: InsuranceModel) => {
    const { error } = await addInsurance(insurance);
    if (error) {
      openAlert({
        title: "보험 청구 추가 오류",
        description: error.message,
      });
    } else {
      await openAlert({
        title: "보험 청구 추가",
        description: "보험 청구 추가 완료!",
      });
      router.replace("/outlink/insurance");
    }
  };

  return (
    <InsuranceForm title="보험 청구 추가하기" onSubmit={addNewInsurance} />
  );
}
