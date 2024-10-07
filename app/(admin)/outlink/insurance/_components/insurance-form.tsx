"use client";

import { TextField } from "@/app/_components/Input";
import SelectField from "@/app/_components/Input/select-field";
import InsuranceModel, { InsuranceCategory } from "@/app/_models/insurance";
import Link from "next/link";

export default function InsuranceForm({
  insurance = InsuranceModel.empty(),
  title,
  onSubmit = () => {},
}: {
  insurance?: InsuranceModel;
  title: string;
  onSubmit?: (course: InsuranceModel) => void;
}) {
  const handleSubmit = async (formData: FormData) => {
    const newInsurance = new InsuranceModel(
      insurance.id,
      formData.get("category") as keyof typeof InsuranceCategory,
      formData.get("insurerName") as string,
      formData.get("insurerLogo") as string,
      formData.get("link") as string,
      "",
      "",
      insurance?.createdAt,
      new Date(),
      formData.get("public") === "true",
      1
    );
    onSubmit(newInsurance);
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
            defaultValue={insurance.category}
            options={Object.entries(InsuranceCategory).map(([key, value]) => ({
              text: value,
              value: key,
            }))}
          />
          <SelectField
            name="public"
            label="공개여부"
            defaultValue={insurance.isPublished ? "true" : "false"}
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
          defaultValue={insurance.insurerName}
          required
        />

        <TextField
          name="insurerLogo"
          label="회사 로고 링크"
          placeholder="회사 로고 링크를 입력해주세요"
          defaultValue={insurance.insurerLogo}
          required
        />

        <TextField
          name="link"
          label="회사 URL"
          placeholder="회사 URL를 입력해주세요"
          defaultValue={insurance.link}
          required
        />
      </div>
      <div className="flex justify-between ">
        <Link
          href={"/outlink/insurance"}
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
