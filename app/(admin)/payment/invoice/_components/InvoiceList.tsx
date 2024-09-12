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
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">인보이스</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-50">
            <tr>
              <th className="w-12 py-3 px-4 text-left">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  checked={selectedInvoices.length === invoices.length}
                  onChange={toggleAll}
                />
              </th>
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
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
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
                    <img
                      src="/placeholder.svg?height=20&width=30"
                      alt={invoice.country}
                      className="rounded"
                    />
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
                <td className="py-4 px-4 whitespace-nowrap">
                  {invoice.amount}
                </td>
                <td className="py-4 px-4 whitespace-nowrap">
                  <div className="flex space-x-2">
                    <button className="p-1 rounded hover:bg-gray-100">
                      <Download className="h-4 w-4 text-gray-500" />
                    </button>
                    <button className="p-1 rounded hover:bg-gray-100">
                      <MoreVertical className="h-4 w-4 text-gray-500" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
