import TermList from "./_components/term-list";
import Link from "next/link";
import Icon from "@/app/_components/Icon";
import { Suspense } from "react";
import React from "react";

export default function NoticePage() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex w-full justify-between items-center mb-4">
        <h1 className="text-xl font-semibold ">보험 약관</h1>
        <Link
          href={"/outlink/term/new"}
          className="rounded-full py-1.5 pl-2.5 pr-4 flex items-center text-white text-sm font-medium bg-gray-700 hover:bg-gray-800"
        >
          <Icon type="plus" className="w-4 h-4 mr-1" />
          보험 약관 추가하기
        </Link>
      </div>
      <Suspense fallback={<></>}>
        <TermList />
      </Suspense>
    </div>
  );
}
