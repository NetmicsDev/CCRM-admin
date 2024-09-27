"use client";

import NoticeModel, { NoticeDTO } from "../_models/notice";
import PageList from "../_models/page-list";
import { apiRequest } from "../_utils/axios";

export default async function getNotices(
  page: number,
  limit: number = 10
): Promise<PageList<NoticeModel>> {
  const response = await apiRequest<PageList<NoticeDTO>>(
    "/admin/customer-support/notice",
    {
      method: "GET",
      params: {
        page,
        limit,
      },
    }
  );
  // DTO 데이터를 Model로 변환
  const notices: NoticeModel[] = response.data.map((notice) =>
    NoticeModel.fromJson(notice)
  );

  // PageList<NoticeModel> 형식으로 반환
  return {
    ...response,
    data: notices, // NoticeModel 배열로 교체
  };
}
