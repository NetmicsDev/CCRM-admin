"use client";

import PageList from "../_models/page-list";
import UserModel, { UserDTO } from "../_models/user";
import { apiRequest } from "../_utils/axios";

export default async function getUsers(
  page: number,
  limit: number = 10
): Promise<PageList<UserModel>> {
  const response = await apiRequest<PageList<UserDTO>>("/admin/account/users", {
    method: "GET",
    params: {
      page,
      limit,
    },
  });
  // DTO 데이터를 Model로 변환
  const users: UserModel[] = response.data.map((user) =>
    UserModel.fromJson(user)
  );

  // PageList<UserModel> 형식으로 반환
  return {
    ...response,
    data: users, // UserModel 배열로 교체
  };
}
