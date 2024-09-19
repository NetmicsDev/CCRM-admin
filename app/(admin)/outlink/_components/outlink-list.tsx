"use client";

import React, { useState } from "react";
import Icon from "@/app/_components/Icon";
import { Table, Td } from "@/app/_components/Table";
import cn from "@/app/_utils/cn";
import OutlinkItem from "./outlink-item";

// Mock data for outlinks
const outlinks = [
  {
    id: "EKG464SJFN17",
    company: "KB손해보험",
    category: "청구/손해보험",
    public: true,
    logo: "https://google.com",
    url: "https://google.com",
    updateDate: "2024년 9월 25일",
  },
  {
    id: "EKG464SJFN17",
    company: "KB손해보험",
    category: "약관/생명보험",
    public: true,
    logo: "https://google.com",
    url: "https://google.com",
    updateDate: "2024년 9월 25일",
  },
];

export const OutlinkList: React.FC = () => {
  const columns = [
    { label: "NO.", key: "id" },
    { label: "회사명", key: "company" },
    { label: "카테고리", key: "category" },
    { label: "업데이트 날짜", key: "updateDate" },
    { label: "", key: "actions" },
  ];

  return (
    <Table
      columns={columns}
      data={outlinks}
      renderRow={(outlink) => (
        <OutlinkItem key={outlink.id} outlink={outlink} />
      )}
    />
  );
};

export default OutlinkList;
