"use server";

import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

// Axios 인스턴스 생성
const axiosInstance = axios.create({
  baseURL: `http://${process.env.NEXT_PUBLIC_SERVER_HOST}:${process.env.NEXT_PUBLIC_SERVER_PORT}/api`, // 기본 API URL 설정
  timeout: 10000, // 10초 타임아웃 설정
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청 인터셉터: JWT 토큰을 자동으로 헤더에 추가
axiosInstance.interceptors.request.use(
  (config) => {
    const token = cookies().get("token")?.value; // 쿠키에서 JWT 토큰 가져오기
    console.log("Interceptor", token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Authorization 헤더에 토큰 추가
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 공통 처리 함수: 요청을 보낸 후 성공 및 실패 처리
// token이 있어야하는 api들이 쓴다고 가정.
export const apiRequest = async <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> => {
  let response;
  let authenticated = true;
  try {
    response = await axiosInstance(url, config);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Axios 에러 처리
      console.error("API Error:", error.response?.data || error.message);

      if (error.response?.status === 401) {
        authenticated = true;
      }

      throw error;
    }
    // 기타 에러 처리
    throw new Error("알 수 없는 오류가 발생했습니다.");
  } finally {
    if (!authenticated) {
      revalidatePath("/login");
      redirect("/login");
    }
    return (response?.data ?? {}) as T;
  }
};

export default axiosInstance;
