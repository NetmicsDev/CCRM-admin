import { Pagination } from "@/app/_components/Pagination";
import { OutlinkList } from "./_components/outlink-list";

export default function OutlinkPage() {
  return (
    <div className="flex flex-col h-full">
      <h1 className="text-xl font-semibold mb-4">청구/약관 링크 관리</h1>
      <div className="block flex-1 overflow-auto">
        <OutlinkList />
      </div>
      <Pagination />
    </div>
  );
}
