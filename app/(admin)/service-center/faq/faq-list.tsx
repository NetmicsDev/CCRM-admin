"use client";

import React, { useState } from "react";
import Icon from "@/app/_components/Icon";
import { Table, Td } from "@/app/_components/Table";

// Mock data for faqs
const faqs = [
  {
    id: "EKG464SJFN17",
    faq: "회원가입은 어떻게 하나요?",
    category: "가입 관련",
    updateDate: "2024년 9월 25일",
  },
  {
    id: "EKG464SJFN18",
    faq: "회원가입은 어떻게 하나요?",
    category: "결제 관련",
    updateDate: "2024년 9월 25일",
  },
  {
    id: "EKG464SJFN19",
    faq: "회원가입은 어떻게 하나요?",
    category: "연동 관련",
    updateDate: "2024년 9월 25일",
  },
  {
    id: "EKG464SJFN20",
    faq: "회원가입은 어떻게 하나요?",
    category: "프로그램 관련",
    updateDate: "2024년 9월 25일",
  },
];

export const FaqList: React.FC = () => {
  const columns = [
    { label: "NO.", key: "id" },
    { label: "FAQ", key: "content" },
    { label: "카테고리", key: "category" },
    { label: "업데이트 날짜", key: "updateDate" },
    { label: "", key: "actions" },
  ];

  return (
    <Table
      columns={columns}
      data={faqs}
      renderRow={(faq) => (
        <tr key={faq.id} className="hover:bg-gray-50">
          <Td>{faq.id}</Td>
          <Td>{faq.content}</Td>
          <Td>{faq.category}</Td>
          <Td>{faq.updateDate}</Td>
          <Td className="w-0 space-x-2">
            <button className="p-2 rounded hover:bg-gray-200 text-gray-600 hover:text-gray-800">
              <Icon type="square-pen" className="w-5 h-5" />
            </button>
            <button className="p-2 rounded hover:bg-gray-200 text-gray-600 hover:text-gray-800">
              <Icon type="more-vertical" className="h-5 w-5" />
            </button>
          </Td>
        </tr>
      )}
    />
  );
};

export default FaqList;
