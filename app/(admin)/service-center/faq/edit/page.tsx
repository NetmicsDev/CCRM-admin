"use client";

import { redirect, useSearchParams } from "next/navigation";
import FaqForm from "../_components/faq-form";
import { Suspense } from "react";
import FaqModel from "@/app/_models/faq";

export default function FaqEditPage() {
  return (
    <Suspense fallback={<div></div>}>
      <FaqEditInner />
    </Suspense>
  );
}

const FaqEditInner = () => {
  const searchParams = useSearchParams();
  if (!searchParams.has("data")) {
    redirect("/service-center/faq");
    return;
  }
  const faq = FaqModel.fromJson(JSON.parse(searchParams.get("data") ?? "{}"));

  if (!faq.id) {
    redirect("/service-center/faq");
  }

  return <FaqForm title="FAQ 수정하기" faq={faq} />;
};
