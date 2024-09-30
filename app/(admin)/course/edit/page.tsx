"use client";

import CourseModel from "@/app/_models/course";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import CourseForm from "../_components/course-form";
import { Suspense } from "react";
import { updateCourse } from "@/app/_services/course";
import useModalStore from "@/app/_utils/store/modal";

export default function CourseEditPage() {
  return (
    <Suspense fallback={<div></div>}>
      <CourseEditInner />
    </Suspense>
  );
}

const CourseEditInner = () => {
  const { openAlert } = useModalStore();
  const router = useRouter();
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

  const editCourse = async (course: CourseModel) => {
    const { error } = await updateCourse(course);

    if (error) {
      openAlert({
        title: "강의 업데이트 오류",
        description: error.message,
      });
    } else {
      openAlert({
        title: "강의 업데이트",
        description: "강의 업데이트 완료!",
      });
      router.replace("/course");
    }
  };

  return (
    <CourseForm title="강의 수정하기" course={course} onSubmit={editCourse} />
  );
};
