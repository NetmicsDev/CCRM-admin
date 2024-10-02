"use client";

import { Td } from "@/app/_components/Table";
import TableRow from "@/app/(admin)/_components/table-row";
import CourseModel, { CourseCategory } from "@/app/_models/course";
import { deleteCourse } from "@/app/_services/course";
import cn from "@/app/_utils/cn";
import { formatDateToKorean } from "@/app/_utils/format";
import useModalStore from "@/app/_utils/store/modal";
import { useRouter } from "next/navigation";

export default function CourseItem({ course }: { course: CourseModel }) {
  const { openConfirm, openAlert } = useModalStore();
  const router = useRouter();
  const handleDelete = async () => {
    const confirmDelete = await openConfirm({
      title: "강의 삭제",
      description: "정말로 삭제하시겠습니까?",
    });

    if (!confirmDelete) {
      return;
    }

    const { error } = await deleteCourse(course.id);
    if (error) {
      openAlert({
        title: "강의 삭제 오류",
        description: error.message,
      });
    } else {
      await openAlert({
        title: "강의 삭제",
        description: "강의 삭제 완료!",
      });
      window.location.reload();
    }
  };
  return (
    <TableRow
      onEdit={() => router.push(`/course/edit?data=${JSON.stringify(course)}`)}
      onDelete={handleDelete}
    >
      <Td>{course.id}</Td>
      <Td>{course.title}</Td>
      <Td>{course.lecturer}</Td>
      <Td>{course.getCategoryName()}</Td>
      <Td>{formatDateToKorean(course.updatedAt)}</Td>
      <Td>
        <span
          className={cn(
            "inline-block rounded-full w-1 h-1 p-1 mr-2",
            course.isPublished ? "bg-green-500" : "bg-red-500"
          )}
        />
        {course.isPublished ? "공개" : "비공개"}
      </Td>
      <Td>{course.layoutOrder}</Td>
    </TableRow>
  );
}
