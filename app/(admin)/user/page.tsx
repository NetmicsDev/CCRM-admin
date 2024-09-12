import { Pagination } from "@/app/_components/Pagination";
import { UserList } from "./_components/user-list";

export default function UserPage() {
  return (
    <main className="flex-1 overflow-y-auto bg-white rounded-lg p-6">
      <h1 className="text-xl font-semibold mb-4">유저 리스트</h1>
      <UserList />
      <Pagination />
    </main>
  );
}
