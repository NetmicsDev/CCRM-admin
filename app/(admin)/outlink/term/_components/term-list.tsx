"use client";

import React, { useEffect, useState } from "react";
import Icon from "@/app/_components/Icon";
import { Table, Td } from "@/app/_components/Table";
import TermItem from "./term-item";
import { useSearchParams } from "next/navigation";
import PageList from "@/app/_models/page-list";
import getTerms from "@/app/_services/term";
import { Pagination } from "@/app/_components/Pagination";
import TermModel from "@/app/_models/term";

export const TermList: React.FC = () => {
  const searchParams = useSearchParams();
  const pageNum: number = Number(searchParams.get("page") ?? "1");

  const [terms, setTerms] = useState<PageList<TermModel>>();

  useEffect(() => {
    getTerms(pageNum)
      .then((data) => {
        setTerms(data);
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
          data={terms?.data ?? []}
          renderRow={(term) => <TermItem key={term.id} term={term} />}
        />
      </div>
      <Pagination totalCount={terms?.total ?? 0} currentPage={pageNum} />
    </>
  );
};

export default TermList;
