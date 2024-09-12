"use client";

import Icon from "@/app/_components/Icon";

import React, { useState } from "react";

// Mock data for users
const users = [
  {
    id: "EKG464SJFN17",
    email: "Designworks@gmail.com",
    name: "Wade Warren",
    country: "GB",
    phone: "010-5113-8457",
    registrationDate: "2024년 8월 14일",
    status: "무료 체험 기간",
    paymentStatus: "결제 정보",
  },
  {
    id: "EKG464SJFN19",
    email: "Designworks@gmail.com",
    name: "Annette Black",
    country: "AT",
    phone: "010-5113-8457",
    registrationDate: "2024년 8월 14일",
    status: "구독 중",
    paymentStatus: "결제 정보",
  },
  {
    id: "EKG464SJFN22",
    email: "Designworks@gmail.com",
    name: "Guy Hawkins",
    country: "AT",
    phone: "010-5113-8457",
    registrationDate: "2024년 8월 14일",
    status: "구독 해지",
    paymentStatus: "결제 정보",
  },
];

export const UserList: React.FC = () => {
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);

  const toggleSelectAll = () => {
    if (selectedUsers.length === users.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(users.map((user) => user.id));
    }
  };

  const toggleSelect = (id: string) => {
    setSelectedUsers((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "무료 체험 기간":
        return "bg-yellow-100 text-yellow-800";
      case "구독 중":
        return "bg-green-100 text-green-800";
      case "구독 해지":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-700";
    }
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
              이메일
            </th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              유저 이름
            </th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              연락처
            </th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              가입일
            </th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              구독 상태
            </th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              결제 정보
            </th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-sm">
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50">
              <td className="py-4 px-4">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  checked={selectedUsers.includes(user.id)}
                  onChange={() => toggleSelect(user.id)}
                />
              </td>
              <td className="py-4 px-4 whitespace-nowrap">{user.id}</td>
              <td className="py-4 px-4 whitespace-nowrap">{user.email}</td>
              <td className="py-4 px-4 whitespace-nowrap">
                <div className="flex items-center">
                  <span>{user.name}</span>
                </div>
              </td>
              <td className="py-4 px-4 whitespace-nowrap">{user.phone}</td>
              <td className="py-4 px-4 whitespace-nowrap">
                {user.registrationDate}
              </td>
              <td className="py-4 px-4 whitespace-nowrap">
                <span
                  className={`px-2 py-1 rounded-full text-xs ${getStatusColor(
                    user.status
                  )}`}
                >
                  {user.status}
                </span>
              </td>
              <td className="py-4 px-4 whitespace-nowrap">
                <button className="px-3 py-1 bg-blue-100 text-blue-600 rounded-md hover:bg-blue-200 transition-colors">
                  {user.paymentStatus}
                </button>
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
