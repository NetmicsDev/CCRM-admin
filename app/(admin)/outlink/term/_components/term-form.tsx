"use client";

import SelectField from "@/app/_components/Input/select-field";
import TermModel from "@/app/_models/term";
import Link from "next/link";

export default function TermForm({
  term = TermModel.empty(),
  title,
  onSubmit = () => {},
}: {
  term?: TermModel;
  title: string;
  onSubmit?: (course: TermModel) => void;
}) {
  const handleSubmit = async (formData: FormData) => {
    const newTerm = TermModel.empty();
    // new TermModel(
    //   term?.id,
    //   formData.get("category") as string,
    //   formData.get("title") as string,
    //   formData.get("content") as string,
    //   formData.get("public") as string,
    //   term?.createdAt,
    //   new Date(),
    //   formData.get("attachment") as string
    // );
    onSubmit(newTerm);
  };

  return (
    <form className="flex flex-col h-full" action={handleSubmit}>
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold mb-6">{title}</h2>
      </div>

      <div className="flex flex-col flex-1 space-y-4">
        {/* <TextField
          name="title"
          label="제목"
          placeholder="제목을 작성해주세요"
          value={term.title}
          required
        />

        <TextAreaField
          name="content"
          label="내용"
          placeholder="내용을 작성해주세요"
          value={term.content}
          className="h-60"
          required
        /> */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SelectField
            name="category"
            label="카테고리"
            defaultValue={term.category}
            options={[
              { text: "공지사항", value: "term" },
              { text: "메인상단", value: "main" },
              { text: "팝업", value: "popup" },
            ]}
          />
          <SelectField
            name="public"
            label="공개여부"
            defaultValue={term.isPublished ? 1 : 0}
            options={[
              { text: "공개", value: 1 },
              { text: "비공개", value: 0 },
            ]}
          />
        </div>

        {/* <FileField
          name="logo-file"
          label="파일 업로드"
          accept="image/*"
          placeholder={term.logo ? term.logo : "파일을 업로드해주세요"}
          icon="file-image"
        /> */}

        {/* <TextField
          name="url"
          label="URL"
          placeholder="URL를 입력해주세요"
          defaultValue={term.url}
          required
        /> */}
      </div>
      <div className="flex justify-between ">
        <Link
          href={"/outlink/term"}
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
