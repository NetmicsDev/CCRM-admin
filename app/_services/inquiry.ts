"use client";

import InquiryModel, { InquiryDTO } from "../_models/inquiry";
import PageList from "../_models/page-list";
import { apiRequest } from "../_utils/axios";

export default async function getInquiries(
  page: number,
  limit: number = 10
): Promise<PageList<InquiryModel>> {
  const response = await apiRequest<PageList<InquiryDTO>>(
    "/admin/customer-support/one-on-one-inquiry",
    {
      method: "GET",
      params: {
        page,
        limit,
      },
    }
  );
  // DTO 데이터를 Model로 변환
  const inquires: InquiryModel[] = response.data.map((faq) =>
    InquiryModel.fromJson(faq)
  );

  // PageList<InquiryModel> 형식으로 반환
  return {
    ...response,
    data: inquires, // InquiryModel 배열로 교체
  };
}
