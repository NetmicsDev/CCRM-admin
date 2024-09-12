"use client";

import React, { useState } from "react";
import Icon from "@/app/_components/Icon";

// Mock data for outlinks
const outlinks = [
  {
    id: "EKG464SJFN17",
    company: "정은우",
    category: "청구/손해보험",
    updateDate: "2024년 9월 25일",
  },
  {
    id: "EKG464SJFN18",
    company: "정은우",
    category: "약관/생명보험",
    updateDate: "2024년 9월 25일",
  },
];

export const OutlinkList: React.FC = () => {
  const [selectedOutlinks, setSelectedOutlinks] = useState<string[]>([]);

  const toggleSelectAll = () => {
    if (selectedOutlinks.length === outlinks.length) {
      setSelectedOutlinks([]);
    } else {
      setSelectedOutlinks(outlinks.map((outlink) => outlink.id));
    }
  };

  const toggleSelect = (id: string) => {
    setSelectedOutlinks((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-100">
          <tr>
            <th className="w-12 py-3 px-4 text-left">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                checked={selectedOutlinks.length === outlinks.length}
                onChange={toggleSelectAll}
              />
            </th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              NO.
            </th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              회사 로고 파일/회사명
            </th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              카테고리
            </th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              업데이트 날짜
            </th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              내용
            </th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-sm">
          {outlinks.map((outlink) => (
            <tr key={outlink.id} className="hover:bg-gray-50">
              <td className="py-4 px-4">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  checked={selectedOutlinks.includes(outlink.id)}
                  onChange={() => toggleSelect(outlink.id)}
                />
              </td>
              <td className="py-4 px-4 whitespace-nowrap">{outlink.id}</td>
              <td className="py-4 px-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
                  <span>{outlink.company}</span>
                </div>
              </td>
              <td className="py-4 px-4 whitespace-nowrap">
                {outlink.category}
              </td>
              <td className="py-4 px-4 whitespace-nowrap">
                {outlink.updateDate}
              </td>
              <td className="py-4 px-4 whitespace-nowrap">
                <Icon type="edit-2" className="h-4 w-4 text-gray-700" />
              </td>
              <td className="py-4 px-4 whitespace-nowrap text-right text-sm font-medium">
                <button className="text-gray-400 hover:text-gray-500">
                  <Icon type="more-vertical" className="h-5 w-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
