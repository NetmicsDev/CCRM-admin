"use client";

import { redirect, useSearchParams } from "next/navigation";
import InsuranceForm from "../_components/insurance-form";
import { Suspense } from "react";
import InsuranceModel from "@/app/_models/insurance";

export default function InsuranceEditPage() {
  return (
    <Suspense fallback={<div></div>}>
      <InsuranceEditInner />
    </Suspense>
  );
}

const InsuranceEditInner = () => {
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

  return <InsuranceForm title="FAQ 수정하기" insurance={insurance} />;
};
