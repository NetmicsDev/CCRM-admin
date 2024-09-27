import { FaqList } from "./_components/faq-list";
import Link from "next/link";
import Icon from "@/app/_components/Icon";

export default function FaqPage() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex w-full justify-between items-center mb-4">
        <h1 className="text-xl font-semibold ">FAQ</h1>
        <Link
          href={"/service-center/faq/new"}
          className="rounded-full py-1.5 pl-2.5 pr-4 flex items-center text-white text-sm font-medium bg-gray-700 hover:bg-gray-800"
        >
          <Icon type="plus" className="w-4 h-4 mr-1" />
          FAQ 추가하기
        </Link>
      </div>
      <FaqList />
    </div>
  );
}
