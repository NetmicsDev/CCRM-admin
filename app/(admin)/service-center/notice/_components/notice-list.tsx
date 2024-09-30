"use client";

import React, { useEffect, useState } from "react";
import { Table } from "@/app/_components/Table";
import NoticeItem from "./notice-item";
import { useSearchParams } from "next/navigation";
import PageList from "@/app/_models/page-list";
import { getNotices } from "@/app/_services/notice";
import { Pagination } from "@/app/_components/Pagination";
import NoticeModel from "@/app/_models/notice";
import useModalStore from "@/app/_utils/store/modal";

export const NoticeList: React.FC = () => {
  const { openAlert } = useModalStore();
  const searchParams = useSearchParams();
  const pageNum: number = Number(searchParams.get("page") ?? "1");

  const [notices, setNotices] = useState<PageList<NoticeModel>>();

  useEffect(() => {
    const fetchNotices = async () => {
      const { data, error } = await getNotices(pageNum);

      if (error) {
        openAlert({
          title: "서버 오류",
          description: error.message,
        });
        return;
      }

      setNotices(data);
    };
    fetchNotices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNum]);

  const columns = [
    { label: "NO.", key: "id" },
    { label: "제목", key: "title" },
    { label: "카테고리", key: "category" },
    { label: "업데이트 날짜", key: "updatedAt" },
    { label: "", key: "actions" },
  ];

  return (
    <>
      <div className="block flex-1 overflow-auto">
        <Table
          columns={columns}
          data={notices?.data ?? []}
          renderRow={(notice) => <NoticeItem key={notice.id} notice={notice} />}
        />
      </div>
      <Pagination totalCount={notices?.total ?? 0} currentPage={pageNum} />
    </>
  );
};

export default NoticeList;
