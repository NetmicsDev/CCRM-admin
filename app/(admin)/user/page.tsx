import { Pagination } from "@/app/_components/Pagination";
import { UserList } from "./_components/user-list";
import PageCard from "@/app/_components/page-card";

export default function UserPage() {
  return (
    <PageCard>
      <div className="flex flex-col h-full">
        <h1 className="text-xl font-semibold mb-4">유저 리스트</h1>
        <div className="block flex-1 overflow-auto">
          <UserList />
        </div>
        <Pagination />
      </div>
    </PageCard>
  );
}
