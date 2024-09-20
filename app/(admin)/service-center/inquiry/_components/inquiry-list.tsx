"use client";

import React, { useState } from "react";
import Icon from "@/app/_components/Icon";
import { Table, Td } from "@/app/_components/Table";
import InquiryItem from "./inquiry-item";

// Mock data for inquiries
const inquiries = [
  {
    id: "EKG464SJFN17",
    title: "안녕하세요",
    category: "결제",
    updateDate: "2024년 9월 25일",
  },
  {
    id: "EKG464SJFN18",
    title: "안녕하세요",
    category: "가입",
    updateDate: "2024년 9월 25일",
  },
  {
    id: "EKG464SJFN19",
    title: "안녕하세요",
    category: "제휴",
    updateDate: "2024년 9월 25일",
  },
];

export const InquiryList: React.FC = () => {
  const columns = [
    { label: "NO.", key: "id" },
    { label: "문의 제목", key: "content" },
    { label: "카테고리", key: "category" },
    { label: "업데이트 날짜", key: "updateDate" },
    { label: "", key: "actions" },
  ];

  return (
    <Table
      columns={columns}
      data={inquiries}
      renderRow={(inquiry) => (
        <InquiryItem key={inquiry.id} inquiry={inquiry} />
      )}
    />
  );
};

export default InquiryList;
