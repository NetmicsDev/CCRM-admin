"use server";

import axios, { AxiosResponse } from "axios";
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

// 응답 인터셉터: 에러 처리 (필요한 경우)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // 인증 실패 처리
    if (
      error.response?.status === 401 &&
      error.config.params?.from !== "login"
    ) {
      console.error("인증 오류: 로그인이 필요합니다.");
      cookies().delete("token");
      // revalidatePath 는 server에서만 가능
      // revalidatePath("/");

      // NEXT_REDIRECT_ERROR 발생
      // redirect는 try-catch문 말고 finally안에서 동작해야한다
      // 컴포넌트 내부에 선언하는 것도 가능하지만 이렇게 내부동작 중에 호출할 수는 없는듯.
      // redirect("/sign-in");
      return Promise.reject({
        type: "unauthorized",
        message: "401 ERROR - Move to Sign-in Page",
      });
    }
    return Promise.reject(error);
  }
);

// 공통 처리 함수: 요청을 보낸 후 성공 및 실패 처리
export const handleRequest = async (
  promise: Promise<AxiosResponse>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<{ data?: any; error?: { type: string; message?: string } }> => {
  let data, error;
  try {
    const response = await promise;
    data = response.data; // 성공 시 데이터 반환
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (_error: any) {
    if (axios.isAxiosError(_error)) {
      error = {
        type: "axios",
        message: _error.response?.data?.message,
      };
    } else if (_error.type === "unauthorized") {
      error = _error;
    } else {
      error = {
        type: "unknown",
        message: _error instanceof Error ? _error.message : "unknown error",
      };
    }
  }

  return { data, error };
};

export default axiosInstance;
