"use client";

import FaqModel, { FaqDTO } from "../_models/faq";
import PageList from "../_models/page-list";
import { apiRequest } from "../_utils/axios";

export default async function getFaqs(
  page: number,
  limit: number = 10
): Promise<PageList<FaqModel>> {
  const response = await apiRequest<PageList<FaqDTO>>(
    "/admin/customer-support/faq",
    {
      method: "GET",
      params: {
        page,
        limit,
      },
    }
  );
  // DTO 데이터를 Model로 변환
  const faqs: FaqModel[] = response.data.map((faq) => FaqModel.fromJson(faq));

  // PageList<FaqModel> 형식으로 반환
  return {
    ...response,
    data: faqs, // FaqModel 배열로 교체
  };
}
