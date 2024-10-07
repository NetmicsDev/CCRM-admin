"use client";

import { redirect, useRouter, useSearchParams } from "next/navigation";
import NoticeForm from "../_components/notice-form";
import { Suspense } from "react";
import NoticeModel from "@/app/_models/notice";
import { updateNotice } from "@/app/_services/notice";
import useModalStore from "@/app/_utils/store/modal";

export default function NoticeEditPage() {
  return (
    <Suspense fallback={<div></div>}>
      <NoticeEditInner />
    </Suspense>
  );
}

const NoticeEditInner = () => {
  const router = useRouter();
  const { openAlert } = useModalStore();

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

  const editNotice = async (notice: NoticeModel) => {
    const { error } = await updateNotice(notice);
    if (error) {
      openAlert({
        title: "공지사항 업데이트 오류",
        description: error.message,
      });
    } else {
      await openAlert({
        title: "공지사항 업데이트",
        description: "공지사항 업데이트 완료!",
      });
      router.replace("/service-center/notice");
    }
  };

  return (
    <NoticeForm
      title="공지사항 수정하기"
      notice={notice}
      onSubmit={editNotice}
    />
  );
};
