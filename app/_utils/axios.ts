"use server";

import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

// Axios 인스턴스 생성
const axiosInstance = axios.create({
  baseURL: `https://${process.env.NEXT_PUBLIC_SERVER_HOST}:${process.env.NEXT_PUBLIC_SERVER_PORT}/api`, // 기본 API URL 설정
  timeout: 10000, // 10초 타임아웃 설정
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청 인터셉터: JWT 토큰을 자동으로 헤더에 추가
axiosInstance.interceptors.request.use(
  (config) => {
    const token = cookies().get("token")?.value; // 쿠키에서 JWT 토큰 가져오기
    // console.log("Interceptor", token);
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
): Promise<SimpleResponse<T>> => {
  let response;
  let error;
  let authenticated = true;
  try {
    response = await axiosInstance(url, config);
  } catch (_error) {
    if (axios.isAxiosError(_error)) {
      // Axios 에러 처리
      console.error("API Error:", _error.response?.data || _error.message);

      if (_error.response?.status === 401) {
        authenticated = true;
      }

      error = _error;
    } else {
      error = new AxiosError("Unknown Error");
    }
  } finally {
    if (!authenticated) {
      cookies().delete("token");
      revalidatePath("/login");
      redirect("/login");
    }
    return {
      data: response?.data as T,
      error,
    };
  }
};

export type SimpleResponse<T> = {
  data?: T;
  error?: AxiosError;
};

export default axiosInstance;
