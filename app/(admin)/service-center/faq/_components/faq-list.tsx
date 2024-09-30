"use client";

import React, { useEffect, useState } from "react";
import { Table } from "@/app/_components/Table";
import FaqItem from "./faq-item";
import { useSearchParams } from "next/navigation";
import PageList from "@/app/_models/page-list";
import { getFaqs } from "@/app/_services/faq";
import { Pagination } from "@/app/_components/Pagination";
import FaqModel from "@/app/_models/faq";
import useModalStore from "@/app/_utils/store/modal";

export const FaqList: React.FC = () => {
  const { openAlert } = useModalStore();
  const searchParams = useSearchParams();
  const pageNum: number = Number(searchParams.get("page") ?? "1");

  const [faqList, setFaqList] = useState<PageList<FaqModel>>();

  useEffect(() => {
    const fetchFaqs = async () => {
      const { data, error } = await getFaqs(pageNum);

      if (error) {
        openAlert({
          title: "서버 오류",
          description: error.message,
        });
        return;
      }

      setFaqList(data);
    };
    fetchFaqs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNum]);

  const columns = [
    { label: "NO.", key: "id" },
    { label: "FAQ", key: "title" },
    { label: "카테고리", key: "category" },
    { label: "업데이트 날짜", key: "updateAt" },
    { label: "", key: "actions" },
  ];

  return (
    <>
      <div className="block flex-1 overflow-auto">
        <Table
          columns={columns}
          data={faqList?.data ?? []}
          renderRow={(faq) => <FaqItem key={faq.id} faq={faq} />}
        />
      </div>
      <Pagination totalCount={faqList?.total ?? 0} currentPage={pageNum} />
    </>
  );
};

export default FaqList;
