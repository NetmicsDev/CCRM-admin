import { Pagination } from "@/app/_components/Pagination";
import { NoticeList } from "../notice-list";

export default function NoticePage() {
  return (
    <main className="flex-1 overflow-y-auto bg-white rounded-lg p-6">
      <h1 className="text-xl font-semibold mb-4">공지사항</h1>
      <NoticeList />
      <Pagination />
    </main>
  );
}
