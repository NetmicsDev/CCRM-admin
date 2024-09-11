"use client";
import React, { useState } from "react";
import {
  ChevronRight,
  Download,
  MoreVertical,
  Search,
  Bell,
  Settings,
} from "lucide-react";

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

const Sidebar = () => (
  <aside className="w-64 bg-white border-r h-screen p-4">
    <div className="flex items-center space-x-2 mb-6">
      <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
      <span className="font-bold text-xl">CCRM</span>
    </div>
    <nav>
      <ul className="space-y-2">
        <li>
          <a
            href="#"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded"
          >
            대시보드
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded"
          >
            강의 업로드/리스트
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded"
          >
            공지사항/FAQ/1:1문의
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded"
          >
            청구/환불 링크 관리
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded"
          >
            유저 리스트
          </a>
        </li>
        <li>
          <details open>
            <summary className="block py-2 px-4 text-blue-600 font-medium cursor-pointer hover:bg-blue-50 rounded">
              결제 관리
            </summary>
            <ul className="pl-8 space-y-1 mt-2">
              <li>
                <a
                  href="#"
                  className="block py-1 px-4 text-blue-600 bg-blue-50 rounded"
                >
                  인보이스
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-1 px-4 text-gray-700 hover:bg-gray-100 rounded"
                >
                  인보이스 내역
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-1 px-4 text-gray-700 hover:bg-gray-100 rounded"
                >
                  결제 정보
                </a>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </nav>
  </aside>
);

const Breadcrumb = () => (
  <nav className="text-sm p-4 bg-gray-100" aria-label="Breadcrumb">
    <ol className="flex">
      <li>
        <a href="#" className="text-gray-500 hover:text-gray-700">
          메인
        </a>
      </li>
      <li className="mx-2">
        <ChevronRight className="h-4 w-4 text-gray-400" />
      </li>
      <li>
        <a href="#" className="text-gray-500 hover:text-gray-700">
          결제관리
        </a>
      </li>
      <li className="mx-2">
        <ChevronRight className="h-4 w-4 text-gray-400" />
      </li>
      <li className="font-medium text-gray-900" aria-current="page">
        인보이스
      </li>
    </ol>
  </nav>
);

const InvoiceList = () => {
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
                    {/* 국가 이미지
                    <img
                      src="/placeholder.svg?height=20&width=30"
                      alt={invoice.country}
                      className="rounded"
                    /> */}
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

const Pagination = () => (
  <div className="flex justify-between items-center p-4 border-t">
    <span className="text-sm text-gray-500">16개 항목 중 1-8개 항목 표시</span>
    <div className="flex space-x-2">
      <button className="px-3 py-1 border rounded text-sm hover:bg-gray-50">
        &lt;
      </button>
      <button className="px-3 py-1 border rounded text-sm hover:bg-gray-50">
        1
      </button>
      <button className="px-3 py-1 border rounded text-sm bg-blue-50 text-blue-600">
        2
      </button>
      <button className="px-3 py-1 border rounded text-sm hover:bg-gray-50">
        3
      </button>
      <button className="px-3 py-1 border rounded text-sm hover:bg-gray-50">
        4
      </button>
      <button className="px-3 py-1 border rounded text-sm hover:bg-gray-50">
        5
      </button>
      <button className="px-3 py-1 border rounded text-sm hover:bg-gray-50">
        &gt;
      </button>
    </div>
  </div>
);

const Footer = () => (
  <footer className="text-center p-4 text-sm text-gray-500 border-t">
    <p>© 2024- dashboard. Design & develop by Artificial. co.ltd.</p>
    <div className="mt-2">
      <a href="#" className="mx-2 hover:underline">
        Documentation
      </a>
      <a href="#" className="mx-2 hover:underline">
        Privacy Policy
      </a>
      <a href="#" className="mx-2 hover:underline">
        FAQs
      </a>
    </div>
  </footer>
);

export default function InvoicePage() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Settings className="h-5 w-5 text-gray-500" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Bell className="h-5 w-5 text-gray-500" />
              </button>
            </div>
            <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
          </div>
        </header>
        <Breadcrumb />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white">
          <InvoiceList />
          <Pagination />
        </main>
        <Footer />
      </div>
    </div>
  );
}
