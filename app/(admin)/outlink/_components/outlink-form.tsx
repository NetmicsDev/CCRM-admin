"use client";

import Icon from "@/app/_components/Icon";
import { TextField } from "@/app/_components/Input";
import FileField from "@/app/_components/Input/file-field";
import SelectField from "@/app/_components/Input/select-field";
import Outlink from "@/app/_types/outlink";
import Link from "next/link";
import { useState } from "react";

export default function OutlinkForm({
  outlink,
  title,
}: {
  outlink?: Outlink;
  title: string;
}) {
  const [formData, setFormData] = useState<Outlink>(
    outlink ?? {
      id: "",
      company: "",
      category: "청구/손해보험",
      public: true,
      logo: "",
      url: "",
      updateDate: new Date().toISOString().split("T")[0],
    }
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="flex flex-col h-full">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold mb-6">{title}</h2>
      </div>

      <div className="flex-1 space-y-4">
        <TextField
          name="title"
          label="회사명"
          placeholder="회사명을 작성해주세요"
          value={formData.company}
          required
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SelectField
            name="category"
            label="카테고리"
            defaultValue={formData.category}
            options={[
              { text: "재테크/투자", value: "재테크/투자" },
              { text: "기타", value: "기타" },
            ]}
          />
          <SelectField
            name="public"
            label="공개여부"
            defaultValue={formData.public ? 1 : 0}
            options={[
              { text: "공개", value: 1 },
              { text: "비공개", value: 0 },
            ]}
          />
        </div>

        <FileField
          name="logo-file"
          label="회사 로고파일 업로드"
          accept="image/*"
          placeholder={formData.logo ? formData.logo : "파일을 업로드해주세요"}
          icon="file-image"
        />

        <TextField
          name="url"
          label="URL"
          placeholder="URL를 입력해주세요"
          defaultValue={formData.url}
          required
        />
      </div>
      <div className="flex justify-between ">
        <Link
          href={"/outlink"}
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
