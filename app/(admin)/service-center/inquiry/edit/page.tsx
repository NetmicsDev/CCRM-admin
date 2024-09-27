"use client";

import { redirect, useSearchParams } from "next/navigation";
import InquiryForm from "../_components/inquiry-form";
import { Suspense } from "react";
import InquiryModel from "@/app/_models/inquiry";

export default function InquiryEditPage() {
  return (
    <Suspense fallback={<div></div>}>
      <InquiryEditInner />
    </Suspense>
  );
}

const InquiryEditInner = () => {
  const searchParams = useSearchParams();
  if (!searchParams.has("data")) {
    redirect("/service-center/inquiry");
    return;
  }
  const inquiry = InquiryModel.fromJson(
    JSON.parse(searchParams.get("data") ?? "{}")
  );

  if (!inquiry.id) {
    redirect("/service-center/inquiry");
  }

  return <InquiryForm title="1:1 문의 답변" inquiry={inquiry} />;
};
