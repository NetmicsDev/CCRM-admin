import { Pagination } from "@/app/_components/Pagination";
import { UserList } from "./_components/user-list";

export default function UserPage() {
  return (
    <div className="flex flex-col h-full">
      <h1 className="text-xl font-semibold mb-4">유저 리스트</h1>
      <div className="block flex-1 overflow-auto">
        <UserList />
      </div>
      <Pagination />
    </div>
  );
}
