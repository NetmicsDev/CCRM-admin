"use client";

import NoticeModel, { NoticeDTO } from "../_models/notice";
import PageList from "../_models/page-list";
import { apiRequest, SimpleResponse } from "../_utils/axios";

const endpoint = "/admin/customer-support/notice";

export async function getNotices(
  page: number,
  limit: number = 10
): Promise<SimpleResponse<PageList<NoticeModel>>> {
  const { data, error } = await apiRequest<PageList<NoticeDTO>>(endpoint, {
    method: "GET",
    params: { page, limit },
  });

  if (error) {
    return { data: undefined, error };
  }

  // DTO 데이터를 Model로 변환
  const newData: PageList<NoticeModel> = {
    ...data!,
    data: data!.data.map((notice) => NoticeModel.fromJson(notice)),
  };

  return { data: newData, error };
}

export async function addNotice(notice: NoticeModel) {
  const { data, error } = await apiRequest<NoticeDTO>(endpoint, {
    method: "POST",
    headers: { "Content-Type": "multipart/form-data" },
    data: notice.toFormData(),
  });

  if (error) {
    return { data: undefined, error };
  }

  return { data: NoticeModel.fromJson(data!), error };
}

export async function updateNotice(notice: NoticeModel) {
  const { data, error } = await apiRequest<NoticeDTO>(
    `${endpoint}/${notice.id}`,
    {
      method: "PUT",
      headers: { "Content-Type": "multipart/form-data" },
      data: notice.toFormData(),
    }
  );

  if (error) {
    return { data: undefined, error };
  }

  return { data: NoticeModel.fromJson(data!), error };
}

export async function deleteNotice(id: string) {
  const { error } = await apiRequest(`${endpoint}/${id}`, {
    method: "DELETE",
  });
  return { error };
}
