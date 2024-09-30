"use client";

import CourseModel, { CourseDTO } from "../_models/course";
import PageList from "../_models/page-list";
import { apiRequest, SimpleResponse } from "../_utils/axios";

const endpoint = "/admin/education/lecture";

export async function getCourses(
  page: number,
  limit: number = 10
): Promise<SimpleResponse<PageList<CourseModel>>> {
  const { data, error } = await apiRequest<PageList<CourseDTO>>(endpoint, {
    method: "GET",
    params: { page, limit },
  });

  if (error) {
    return { data: undefined, error };
  }

  // DTO 데이터를 Model로 변환
  const newData: PageList<CourseModel> = {
    ...data!,
    data: data!.data.map((course) => CourseModel.fromJson(course)),
  };

  return { data: newData, error };
}

export async function addCourse(course: CourseModel) {
  const { data, error } = await apiRequest<CourseDTO>(endpoint, {
    method: "POST",
    data: course.toJson(),
  });

  if (error) {
    return { data: undefined, error };
  }

  return { data: CourseModel.fromJson(data!), error };
}

export async function updateCourse(course: CourseModel) {
  const { data, error } = await apiRequest<CourseDTO>(
    `${endpoint}/${course.id}`,
    { method: "PUT", data: course.toJson() }
  );

  if (error) {
    return { data: undefined, error };
  }

  return { data: CourseModel.fromJson(data!), error };
}

export async function deleteCourse(id: string) {
  const { error } = await apiRequest(`${endpoint}/${id}`, {
    method: "DELETE",
  });
  return { error };
}
