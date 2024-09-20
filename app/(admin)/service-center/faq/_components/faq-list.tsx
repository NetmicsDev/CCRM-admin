"use client";

import React, { useState } from "react";
import Icon from "@/app/_components/Icon";
import { Table, Td } from "@/app/_components/Table";
import FaqItem from "./faq-item";

// Mock data for faqs
const faqs = [
  {
    id: "EKG464SJFN17",
    title: "회원가입은 어떻게 하나요?",
    content: "어쩌구저쩌구",
    category: "가입",
    updateDate: "2024년 9월 25일",
  },
  {
    id: "EKG464SJFN18",
    title: "회원가입은 어떻게 하나요?",
    content: "어쩌구저쩌구",
    category: "결제",
    updateDate: "2024년 9월 25일",
  },
  {
    id: "EKG464SJFN19",
    title: "회원가입은 어떻게 하나요?",
    content: "어쩌구저쩌구",
    category: "연동",
    updateDate: "2024년 9월 25일",
  },
  {
    id: "EKG464SJFN20",
    title: "회원가입은 어떻게 하나요?",
    content: "어쩌구저쩌구",
    category: "프로그램",
    updateDate: "2024년 9월 25일",
  },
];

export const FaqList: React.FC = () => {
  const columns = [
    { label: "NO.", key: "id" },
    { label: "FAQ", key: "title" },
    { label: "카테고리", key: "category" },
    { label: "업데이트 날짜", key: "updateDate" },
    { label: "", key: "actions" },
  ];

  return (
    <Table
      columns={columns}
      data={faqs}
      renderRow={(faq) => <FaqItem key={faq.id} faq={faq} />}
    />
  );
};

export default FaqList;
