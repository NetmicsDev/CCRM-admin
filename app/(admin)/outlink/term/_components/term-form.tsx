"use client";

import SelectField from "@/app/_components/Input/select-field";
import TextField from "@/app/_components/Input/text-field";
import TermModel, { TermCategory } from "@/app/_models/term";
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
    const newTerm = new TermModel(
      term?.id,
      formData.get("category") as keyof typeof TermCategory,
      formData.get("insurerName") as string,
      formData.get("insurerLogo") as string,
      formData.get("link") as string,
      term?.createdAt,
      new Date(),
      formData.get("public") === "true",
      ""
    );
    onSubmit(newTerm);
  };

  return (
    <form className="flex flex-col h-full" action={handleSubmit}>
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold mb-6">{title}</h2>
      </div>

      <div className="flex flex-col flex-1 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SelectField
            name="category"
            label="카테고리"
            defaultValue={term.category}
            options={Object.entries(TermCategory).map(([key, value]) => ({
              text: value,
              value: key,
            }))}
          />
          <SelectField
            name="public"
            label="공개여부"
            defaultValue={term.isPublished ? "true" : "false"}
            options={[
              { text: "공개", value: "true" },
              { text: "비공개", value: "false" },
            ]}
          />
        </div>

        <TextField
          name="insurerName"
          label="회사명"
          placeholder="회사명을 작성해주세요"
          defaultValue={term.insurerName}
          required
        />

        <TextField
          name="insurerLogo"
          label="회사 로고 링크"
          placeholder="회사 로고 링크를 입력해주세요"
          defaultValue={term.insurerLogo}
          required
        />

        <TextField
          name="link"
          label="약관 URL"
          placeholder="약관 URL를 입력해주세요"
          defaultValue={term.link}
          required
        />
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
