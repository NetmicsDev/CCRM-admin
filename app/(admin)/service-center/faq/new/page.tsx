"use client";

import { useRouter } from "next/navigation";
import FaqForm from "../_components/faq-form";
import useModalStore from "@/app/_utils/store/modal";
import { addFaq } from "@/app/_services/faq";
import FaqModel from "@/app/_models/faq";

export default function FaqNewPage() {
  const router = useRouter();
  const { openAlert } = useModalStore();
  const addNewFaq = async (faq: FaqModel) => {
    const { error } = await addFaq(faq);
    if (error) {
      openAlert({
        title: "FAQ 추가 오류",
        description: error.message,
      });
    } else {
      openAlert({
        title: "FAQ 추가",
        description: "FAQ 추가 완료!",
      });
      router.replace("/service-center/faq");
    }
  };

  return <FaqForm title="FAQ 추가하기" onSubmit={addNewFaq} />;
}
