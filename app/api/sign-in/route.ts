import axiosInstance from "@/app/_utils/axios";
import axios from "axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { username, password } = await request.json();
  try {
    // API 호출
    const { data } = await axiosInstance.post("auth/login", {
      username,
      password,
    });

    const { jwtToken } = data;

    // HttpOnly, Secure 쿠키 설정
    cookies().set("token", jwtToken, {
      path: "/",
      httpOnly: true, // JavaScript로 접근 불가
      maxAge: 60 * 60 * 24 * 30, // 30일 동안 유효
    });

    return NextResponse.json({ message: "Login success" }, { status: 200 });
  } catch (error: any) {
    console.error(error);
    if (axios.isAxiosError(error)) {
      // Axios 에러 처리
      return NextResponse.json(
        { message: "Login failed", error: error.response?.data },
        { status: error.status }
      );
    }
    return NextResponse.json(
      { message: "Unknown Error", error: error.response?.data },
      { status: 400 }
    );
  }
}
