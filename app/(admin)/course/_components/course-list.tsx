"use client";

import React, { useState } from "react";
import Icon from "@/app/_components/Icon";
import { Table, Td } from "@/app/_components/Table";
import cn from "@/app/_utils/cn";

// Mock data for courses
const courses = [
  {
    id: "EKG464SJFN17",
    title: "부동산 공매 투자로 10억 만들기",
    instructor: "정은우",
    category: "제테크/투자",
    updateDate: "2024년 9월 25일",
    public: true,
    position: [1],
  },
  {
    id: "EKG464SJFN17",
    title: "부동산 공매 투자로 10억 만들기",
    instructor: "정은우",
    category: "제테크/투자",
    updateDate: "2024년 9월 25일",
    public: false,
    position: [2],
  },
  {
    id: "EKG464SJFN17",
    title: "부동산 공매 투자로 10억 만들기",
    instructor: "정은우",
    category: "제테크/투자",
    updateDate: "2024년 9월 25일",
    public: true,
    position: [1, 2],
  },
];

export const CourseList: React.FC = () => {
  const columns = [
    { label: "NO.", key: "id" },
    { label: "내용", key: "content" },
    { label: "강사명", key: "instructor" },
    { label: "카테고리", key: "category" },
    { label: "업데이트 날짜", key: "updateDate" },
    { label: "공개/비공개", key: "public" },
    { label: "레이아웃 위치", key: "position" },
    { label: "", key: "actions" },
  ];

  return (
    <Table
      columns={columns}
      data={courses}
      renderRow={(course) => (
        <tr key={course.id} className="hover:bg-gray-50">
          <Td>{course.id}</Td>
          <Td>{course.title}</Td>
          <Td>
            <div className="flex items-center gap-1">
              <Icon
                type="user-circle"
                className="inline-block w-5 h-5 stroke-gray-700"
              />
              <span>{course.instructor}</span>
            </div>
          </Td>
          <Td>{course.category}</Td>
          <Td>{course.updateDate}</Td>
          <Td>
            <span
              className={cn(
                "inline-block rounded-full w-1 h-1 p-1 mr-2",
                course.public ? "bg-green-500" : "bg-red-500"
              )}
            />
            {course.public ? "공개" : "비공개"}
          </Td>
          <Td>{course.position.join(", ")}</Td>
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

export default CourseList;
