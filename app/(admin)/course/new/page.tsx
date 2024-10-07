"use client";

import CourseModel from "@/app/_models/course";
import CourseForm from "../_components/course-form";
import { addCourse } from "@/app/_services/course";
import { useRouter } from "next/navigation";
import useModalStore from "@/app/_utils/store/modal";

export default function CourseNewPage() {
  const router = useRouter();
  const { openAlert } = useModalStore();
  const addNewCourse = async (course: CourseModel) => {
    const { error } = await addCourse(course);
    if (error) {
      openAlert({
        title: "강의 추가 오류",
        description: error.message,
      });
    } else {
      await openAlert({
        title: "강의 추가",
        description: "강의 추가 완료!",
      });
      router.replace("/course");
    }
  };

  return <CourseForm title="강의 추가하기" onSubmit={addNewCourse} />;
}
