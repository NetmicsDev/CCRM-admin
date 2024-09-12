import { Pagination } from "@/app/_components/Pagination";
import { CourseList } from "./_components/course-list";

export default function CoursePage() {
  return (
    <main className="flex-1 overflow-y-auto bg-white rounded-lg p-6">
      <h1 className="text-xl font-semibold mb-4">강의 업로드 리스트</h1>
      <CourseList />
      <Pagination />
    </main>
  );
}
