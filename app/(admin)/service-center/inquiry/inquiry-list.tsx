"use client";

import React, { useState } from "react";
import Icon from "@/app/_components/Icon";
import { Table, Td } from "@/app/_components/Table";

// Mock data for inquiries
const inquiries = [
  {
    id: "EKG464SJFN17",
    content: "안녕하세요",
    category: "결제 문의",
    updateDate: "2024년 9월 25일",
  },
  {
    id: "EKG464SJFN18",
    content: "안녕하세요",
    category: "프로그램 문의",
    updateDate: "2024년 9월 25일",
  },
  {
    id: "EKG464SJFN19",
    content: "안녕하세요",
    category: "제휴 문의",
    updateDate: "2024년 9월 25일",
  },
];

export const InquiryList: React.FC = () => {
  const columns = [
    { label: "NO.", key: "id" },
    { label: "문의 내용", key: "content" },
    { label: "카테고리", key: "category" },
    { label: "업데이트 날짜", key: "updateDate" },
    { label: "", key: "actions" },
  ];

  return (
    <Table
      columns={columns}
      data={inquiries}
      renderRow={(inquiry) => (
        <tr key={inquiry.id} className="hover:bg-gray-50">
          <Td>{inquiry.id}</Td>
          <Td>{inquiry.content}</Td>
          <Td>{inquiry.category}</Td>
          <Td>{inquiry.updateDate}</Td>
          <Td className="w-0 space-x-2">
            <button className="p-2 rounded hover:bg-gray-200 text-gray-600 hover:text-gray-800">
              <Icon type="send" className="w-5 h-5" />
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

export default InquiryList;
