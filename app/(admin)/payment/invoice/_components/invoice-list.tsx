"use client";

import React, { useState } from "react";
import { Download, MoreVertical } from "lucide-react";

const invoices = [
  {
    id: "EKG464SJFN17",
    description: "월 정액 구독 10000",
    country: "대한민국",
    vatNo: "87956621",
    date: "2024년 9월 25일",
    status: "보류중",
    amount: "10,000 ₩",
  },
  {
    id: "EKG464SJFN18",
    description: "월 정액 구독 10000",
    country: "대한민국",
    vatNo: "87956622",
    date: "2024년 9월 25일",
    status: "결제완료",
    amount: "10,000 ₩",
  },
  // Add more invoice data here...
];

export const InvoiceList = () => {
  const [selectedInvoices, setSelectedInvoices] = useState<string[]>([]);

  const toggleAll = () => {
    if (selectedInvoices.length === invoices.length) {
      setSelectedInvoices([]);
    } else {
      setSelectedInvoices(invoices.map((invoice) => invoice.id));
    }
  };

  const toggleInvoice = (id: string) => {
    setSelectedInvoices((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-100">
          <tr>
            <th className="w-12 py-3 px-4 text-left"></th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              NO.
            </th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              결제 유형
            </th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              이름
            </th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              VAT NO.
            </th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              날짜
            </th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              상태
            </th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              결제 금액
            </th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              내용
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-sm">
          {invoices.map((invoice) => (
            <tr key={invoice.id} className="hover:bg-gray-50">
              <td className="py-4 px-4">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  checked={selectedInvoices.includes(invoice.id)}
                  onChange={() => toggleInvoice(invoice.id)}
                />
              </td>
              <td className="py-4 px-4 whitespace-nowrap">{invoice.id}</td>
              <td className="py-4 px-4 whitespace-nowrap">
                {invoice.description}
              </td>
              <td className="py-4 px-4 whitespace-nowrap">
                <div className="flex items-center space-x-2">
                  <span>{invoice.country}</span>
                </div>
              </td>
              <td className="py-4 px-4 whitespace-nowrap">{invoice.vatNo}</td>
              <td className="py-4 px-4 whitespace-nowrap">{invoice.date}</td>
              <td className="py-4 px-4 whitespace-nowrap">
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    invoice.status === "보류중"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  {invoice.status}
                </span>
              </td>
              <td className="py-4 px-4 whitespace-nowrap">{invoice.amount}</td>
              <td className="py-4 px-4 whitespace-nowrap">
                <button className="p-1 rounded hover:bg-gray-200">
                  <Download className="h-4 w-4 text-gray-500" />
                </button>
              </td>
              <td>
                <button className="p-1 rounded hover:bg-gray-200">
                  <MoreVertical className="h-4 w-4 text-gray-500" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
