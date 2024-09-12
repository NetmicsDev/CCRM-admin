import { Pagination } from "@/app/_components/Pagination";
import { OutlinkList } from "./_components/outlink-list";

export default function OutlinkPage() {
  return (
    <main className="flex-1 overflow-y-auto bg-white rounded-lg p-6">
      <h1 className="text-xl font-semibold mb-4">청구/약관 링크 관리</h1>
      <OutlinkList />
      <Pagination />
    </main>
  );
}
