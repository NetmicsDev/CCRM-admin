"use client";

import { useRouter } from "next/navigation";
import DiseaseForm from "../_components/disease-form";
import useModalStore from "@/app/_utils/store/modal";
import DiseaseModel from "@/app/_models/disease";
import { addDisease } from "@/app/_services/disease";

export default function DiseaseNewPage() {
  const router = useRouter();
  const { openAlert } = useModalStore();
  const addNewDisease = async (disease: DiseaseModel) => {
    const { error } = await addDisease(disease);
    if (error) {
      openAlert({
        title: "질병 코드 추가 오류",
        description: error.message,
      });
    } else {
      await openAlert({
        title: "질병 코드 추가",
        description: "질병 코드 추가 완료!",
      });
      router.replace("/outlink/disease");
    }
  };

  return <DiseaseForm title="질병 코드 추가하기" onSubmit={addNewDisease} />;
}
