"use client";

import { TextField } from "@/app/_components/Input";
import SelectField from "@/app/_components/Input/select-field";
import CourseModel from "@/app/_models/course";
import Link from "next/link";
import { useState } from "react";

export default function CourseForm({
  course,
  title,
}: {
  course?: CourseModel;
  title: string;
}) {
  const [formData, setFormData] = useState<CourseModel>(
    course ?? CourseModel.empty()
  );

  return (
    <form className="flex flex-col h-full">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold mb-6">{title}</h2>
      </div>

      <div className="flex-1 space-y-4">
        <TextField
          name="title"
          label="강의 제목"
          placeholder="제목을 작성해주세요"
          value={formData.title}
          required
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextField
            name="instructor"
            label="강사명"
            placeholder="강사명을 입력해주세요"
            value={formData.lecturer}
            required
          />
          <SelectField
            name="category"
            label="카테고리"
            defaultValue={formData.category}
            options={[
              { text: "재테크/투자", value: "재테크/투자" },
              { text: "기타", value: "기타" },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextField
            name="updateDate"
            label="업로드 날짜"
            type="date"
            defaultValue={
              new Date(formData.updatedAt).toISOString().split("T")[0]
            }
            required
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
        </div>

        <TextField
          name="url"
          label="URL"
          placeholder="URL를 입력해주세요"
          defaultValue={formData.url}
          required
        />

        <TextField
          name="position"
          label="레이아웃 위치 설정"
          placeholder="숫자(,)로 작성해주세요"
          defaultValue={formData.layoutOrder}
        />
      </div>
      <div className="flex justify-between ">
        <Link
          href={"/course"}
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
