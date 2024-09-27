"use client";

import { redirect, useSearchParams } from "next/navigation";
import DiseaseForm from "../_components/disease-form";
import { Suspense } from "react";
import DiseaseModel from "@/app/_models/disease";

export default function DiseaseEditPage() {
  return (
    <Suspense fallback={<div></div>}>
      <DiseaseEditInner />
    </Suspense>
  );
}

const DiseaseEditInner = () => {
  const searchParams = useSearchParams();
  if (!searchParams.has("data")) {
    redirect("/outlink/disease");
    return;
  }
  const disease = DiseaseModel.fromJson(
    JSON.parse(searchParams.get("data") ?? "{}")
  );

  if (!disease.id) {
    redirect("/service-center/inquiry");
  }

  return <DiseaseForm title="질병 코드 수정하기" disease={disease} />;
};
