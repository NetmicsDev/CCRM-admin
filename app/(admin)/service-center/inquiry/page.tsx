import { Pagination } from "@/app/_components/Pagination";
import InquiryList from "./_components/inquiry-list";
import { Suspense } from "react";

export default function InquiryPage() {
  return (
    <div className="flex flex-col h-full">
      <h1 className="text-xl font-semibold mb-4">1:1 문의</h1>
      <Suspense fallback={<></>}>
        <InquiryList />
      </Suspense>
    </div>
  );
}
