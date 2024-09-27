"use client";

import InsuranceModel, { InsuranceDTO } from "../_models/insurance";
import PageList from "../_models/page-list";
import { apiRequest } from "../_utils/axios";

export default async function getInsurances(
  page: number,
  limit: number = 10
): Promise<PageList<InsuranceModel>> {
  const response = await apiRequest<PageList<InsuranceDTO>>(
    "/admin/information/insurance-claims",
    {
      method: "GET",
      params: {
        page,
        limit,
      },
    }
  );

  // DTO 데이터를 Model로 변환
  const insurances: InsuranceModel[] = response.data.map((course) =>
    InsuranceModel.fromJson(course)
  );

  return {
    ...response,
    data: insurances,
  };
}
