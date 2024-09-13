import { Pagination } from "@/app/_components/Pagination";
import { CourseList } from "./_components/course-list";

export default function CoursePage() {
  return (
    <div className="flex flex-col h-full">
      <h1 className="text-xl font-semibold mb-4">강의 업로드 리스트</h1>
      <div className="block flex-1 overflow-auto">
        <CourseList />
      </div>
      <Pagination />
    </div>
  );
}
