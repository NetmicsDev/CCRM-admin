"use client";

import { TextField } from "@/app/_components/Input";
import TextAreaField from "@/app/_components/Input/area-field";
import FileUpload from "@/app/_components/Input/file-field";
import SelectField from "@/app/_components/Input/select-field";
import FaqModel, { FaqCategory } from "@/app/_models/faq";
import Link from "next/link";

export default function FaqForm({
  faq = FaqModel.empty(),
  title,
  onSubmit = () => {},
}: {
  faq?: FaqModel;
  title: string;
  onSubmit?: (course: FaqModel) => void;
}) {
  const handleSubmit = async (formData: FormData) => {
    const newNotice = new FaqModel(
      faq.id,
      formData.get("category") as keyof typeof FaqCategory,
      formData.get("title") as string,
      formData.get("content") as string,
      formData.get("public") === "1",
      faq.createdAt,
      new Date(),
      ""
    );
    newNotice.newAttachemnt = formData.get("attachment") as File | string;
    onSubmit(newNotice);
  };

  return (
    <form className="flex flex-col h-full" action={handleSubmit}>
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold mb-6">{title}</h2>
      </div>

      <div className="flex flex-col flex-1 space-y-4">
        <TextField
          name="title"
          label="제목"
          placeholder="제목을 작성해주세요"
          value={faq.title}
          required
        />

        <TextAreaField
          name="content"
          label="내용"
          placeholder="내용을 작성해주세요"
          value={faq.content}
          className="h-24"
          required
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SelectField
            name="category"
            label="카테고리"
            defaultValue={faq.category}
            options={[
              { text: "결제 관련", value: "결제" },
              { text: "회원 관련", value: "회원" },
              { text: "오류 관련", value: "오류" },
              { text: "프로그램 관련", value: "프로그램" },
              { text: "제휴 관련", value: "제휴" },
              { text: "기타", value: "기타" },
            ]}
          />
          <SelectField
            name="public"
            label="공개여부"
            defaultValue={faq.isPublished ? 1 : 0}
            options={[
              { text: "공개", value: 1 },
              { text: "비공개", value: 0 },
            ]}
          />
        </div>

        <FileUpload
          name="attachment"
          label="파일 업로드"
          icon="file-search"
          placeholder={
            faq.attachment ? faq.attachment : "파일을 업로드해주세요"
          }
        />

        <TextField
          name="url"
          label="URL"
          placeholder="URL를 입력해주세요"
          defaultValue={faq.attachment}
          required
        />
      </div>
      <div className="flex justify-between ">
        <Link
          href={"/service-center/faq"}
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
