"use client";

import TermModel, { TermDTO } from "../_models/term";
import PageList from "../_models/page-list";
import { apiRequest } from "../_utils/axios";

export default async function getTerms(
  page: number,
  limit: number = 10
): Promise<PageList<TermModel>> {
  const response = await apiRequest<PageList<TermDTO>>(
    "/admin/information/insurance-terms",
    {
      method: "GET",
      params: {
        page,
        limit,
      },
    }
  );

  // DTO 데이터를 Model로 변환
  const terms: TermModel[] = response.data.map((course) =>
    TermModel.fromJson(course)
  );

  return {
    ...response,
    data: terms,
  };
}
