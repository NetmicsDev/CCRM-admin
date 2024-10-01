import UserListView from "./_components/user-list";
import { Suspense } from "react";

export default function UserPage() {
  return (
    <div className="flex flex-col h-full">
      <h1 className="text-xl font-semibold mb-4">유저 리스트</h1>
      <Suspense fallback={<div></div>}>
        <UserListView />
      </Suspense>
    </div>
  );
}
