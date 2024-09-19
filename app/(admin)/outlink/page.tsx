import { Pagination } from "@/app/_components/Pagination";
import { OutlinkList } from "./_components/outlink-list";
import Link from "next/link";
import Icon from "@/app/_components/Icon";

export default function OutlinkPage() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex w-full justify-between items-center mb-4">
        <h1 className="text-xl font-semibold ">청구/약관 링크 관리</h1>
        <Link
          href={"/outlink/new"}
          className="rounded-full py-1.5 pl-2.5 pr-4 flex items-center text-white text-sm font-medium bg-gray-700 hover:bg-gray-800"
        >
          <Icon type="plus" className="w-4 h-4 mr-1" />
          링크 추가하기
        </Link>
      </div>
      <div className="block flex-1 overflow-auto">
        <OutlinkList />
      </div>
      <Pagination />
    </div>
  );
}
