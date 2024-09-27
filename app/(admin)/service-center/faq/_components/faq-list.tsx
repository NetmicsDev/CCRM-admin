"use client";

import React, { useEffect, useState } from "react";
import { Table } from "@/app/_components/Table";
import FaqItem from "./faq-item";
import { useSearchParams } from "next/navigation";
import PageList from "@/app/_models/page-list";
import getFAQs from "@/app/_services/faq";
import { Pagination } from "@/app/_components/Pagination";
import FaqModel from "@/app/_models/faq";

export const FaqList: React.FC = () => {
  const searchParams = useSearchParams();
  const pageNum: number = Number(searchParams.get("page") ?? "1");

  const [faqList, setFaqList] = useState<PageList<FaqModel>>();

  useEffect(() => {
    getFAQs(pageNum)
      .then((data) => {
        setFaqList(data);
      })
      .catch((err) => {
        console.log(err);
      });
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
