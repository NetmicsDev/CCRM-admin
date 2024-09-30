"use client";

import Dropdown from "@/app/_components/Dropdown";
import Icon from "@/app/_components/Icon";
import { Td } from "@/app/_components/Table";
import CourseModel from "@/app/_models/course";
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
    <tr className="hover:bg-gray-50">
      <Td>{course.id}</Td>
      <Td>{course.title}</Td>
      <Td>
        <div className="flex items-center gap-1">
          <Icon
            type="user-circle"
            className="inline-block w-5 h-5 stroke-gray-700"
          />
          <span>{course.lecturer}</span>
        </div>
      </Td>
      <Td>{course.category}</Td>
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
      <Td className="w-0">
        {/* <Link
          href={`/course/edit?data=${JSON.stringify(course)}`}
          className="inline-flex p-2 rounded hover:bg-gray-200 text-gray-600 hover:text-gray-800"
        >
          <Icon type="square-pen" className="w-5 h-5" />
        </Link> */}
        <Dropdown
          options={[
            {
              icon: "square-pen",
              label: "수정",
              onClick: () =>
                router.push(`/course/edit?data=${JSON.stringify(course)}`),
            },
            {
              icon: "trash",
              label: "삭제",
              onClick: handleDelete,
            },
          ]}
        >
          <button className="p-2 rounded hover:bg-gray-200 text-gray-600 hover:text-gray-800">
            <Icon type="more-vertical" className="h-5 w-5" />
          </button>
        </Dropdown>
      </Td>
    </tr>
  );
}
