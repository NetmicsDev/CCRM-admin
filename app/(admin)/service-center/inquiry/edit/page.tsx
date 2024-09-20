"use client";

import { redirect, useSearchParams } from "next/navigation";
import InquiryForm from "../_components/inquiry-form";
import Inquiry from "@/app/_types/inquiry";
import { Suspense } from "react";

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
  const inquiry = JSON.parse(searchParams.get("data") ?? "{}");

  if (!inquiry.id) {
    redirect("/service-center/inquiry");
  }

  return <InquiryForm title="1:1 문의 답변" inquiry={inquiry as Inquiry} />;
};
