import Icon from "@/app/_components/Icon";
import { Td } from "@/app/_components/Table";
import Course from "@/app/_types/course";
import cn from "@/app/_utils/cn";
import Link from "next/link";

export default function CourseItem({ course }: { course: Course }) {
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
          <span>{course.instructor}</span>
        </div>
      </Td>
      <Td>{course.category}</Td>
      <Td>
        {new Date(course.updateDate).toLocaleDateString("ko-KR", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </Td>
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
        <Link
          href={`/course/edit?data=${JSON.stringify(course)}`}
          className="inline-flex p-2 rounded hover:bg-gray-200 text-gray-600 hover:text-gray-800"
        >
          <Icon type="square-pen" className="w-5 h-5" />
        </Link>
        <button className="p-2 rounded hover:bg-gray-200 text-gray-600 hover:text-gray-800">
          <Icon type="more-vertical" className="h-5 w-5" />
        </button>
      </Td>
    </tr>
  );
}
