"use client";

import React, { useState } from "react";
import Icon from "@/app/_components/Icon";
import { Table, Td } from "@/app/_components/Table";
import cn from "@/app/_utils/cn";

// Mock data for users
const users = [
  {
    id: "EKG464SJFN17",
    email: "Designworks@gmail.com",
    name: "김재훈",
    tel: "010-6848-3286",
    joinDate: "2024년 9월 25일",
    subscribe: 2,
  },
  {
    id: "EKG464SJFN17",
    email: "Designworks@gmail.com",
    name: "정건준",
    tel: "010-6848-3286",
    joinDate: "2024년 9월 25일",
    subscribe: 1,
  },
  {
    id: "EKG464SJFN17",
    email: "Designworks@gmail.com",
    name: "구제연",
    tel: "010-6848-3286",
    joinDate: "2024년 9월 25일",
    subscribe: 0,
  },
];

export const UserList: React.FC = () => {
  const columns = [
    { label: "NO.", key: "id" },
    { label: "이메일", key: "email" },
    { label: "이름", key: "name" },
    { label: "연락처", key: "tel" },
    { label: "가입일", key: "joinDate" },
    { label: "구독 상태", key: "subsribe" },
    { label: "결제 정보", key: "info" },
    { label: "", key: "actions" },
  ];

  return (
    <Table
      columns={columns}
      data={users}
      renderRow={(user) => (
        <tr key={user.id} className="hover:bg-gray-50">
          <Td>{user.id}</Td>
          <Td>{user.email}</Td>
          <Td>{user.name}</Td>
          <Td>{user.tel}</Td>
          <Td>{user.joinDate}</Td>
          <Td>
            <span
              className={cn("inline-block rounded-full w-1 h-1 p-1 mr-2", {
                "bg-red-500": user.subscribe === 0,
                "bg-green-500": user.subscribe === 1,
                "bg-yellow-500": user.subscribe === 2,
              })}
            />
            {user.subscribe === 0
              ? "구독 해지"
              : user.subscribe === 1
              ? "구독 중"
              : "무료 체험"}
          </Td>
          <Td>
            <button className="px-3 py-1 bg-blue-100 text-blue-600 rounded-md hover:bg-blue-200 transition-colors">
              결제 정보
            </button>
          </Td>
          <Td className="w-0">
            <button className="p-2 rounded hover:bg-gray-200 text-gray-600 hover:text-gray-800">
              <Icon type="more-vertical" className="h-5 w-5" />
            </button>
          </Td>
        </tr>
      )}
    />
  );
};

export default UserList;
