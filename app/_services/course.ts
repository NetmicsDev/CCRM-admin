"use client";

import CourseModel, { CourseDTO } from "../_models/course";
import PageList from "../_models/page-list";
import { apiRequest } from "../_utils/axios";

export default async function getCoursesDTO(
  page: number,
  limit: number = 10
): Promise<PageList<CourseModel>> {
  const response = await apiRequest<PageList<CourseDTO>>(
    "/admin/education/lecture",
    {
      method: "GET",
      params: {
        page,
        limit,
      },
    }
  );

  // DTO 데이터를 Model로 변환
  const courses: CourseModel[] = response.data.map((course) =>
    CourseModel.fromJson(course)
  );

  // PageList<UserModel> 형식으로 반환
  return {
    ...response,
    data: courses, // UserModel 배열로 교체
  };
}
