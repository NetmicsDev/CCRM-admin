"use client";

import { redirect, useSearchParams } from "next/navigation";
import NoticeForm from "../_components/notice-form";
import Notice from "@/app/_types/notice";
import { Suspense } from "react";

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
  const notice = JSON.parse(searchParams.get("data") ?? "{}");

  if (!notice.id) {
    redirect("/service-center/notice");
  }

  return <NoticeForm title="공지사항 수정하기" notice={notice as Notice} />;
};
