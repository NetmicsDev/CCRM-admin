import { Pagination } from "@/app/_components/Pagination";
import { NoticeList } from "./_components/notice-list";

export default function NoticePage() {
  return (
    <div className="flex flex-col h-full">
      <h1 className="text-xl font-semibold mb-4">공지사항</h1>
      <div className="block flex-1 overflow-auto">
        <NoticeList />
      </div>
      <Pagination />
    </div>
  );
}
