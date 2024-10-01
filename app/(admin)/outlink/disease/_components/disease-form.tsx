"use client";

import Icon from "@/app/_components/Icon";
import { TextField } from "@/app/_components/Input";
import TextAreaField from "@/app/_components/Input/area-field";
import FileField from "@/app/_components/Input/file-field";
import SelectField from "@/app/_components/Input/select-field";
import DiseaseModel from "@/app/_models/disease";
import Link from "next/link";
import { useState } from "react";

export default function DiseaseForm({
  disease = DiseaseModel.empty(),
  title,
  onSubmit = () => {},
}: {
  disease?: DiseaseModel;
  title: string;
  onSubmit?: (course: DiseaseModel) => void;
}) {
  const handleSubmit = async (formData: FormData) => {
    const newDisease = DiseaseModel.empty();
    // new DiseaseModel(
    //   disease?.id,
    //   formData.get("category") as string,
    //   formData.get("title") as string,
    //   formData.get("content") as string,
    //   formData.get("public") as string,
    //   disease?.createdAt,
    //   new Date(),
    //   formData.get("attachment") as string
    // );
    onSubmit(newDisease);
  };

  return (
    <form className="flex flex-col h-full" action={handleSubmit}>
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>

      <div className="flex flex-col flex-1 space-y-4 my-6 overflow-y-scroll">
        {/* <TextField
          name="inquier"
          label="문의자"
          value={formData.inquiryAuthor?.name ?? ""}
          disabled
        />
        <TextField
          name="title"
          label="제목"
          placeholder="제목을 작성해주세요"
          value={formData.inquiryTitle}
          disabled
        />

        <TextAreaField
          name="content"
          label="내용"
          placeholder="내용을 작성해주세요"
          value={formData.inquiryContent}
          className="h-24"
          required
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SelectField
            name="category"
            label="카테고리"
            defaultValue={formData.category}
            options={[
              { text: "결제 문의", value: "결제" },
              { text: "가입 문의", value: "가입" },
              { text: "오류 문의", value: "오류" },
              { text: "제휴 문의", value: "제휴" },
              { text: "기타", value: "기타" },
            ]}
          />
          <SelectField
            name="public"
            label="공개여부"
            defaultValue={formData.isPublished ? 1 : 0}
            options={[
              { text: "공개", value: 1 },
              { text: "비공개", value: 0 },
            ]}
          />
        </div> */}
      </div>
      <div className="flex justify-between ">
        <Link
          href={"/outlink/disease"}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 font-medium"
        >
          취소하기
        </Link>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 font-medium">
          저장하기
        </button>
      </div>
    </form>
  );
}
