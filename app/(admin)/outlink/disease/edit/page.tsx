"use client";

import { redirect, useRouter, useSearchParams } from "next/navigation";
import DiseaseForm from "../_components/disease-form";
import { Suspense } from "react";
import DiseaseModel from "@/app/_models/disease";
import useModalStore from "@/app/_utils/store/modal";
import { updateDisease } from "@/app/_services/disease";

export default function DiseaseEditPage() {
  return (
    <Suspense fallback={<div></div>}>
      <DiseaseEditInner />
    </Suspense>
  );
}

const DiseaseEditInner = () => {
  const router = useRouter();
  const { openAlert } = useModalStore();

  const searchParams = useSearchParams();
  if (!searchParams.has("data")) {
    redirect("/outlink/disease");
    return;
  }
  const disease = DiseaseModel.fromJson(
    JSON.parse(searchParams.get("data") ?? "{}")
  );

  if (!disease.id) {
    redirect("/outlink/disease");
  }

  const editDisease = async (disease: DiseaseModel) => {
    const { error } = await updateDisease(disease);
    if (error) {
      openAlert({
        title: "질병 코드 업데이트 오류",
        description: error.message,
      });
    } else {
      await openAlert({
        title: "질병 코드 업데이트",
        description: "질병 코드 업데이트 완료!",
      });
      router.replace("/outlink/disease");
    }
  };

  return (
    <DiseaseForm
      title="질병 코드 수정하기"
      disease={disease}
      onSubmit={editDisease}
    />
  );
};
