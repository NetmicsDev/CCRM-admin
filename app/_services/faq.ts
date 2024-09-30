"use client";

import FaqModel, { FaqDTO } from "../_models/faq";
import PageList from "../_models/page-list";
import { apiRequest, SimpleResponse } from "../_utils/axios";

const endpoint = "/admin/customer-support/faq";

export async function getFaqs(
  page: number,
  limit: number = 10
): Promise<SimpleResponse<PageList<FaqModel>>> {
  const { data, error } = await apiRequest<PageList<FaqDTO>>(endpoint, {
    method: "GET",
    params: { page, limit },
  });

  if (error) {
    return { data: undefined, error };
  }

  // DTO 데이터를 Model로 변환
  const newData: PageList<FaqModel> = {
    ...data!,
    data: data!.data.map((faq) => FaqModel.fromJson(faq)),
  };

  return { data: newData, error };
}

export async function addFaq(faq: FaqModel) {
  const { data, error } = await apiRequest<FaqDTO>(endpoint, {
    method: "POST",
    data: faq.toJson(),
  });

  if (error) {
    return { data: undefined, error };
  }

  return { data: FaqModel.fromJson(data!), error };
}

export async function updateFaq(faq: FaqModel) {
  const { data, error } = await apiRequest<FaqDTO>(`${endpoint}/${faq.id}`, {
    method: "PUT",
    data: faq.toJson(),
  });

  if (error) {
    return { data: undefined, error };
  }

  return { data: FaqModel.fromJson(data!), error };
}

export async function deleteFaq(id: string) {
  const { error } = await apiRequest(`${endpoint}/${id}`, {
    method: "DELETE",
  });
  return { error };
}
