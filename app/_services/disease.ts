"use client";

import DiseaseModel, { DiseaseDTO } from "../_models/disease";
import PageList from "../_models/page-list";
import { apiRequest } from "../_utils/axios";

export default async function getDiseases(
  page: number,
  limit: number = 10
): Promise<PageList<DiseaseModel>> {
  const response = await apiRequest<PageList<DiseaseDTO>>(
    "/admin/information/disease-code",
    {
      method: "GET",
      params: {
        page,
        limit,
      },
    }
  );

  // DTO 데이터를 Model로 변환
  const diseases: DiseaseModel[] = response.data.map((course) =>
    DiseaseModel.fromJson(course)
  );

  return {
    ...response,
    data: diseases,
  };
}
