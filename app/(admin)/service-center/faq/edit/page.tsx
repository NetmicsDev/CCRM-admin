"use client";

import { redirect, useSearchParams } from "next/navigation";
import FaqForm from "../_components/faq-form";
import Faq from "@/app/_types/faq";
import { Suspense } from "react";

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
  const faq = JSON.parse(searchParams.get("data") ?? "{}");

  if (!faq.id) {
    redirect("/service-center/faq");
  }

  return <FaqForm title="FAQ 수정하기" faq={faq as Faq} />;
};
