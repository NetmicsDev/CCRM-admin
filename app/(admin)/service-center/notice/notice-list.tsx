"use client";

import React, { useState } from "react";
import Icon from "@/app/_components/Icon";
import { Table, Td } from "@/app/_components/Table";

// Mock data for notices
const notices = [
  {
    id: "EKG464SJFN17",
    content: "공지사항 입니다.",
    category: "공지사항, 메인상단",
    updateDate: "2024년 9월 25일",
  },
  {
    id: "EKG464SJFN18",
    content: "공지사항 입니다.",
    category: "공지사항",
    updateDate: "2024년 9월 25일",
  },
  {
    id: "EKG464SJFN19",
    content: "공지사항 입니다.",
    category: "공지사항, 팝업",
    updateDate: "2024년 9월 25일",
  },
  {
    id: "EKG464SJFN20",
    content: "공지사항 입니다.",
    category: "청구/손해보험",
    updateDate: "2024년 9월 25일",
  },
];

export const NoticeList: React.FC = () => {
  const columns = [
    { label: "NO.", key: "id" },
    { label: "내용", key: "content" },
    { label: "카테고리", key: "category" },
    { label: "업데이트 날짜", key: "updateDate" },
    { label: "", key: "actions" },
  ];

  return (
    <Table
      columns={columns}
      data={notices}
      renderRow={(notice) => (
        <tr key={notice.id} className="hover:bg-gray-50">
          <Td>{notice.id}</Td>
          <Td>{notice.content}</Td>
          <Td>{notice.category}</Td>
          <Td>{notice.updateDate}</Td>
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

export default NoticeList;
