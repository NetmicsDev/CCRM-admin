"use client";

import React, { useEffect, useState } from "react";
import { Table } from "@/app/_components/Table";
import TermItem from "./term-item";
import { useSearchParams } from "next/navigation";
import PageList from "@/app/_models/page-list";
import { getTerms } from "@/app/_services/term";
import { Pagination } from "@/app/_components/Pagination";
import TermModel from "@/app/_models/term";
import useModalStore from "@/app/_utils/store/modal";

export const TermList: React.FC = () => {
  const { openAlert } = useModalStore();
  const searchParams = useSearchParams();
  const pageNum: number = Number(searchParams.get("page") ?? "1");

  const [terms, setTerms] = useState<PageList<TermModel>>();

  useEffect(() => {
    const fetchTerms = async () => {
      const { data, error } = await getTerms(pageNum);

      if (error) {
        openAlert({
          title: "서버 오류",
          description: error.message,
        });
        return;
      }

      setTerms(data);
    };
    fetchTerms();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNum]);

  const columns = [
    { label: "NO.", key: "id" },
    { label: "카테고리", key: "category" },
    { label: "회사명", key: "title" },
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
