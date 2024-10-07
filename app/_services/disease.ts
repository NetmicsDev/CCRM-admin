"use client";

import DiseaseModel, { DiseaseDTO } from "../_models/disease";
import PageList from "../_models/page-list";
import { apiRequest, SimpleResponse } from "../_utils/axios";

const endpoint = "/admin/information/disease-code";

export async function getDiseases(
  page: number,
  limit: number = 10
): Promise<SimpleResponse<PageList<DiseaseModel>>> {
  const { data, error } = await apiRequest<PageList<DiseaseDTO>>(endpoint, {
    method: "GET",
    params: { page, limit },
  });

  if (error) {
    return { data: undefined, error };
  }

  // DTO 데이터를 Model로 변환
  const newData: PageList<DiseaseModel> = {
    ...data!,
    data: data!.data.map((disease) => DiseaseModel.fromJson(disease)),
  };

  return { data: newData, error };
}

export async function addDisease(disease: DiseaseModel) {
  const { data, error } = await apiRequest<DiseaseDTO>(endpoint, {
    method: "POST",
    data: disease.toJson(),
  });

  if (error) {
    return { data: undefined, error };
  }

  return { data: DiseaseModel.fromJson(data!), error };
}

export async function updateDisease(disease: DiseaseModel) {
  const { data, error } = await apiRequest<DiseaseDTO>(
    `${endpoint}/${disease.id}`,
    { method: "PUT", data: disease.toJson() }
  );

  if (error) {
    return { data: undefined, error };
  }

  return { data: DiseaseModel.fromJson(data!), error };
}

export async function deleteDisease(id: string) {
  const { error } = await apiRequest(`${endpoint}/${id}`, {
    method: "DELETE",
  });
  return { error };
}
