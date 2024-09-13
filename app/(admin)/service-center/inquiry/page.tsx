import { Pagination } from "@/app/_components/Pagination";
import InquiryList from "./inquiry-list";

export default function InquiryPage() {
  return (
    <div className="flex flex-col h-full">
      <h1 className="text-xl font-semibold mb-4">1:1 문의</h1>
      <div className="block flex-1 overflow-auto">
        <InquiryList />
      </div>
      <Pagination />
    </div>
  );
}
