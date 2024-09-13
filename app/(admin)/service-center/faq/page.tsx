import { Pagination } from "@/app/_components/Pagination";
import { FaqList } from "./faq-list";

export default function FaqPage() {
  return (
    <div className="flex flex-col h-full">
      <h1 className="text-xl font-semibold mb-4">FAQ</h1>
      <div className="block flex-1 overflow-auto">
        <FaqList />
      </div>
      <Pagination />
    </div>
  );
}
