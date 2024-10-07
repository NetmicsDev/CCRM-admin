"use client";

import { useRouter } from "next/navigation";
import TermForm from "../_components/term-form";
import useModalStore from "@/app/_utils/store/modal";
import TermModel from "@/app/_models/term";
import { addTerm } from "@/app/_services/term";

export default function TermNewPage() {
  const router = useRouter();
  const { openAlert } = useModalStore();
  const addNewTerm = async (notice: TermModel) => {
    const { error } = await addTerm(notice);
    if (error) {
      openAlert({
        title: "보험 약관 추가 오류",
        description: error.message,
      });
    } else {
      await openAlert({
        title: "보험 약관 추가",
        description: "보험 약관 추가 완료!",
      });
      router.replace("/outlink/notice");
    }
  };

  return <TermForm title="보험 약관 추가하기" onSubmit={addNewTerm} />;
}
