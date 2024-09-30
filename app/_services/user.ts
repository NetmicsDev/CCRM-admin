"use client";

import UserModel, { UserDTO } from "../_models/user";
import PageList from "../_models/page-list";
import { apiRequest, SimpleResponse } from "../_utils/axios";

const endpoint = "/admin/account/users";

export async function getUsers(
  page: number,
  limit: number = 10
): Promise<SimpleResponse<PageList<UserModel>>> {
  const { data, error } = await apiRequest<PageList<UserDTO>>(endpoint, {
    method: "GET",
    params: { page, limit },
  });

  if (error) {
    return { data: undefined, error };
  }

  // DTO 데이터를 Model로 변환
  const newData: PageList<UserModel> = {
    ...data!,
    data: data!.data.map((user) => UserModel.fromJson(user)),
  };

  return { data: newData, error };
}

export async function addUser(user: UserModel) {
  const { data, error } = await apiRequest<UserDTO>(endpoint, {
    method: "POST",
    data: user.toJson(),
  });

  if (error) {
    return { data: undefined, error };
  }

  return { data: UserModel.fromJson(data!), error };
}

export async function updateUser(user: UserModel) {
  const { data, error } = await apiRequest<UserDTO>(`${endpoint}/${user.id}`, {
    method: "PUT",
    data: user.toJson(),
  });

  if (error) {
    return { data: undefined, error };
  }

  return { data: UserModel.fromJson(data!), error };
}

export async function deleteUser(id: string) {
  const { error } = await apiRequest(`${endpoint}/${id}`, {
    method: "DELETE",
  });
  return { error };
}
