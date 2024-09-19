"use client";

import React from "react";
import { Table } from "@/app/_components/Table";
import Course from "@/app/_types/course";
import CourseItem from "./course-item";

// Mock data for courses
const courses: Course[] = [
  {
    id: "EKG464SJFN17",
    title: "부동산 공매 투자로 10억 만들기",
    instructor: "정은우",
    category: "제테크/투자",
    url: "https://google.com",
    updateDate: "2024-9-25",
    public: true,
    position: [1],
  },
  {
    id: "EKG464SJFN18",
    title: "부동산 공매 투자로 10억 만들기",
    instructor: "정은우",
    category: "제테크/투자",
    url: "https://google.com",
    updateDate: "2024-9-25",
    public: false,
    position: [2],
  },
  {
    id: "EKG464SJFN19",
    title: "부동산 공매 투자로 10억 만들기",
    instructor: "정은우",
    category: "제테크/투자",
    url: "https://google.com",
    updateDate: "2024-9-25",
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
      renderRow={(course) => <CourseItem key={course.id} course={course} />}
    />
  );
};

export default CourseList;
