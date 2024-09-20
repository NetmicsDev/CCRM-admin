"use client";

import React, { useState } from "react";
import Icon from "@/app/_components/Icon";
import { Table, Td } from "@/app/_components/Table";
import NoticeItem from "./notice-item";

// Mock data for notices
const notices = [
  {
    id: "EKG464SJFN17",
    title: "공지사항 입니다.",
    content: "공지사항 내용입니다!",
    category: "main",
    updateDate: "2024년 9월 25일",
  },
  {
    id: "EKG464SJFN18",
    title: "공지사항 입니다.",
    content: "공지사항 내용입니다!",
    category: "notice",
    updateDate: "2024년 9월 25일",
  },
  {
    id: "EKG464SJFN19",
    title: "공지사항 입니다.",
    content: "공지사항 내용입니다!",
    category: "popup",
    updateDate: "2024년 9월 25일",
  },
];

export const NoticeList: React.FC = () => {
  const columns = [
    { label: "NO.", key: "id" },
    { label: "제목", key: "content" },
    { label: "카테고리", key: "category" },
    { label: "업데이트 날짜", key: "updateDate" },
    { label: "", key: "actions" },
  ];

  return (
    <Table
      columns={columns}
      data={notices}
      renderRow={(notice) => <NoticeItem key={notice.id} notice={notice} />}
    />
  );
};

export default NoticeList;
