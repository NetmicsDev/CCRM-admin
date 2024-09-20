"use client";

import { redirect, useSearchParams } from "next/navigation";
import FaqForm from "../_components/faq-form";
import Faq from "@/app/_types/faq";
import { Suspense } from "react";

export default function FaqEditPage() {
  const searchParams = useSearchParams();
  if (!searchParams.has("data")) {
    redirect("/service-center/faq");
    return;
  }
  const faq = JSON.parse(searchParams.get("data") ?? "{}");

  if (!faq.id) {
    redirect("/service-center/faq");
  }

  return (
    <Suspense fallback={<div></div>}>
      <FaqForm title="FAQ 수정하기" faq={faq as Faq} />
    </Suspense>
  );
}
