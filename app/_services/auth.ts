"use server";

import { cookies } from "next/headers";
import axiosInstance, { handleRequest } from "../_utils/axios";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { redirect } from "next/navigation";

export async function signIn(
  username: string,
  password: string
): Promise<{
  token?: string;
  error?: { type: string; message?: string };
}> {
  const { data, error } = await handleRequest(
    axiosInstance.post(
      "/auth/login",
      {
        username,
        password,
      },
      {
        params: { from: "login" },
      }
    )
  );

  if (error) {
    return { error };
  }

  const { jwtToken } = data;
  cookies().set("token", jwtToken, {
    path: "/",
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 30,
  });

  return { token: jwtToken };
}

export async function signOut() {
  const cookieStore = cookies();
  cookieStore.delete("token");
  revalidatePath("/");
  redirect("/login");
}
