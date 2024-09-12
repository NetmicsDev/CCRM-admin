"use client";

import React, { useState } from "react";
import { MoreVertical, ChevronLeft, ChevronRight } from "lucide-react";
import Icon from "@/app/_components/Icon";

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
  const [selectedNotices, setSelectedNotices] = useState<string[]>([]);

  const toggleSelectAll = () => {
    if (selectedNotices.length === notices.length) {
      setSelectedNotices([]);
    } else {
      setSelectedNotices(notices.map((notice) => notice.id));
    }
  };

  const toggleSelect = (id: string) => {
    setSelectedNotices((prev) =>
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
                checked={selectedNotices.length === notices.length}
                onChange={toggleSelectAll}
              />
            </th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              NO.
            </th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              내용
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
          {notices.map((notice) => (
            <tr key={notice.id} className="hover:bg-gray-50">
              <td className="py-4 px-4">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  checked={selectedNotices.includes(notice.id)}
                  onChange={() => toggleSelect(notice.id)}
                />
              </td>
              <td className="py-4 px-4 whitespace-nowrap">{notice.id}</td>
              <td className="py-4 px-4 whitespace-nowrap">{notice.content}</td>
              <td className="py-4 px-4 whitespace-nowrap">{notice.category}</td>
              <td className="py-4 px-4 whitespace-nowrap">
                {notice.updateDate}
              </td>
              <td className="py-4 px-4 whitespace-nowrap">
                <Icon type="edit-2" className="w-4 h-5 stroke-gray-700" />
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
