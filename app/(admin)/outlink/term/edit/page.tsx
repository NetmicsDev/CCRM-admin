"use client";

import { redirect, useRouter, useSearchParams } from "next/navigation";
import TermForm from "../_components/term-form";
import { Suspense } from "react";
import TermModel from "@/app/_models/term";
import useModalStore from "@/app/_utils/store/modal";
import { updateTerm } from "@/app/_services/term";

export default function TermEditPage() {
  return (
    <Suspense fallback={<div></div>}>
      <TermEditInner />
    </Suspense>
  );
}

const TermEditInner = () => {
  const router = useRouter();
  const { openAlert } = useModalStore();

  const searchParams = useSearchParams();
  if (!searchParams.has("data")) {
    redirect("/outlink/term");
    return;
  }
  const term = TermModel.fromJson(JSON.parse(searchParams.get("data") ?? "{}"));

  if (!term.id) {
    redirect("/outlink/term");
  }

  const editTerm = async (term: TermModel) => {
    const { error } = await updateTerm(term);
    if (error) {
      openAlert({
        title: "보험 약관 업데이트 오류",
        description: error.message,
      });
    } else {
      await openAlert({
        title: "보험 약관 업데이트",
        description: "보험 약관 업데이트 완료!",
      });
      router.replace("/outlink/term");
    }
  };

  return (
    <TermForm title="보험 약관 수정하기" term={term} onSubmit={editTerm} />
  );
};
