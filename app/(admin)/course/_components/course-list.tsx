"use client";

import React, { useState } from "react";
import { MoreVertical, Edit2 } from "lucide-react";
import Icon from "@/app/_components/Icon";

// Mock data for courses
const courses = [
  {
    id: "EKG464SJFN17",
    title: "부동산 공매 투자로 10억 만들기",
    instructor: "정은우",
    category: "재테크/투자",
    uploadDate: "2024년 9월 25일",
    status: "공개",
    position: [1],
  },
  {
    id: "EKG464SJFN20",
    title: "부동산 공매 투자로 10억 만들기",
    instructor: "정은우",
    category: "재테크/투자",
    uploadDate: "2024년 9월 25일",
    status: "비공개",
    position: [1],
  },
  {
    id: "EKG464SJFN22",
    title: "부동산 공매 투자로 10억 만들기",
    instructor: "정은우",
    category: "재테크/투자",
    uploadDate: "2024년 9월 25일",
    status: "공개",
    position: [2],
  },
  {
    id: "EKG464SJFN23",
    title: "부동산 공매 투자로 10억 만들기",
    instructor: "정은우",
    category: "재테크/투자",
    uploadDate: "2024년 9월 25일",
    status: "공개",
    position: [1, 2],
  },
];

export const CourseList: React.FC = () => {
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);

  const toggleSelectAll = () => {
    if (selectedCourses.length === courses.length) {
      setSelectedCourses([]);
    } else {
      setSelectedCourses(courses.map((course) => course.id));
    }
  };

  const toggleSelect = (id: string) => {
    setSelectedCourses((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const getStatusColor = (status: string) => {
    return status === "공개"
      ? "bg-green-100 text-green-800"
      : "bg-red-100 text-red-800";
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
                checked={selectedCourses.length === courses.length}
                onChange={toggleSelectAll}
              />
            </th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              NO.
            </th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              제목
            </th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              강사
            </th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              카테고리
            </th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              업로드 날짜
            </th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              공개/비공개
            </th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              레이아웃 위치
            </th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              내용
            </th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-sm">
          {courses.map((course) => (
            <tr key={course.id} className="hover:bg-gray-50">
              <td className="py-4 px-4">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  checked={selectedCourses.includes(course.id)}
                  onChange={() => toggleSelect(course.id)}
                />
              </td>
              <td className="py-4 px-4 whitespace-nowrap">{course.id}</td>
              <td className="py-4 px-4 whitespace-nowrap">{course.title}</td>
              <td className="py-4 px-4 whitespace-nowrap">
                <div className="flex items-center">
                  <span>{course.instructor}</span>
                </div>
              </td>
              <td className="py-4 px-4 whitespace-nowrap">{course.category}</td>
              <td className="py-4 px-4 whitespace-nowrap">
                {course.uploadDate}
              </td>
              <td className="py-4 px-4 whitespace-nowrap">
                <span
                  className={`px-2 py-1 rounded-full text-xs ${getStatusColor(
                    course.status
                  )}`}
                >
                  {course.status}
                </span>
              </td>
              <td className="py-4 px-4 whitespace-nowrap">
                {course.position.join(", ")}
              </td>
              <td className="py-4 px-4 whitespace-nowrap">
                <Icon type="edit-2" className="h-4 w-4 stroke-gray-700" />
              </td>
              <td className="py-4 px-4 whitespace-nowrap text-right text-sm font-medium">
                <button className="text-gray-400 hover:text-gray-500">
                  <MoreVertical className="h-5 w-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
