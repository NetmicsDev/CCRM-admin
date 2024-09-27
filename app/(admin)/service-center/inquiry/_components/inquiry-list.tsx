"use client";

import React, { useEffect, useState } from "react";
import Icon from "@/app/_components/Icon";
import { Table, Td } from "@/app/_components/Table";
import InquiryItem from "./inquiry-item";
import { useSearchParams } from "next/navigation";
import PageList from "@/app/_models/page-list";
import getInquiries from "@/app/_services/inquiry";
import { Pagination } from "@/app/_components/Pagination";
import InquiryModel from "@/app/_models/inquiry";

export const InquiryList: React.FC = () => {
  const searchParams = useSearchParams();
  const pageNum: number = Number(searchParams.get("page") ?? "1");

  const [inquiries, setInquiries] = useState<PageList<InquiryModel>>();

  useEffect(() => {
    getInquiries(pageNum)
      .then((data) => {
        setInquiries(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pageNum]);

  const columns = [
    { label: "NO.", key: "id" },
    { label: "문의 제목", key: "inquiryTitle" },
    { label: "카테고리", key: "category" },
    { label: "상태", key: "status" },
    { label: "업데이트 날짜", key: "updatedAt" },
    { label: "", key: "actions" },
  ];

  return (
    <>
      <div className="block flex-1 overflow-auto">
        <Table
          columns={columns}
          data={inquiries?.data ?? []}
          renderRow={(inquiry) => (
            <InquiryItem key={inquiry.id} inquiry={inquiry} />
          )}
        />
      </div>
      <Pagination totalCount={inquiries?.total ?? 0} currentPage={pageNum} />
    </>
  );
};

export default InquiryList;
