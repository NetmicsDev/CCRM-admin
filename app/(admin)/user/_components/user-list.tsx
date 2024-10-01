"use client";

import { Pagination } from "@/app/_components/Pagination";
import { Table } from "@/app/_components/Table";
import { getUsers } from "@/app/_services/user";
import UserModel from "@/app/_models/user";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import UserItem from "./user-item";
import PageList from "@/app/_models/page-list";
import useModalStore from "@/app/_utils/store/modal";

const UserListView = () => {
  const { openAlert } = useModalStore();
  const searchParams = useSearchParams();
  const pageNum: number = Number(searchParams.get("page") ?? "1");

  const [users, setUsers] = useState<PageList<UserModel>>();

  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await getUsers(pageNum);

      if (error) {
        openAlert({
          title: "서버 오류",
          description: error.message,
        });
        return;
      }

      setUsers(data);
    };
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNum]);

  const columns = [
    { label: "NO.", key: "id" },
    { label: "이메일", key: "email" },
    { label: "이름", key: "name" },
    { label: "연락처", key: "phoneNumber" },
    { label: "가입일", key: "createdAt" },
    { label: "구독 상태", key: "subscriptionStatus" },
    { label: "", key: "actions" },
  ];

  return (
    <>
      <div className="block flex-1 overflow-y-scroll">
        <Table
          columns={columns}
          data={users?.data ?? []}
          renderRow={(user: UserModel) => (
            <UserItem key={user.id} user={user} />
          )}
        />
      </div>
      <Pagination totalCount={users?.total ?? 0} currentPage={pageNum} />
    </>
  );
};

export default UserListView;
