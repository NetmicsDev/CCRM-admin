"use client";

import React, { useState } from "react";
import Icon from "@/app/_components/Icon";
import { Table, Td } from "@/app/_components/Table";
import cn from "@/app/_utils/cn";

// Mock data for outlinks
const outlinks = [
  {
    id: "EKG464SJFN17",
    company: "KB손해보험",
    category: "청구/손해보험",
    updateDate: "2024년 9월 25일",
  },
  {
    id: "EKG464SJFN17",
    company: "KB손해보험",
    category: "약관/생명보험",
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
        <tr key={outlink.id} className="hover:bg-gray-50">
          <Td>{outlink.id}</Td>
          <Td>
            <div className="flex items-center gap-1">
              <Icon
                type="user-circle"
                className="inline-block w-5 h-5 stroke-gray-700"
              />
              <span>{outlink.company}</span>
            </div>
          </Td>
          <Td>{outlink.category}</Td>
          <Td>{outlink.updateDate}</Td>
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

export default OutlinkList;
