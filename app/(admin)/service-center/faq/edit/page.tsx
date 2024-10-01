"use client";

import { redirect, useRouter, useSearchParams } from "next/navigation";
import FaqForm from "../_components/faq-form";
import { Suspense } from "react";
import FaqModel from "@/app/_models/faq";
import useModalStore from "@/app/_utils/store/modal";
import { updateFaq } from "@/app/_services/faq";

export default function FaqEditPage() {
  return (
    <Suspense fallback={<div></div>}>
      <FaqEditInner />
    </Suspense>
  );
}

const FaqEditInner = () => {
  const router = useRouter();
  const { openAlert } = useModalStore();

  const searchParams = useSearchParams();
  if (!searchParams.has("data")) {
    redirect("/service-center/faq");
    return;
  }
  const faq = FaqModel.fromJson(JSON.parse(searchParams.get("data") ?? "{}"));

  if (!faq.id) {
    redirect("/service-center/faq");
  }

  const editFaq = async (faq: FaqModel) => {
    const { error } = await updateFaq(faq);
    if (error) {
      openAlert({
        title: "FAQ 업데이트 오류",
        description: error.message,
      });
    } else {
      await openAlert({
        title: "FAQ 업데이트",
        description: "FAQ 업데이트 완료!",
      });
      router.replace("/service-center/faq");
    }
  };

  return <FaqForm title="FAQ 수정하기" faq={faq} onSubmit={editFaq} />;
};
