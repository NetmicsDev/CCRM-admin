"use client";

import { TextField } from "@/app/_components/Input";
import TextAreaField from "@/app/_components/Input/area-field";
import FileField from "@/app/_components/Input/file-field";
import SelectField from "@/app/_components/Input/select-field";
import NoticeModel, { NoticeCategory } from "@/app/_models/notice";
import Link from "next/link";

export default function NoticeForm({
  notice = NoticeModel.empty(),
  title,
  onSubmit = () => {},
}: {
  notice?: NoticeModel;
  title: string;
  onSubmit?: (course: NoticeModel) => void;
}) {
  const handleSubmit = async (formData: FormData) => {
    const newNotice = new NoticeModel(
      notice.id,
      formData.get("category") as keyof typeof NoticeCategory,
      formData.get("title") as string,
      formData.get("content") as string,
      formData.get("public") === "1",
      notice.createdAt,
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
          value={notice.title}
          required
        />

        <TextAreaField
          name="content"
          label="내용"
          placeholder="내용을 작성해주세요"
          value={notice.content}
          className="h-60"
          required
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SelectField
            name="category"
            label="카테고리"
            defaultValue={notice.category}
            options={[
              { text: "공지사항", value: "notice" },
              { text: "메인상단", value: "main" },
              { text: "팝업", value: "popup" },
            ]}
          />
          <SelectField
            name="public"
            label="공개여부"
            defaultValue={notice.isPublished ? 1 : 0}
            options={[
              { text: "공개", value: 1 },
              { text: "비공개", value: 0 },
            ]}
          />
        </div>

        <FileField
          name="attachment"
          label="파일 업로드"
          icon="file-search"
          placeholder={
            notice.attachment ? notice.attachment : "파일을 업로드해주세요"
          }
        />
      </div>
      <div className="flex justify-between ">
        <Link
          href={"/service-center/notice"}
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
