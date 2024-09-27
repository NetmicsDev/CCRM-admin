"use client";

import { redirect, useSearchParams } from "next/navigation";
import NoticeForm from "../_components/notice-form";
import { Suspense } from "react";
import NoticeModel from "@/app/_models/notice";

export default function NoticeEditPage() {
  return (
    <Suspense fallback={<div></div>}>
      <NoticeEditInner />
    </Suspense>
  );
}

const NoticeEditInner = () => {
  const searchParams = useSearchParams();
  if (!searchParams.has("data")) {
    redirect("/service-center/notice");
    return;
  }
  const notice = NoticeModel.fromJson(
    JSON.parse(searchParams.get("data") ?? "{}")
  );

  if (!notice.id) {
    redirect("/service-center/notice");
  }

  return <NoticeForm title="공지사항 수정하기" notice={notice} />;
};
