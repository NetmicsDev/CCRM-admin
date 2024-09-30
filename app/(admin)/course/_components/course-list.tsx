"use client";

import React, { useEffect, useState } from "react";
import { Table } from "@/app/_components/Table";
import CourseModel from "@/app/_models/course";
import CourseItem from "./course-item";
import { useSearchParams } from "next/navigation";
import PageList from "@/app/_models/page-list";
import { getCourses } from "@/app/_services/course";
import { Pagination } from "@/app/_components/Pagination";
import useModalStore from "@/app/_utils/store/modal";

export const CourseList: React.FC = () => {
  const { openAlert } = useModalStore();
  const searchParams = useSearchParams();
  const pageNum: number = Number(searchParams.get("page") ?? "1");

  const [courses, setCourses] = useState<PageList<CourseModel>>();

  useEffect(() => {
    const fetchCourses = async () => {
      const { data, error } = await getCourses(pageNum);

      if (error) {
        openAlert({
          title: "서버 오류",
          description: error.message,
        });
        return;
      }

      setCourses(data);
    };
    fetchCourses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
