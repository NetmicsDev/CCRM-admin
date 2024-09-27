"use client";

import React, { useEffect, useState } from "react";
import { Table } from "@/app/_components/Table";
import CourseModel from "@/app/_models/course";
import CourseItem from "./course-item";
import { useSearchParams } from "next/navigation";
import PageList from "@/app/_models/page-list";
import getCourses from "@/app/_services/course";
import { Pagination } from "@/app/_components/Pagination";

export const CourseList: React.FC = () => {
  const searchParams = useSearchParams();
  const pageNum: number = Number(searchParams.get("page") ?? "1");

  const [courses, setCourses] = useState<PageList<CourseModel>>();

  useEffect(() => {
    getCourses(pageNum)
      .then((data) => {
        setCourses(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pageNum]);

  return (
    <>
      <div className="block flex-1 overflow-auto">
        <Table
          columns={CourseModel.tableColumns}
          data={courses?.data ?? []}
          renderRow={(course) => <CourseItem key={course.id} course={course} />}
        />
      </div>
      <Pagination totalCount={courses?.total ?? 0} currentPage={pageNum} />
    </>
  );
};

export default CourseList;
