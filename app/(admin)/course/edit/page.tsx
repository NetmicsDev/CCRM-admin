"use client";

import CourseModel from "@/app/_models/course";
import { redirect, useSearchParams } from "next/navigation";
import CourseForm from "../_components/course-form";
import { Suspense } from "react";

export default function CourseEditPage() {
  return (
    <Suspense fallback={<div></div>}>
      <CourseEditInner />
    </Suspense>
  );
}

const CourseEditInner = () => {
  const searchParams = useSearchParams();
  if (!searchParams.has("data")) {
    redirect("/course");
    return;
  }
  const course = CourseModel.fromJson(
    JSON.parse(searchParams.get("data") ?? "{}")
  );

  if (!course.id) {
    redirect("/course");
  }

  return <CourseForm title="강의 수정하기" course={course} />;
};
