"use client";

import React, { useEffect, useState } from "react";
import Icon from "@/app/_components/Icon";
import { Table, Td } from "@/app/_components/Table";
import NoticeItem from "./notice-item";
import { useSearchParams } from "next/navigation";
import PageList from "@/app/_models/page-list";
import getNotices from "@/app/_services/notice";
import { Pagination } from "@/app/_components/Pagination";
import NoticeModel from "@/app/_models/notice";

export const NoticeList: React.FC = () => {
  const searchParams = useSearchParams();
  const pageNum: number = Number(searchParams.get("page") ?? "1");

  const [notices, setNotices] = useState<PageList<NoticeModel>>();

  useEffect(() => {
    getNotices(pageNum)
      .then((data) => {
        setNotices(data);
      })
      .catch((err) => {
        console.log(err);
      });
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
