"use client";

import React, { useState } from "react";
import Icon from "@/app/_components/Icon";
import { Table, Td } from "@/app/_components/Table";
import cn from "@/app/_utils/cn";
import Link from "next/link";

// Mock data for invoices
const invoices = [
  {
    id: "EKG464SJFN17",
    type: "월 후불 구독 10000",
    name: "김재훈",
    vat: "87956621",
    date: "2024년 9월 25일",
    status: 0,
    amount: 10000,
  },
  {
    id: "EKG464SJFN18",
    type: "월 후불 구독 10000",
    name: "김재훈",
    vat: "87956621",
    date: "2024년 9월 25일",
    status: 1,
    amount: 10000,
  },
];

export const InvoiceList: React.FC = () => {
  const columns = [
    { label: "NO.", key: "id" },
    { label: "결제 유형", key: "type" },
    { label: "이름", key: "name" },
    { label: "VAT NO.", key: "vat" },
    { label: "날짜", key: "date" },
    { label: "상태", key: "status" },
    { label: "결제 금액", key: "amount" },
    { label: "", key: "actions" },
  ];

  return (
    <Table
      columns={columns}
      data={invoices}
      renderRow={(info) => (
        <tr key={info.id} className="hover:bg-gray-50">
          <Td>{info.id}</Td>
          <Td>{info.type}</Td>
          <Td>{info.name}</Td>
          <Td>{info.vat}</Td>
          <Td>{info.date}</Td>
          <Td>
            <span
              className={cn(
                "inline-block rounded-full w-1 h-1 p-1 mr-2",
                info.status ? "bg-green-500" : "bg-yellow-500"
              )}
            />
            {info.status === 0 ? "보류중" : "결제 완료"}
          </Td>
          <Td>{info.amount.toLocaleString("ko-KR")}원</Td>
          <Td className="w-0 space-x-2 items-center">
            <Link
              href={`/payment/invoice/${info.id}`}
              className="inline-flex p-2 rounded hover:bg-gray-200 text-gray-600 hover:text-gray-800"
            >
              <Icon type="file-search" className="h-5 w-5" />
            </Link>
            <button className="p-2 rounded hover:bg-gray-200 text-gray-600 hover:text-gray-800">
              <Icon type="more-vertical" className="h-5 w-5" />
            </button>
          </Td>
        </tr>
      )}
    />
  );
};

export default InvoiceList;
