"use client";

import TermModel, { TermDTO } from "../_models/term";
import PageList from "../_models/page-list";
import { apiRequest, SimpleResponse } from "../_utils/axios";
const endpoint = "/admin/information/insurance-terms";

export async function getTerms(
  page: number,
  limit: number = 10
): Promise<SimpleResponse<PageList<TermModel>>> {
  const { data, error } = await apiRequest<PageList<TermDTO>>(endpoint, {
    method: "GET",
    params: { page, limit },
  });

  if (error) {
    return { data: undefined, error };
  }

  // DTO 데이터를 Model로 변환
  const newData: PageList<TermModel> = {
    ...data!,
    data: data!.data.map((term) => TermModel.fromJson(term)),
  };

  return { data: newData, error };
}

export async function addTerm(term: TermModel) {
  const { data, error } = await apiRequest<TermDTO>(endpoint, {
    method: "POST",
    data: term.toJson(),
  });

  if (error) {
    return { data: undefined, error };
  }

  return { data: TermModel.fromJson(data!), error };
}

export async function updateTerm(term: TermModel) {
  const { data, error } = await apiRequest<TermDTO>(`${endpoint}/${term.id}`, {
    method: "PUT",
    data: term.toJson(),
  });

  if (error) {
    return { data: undefined, error };
  }

  return { data: TermModel.fromJson(data!), error };
}

export async function deleteTerm(id: string) {
  const { error } = await apiRequest(`${endpoint}/${id}`, {
    method: "DELETE",
  });
  return { error };
}
