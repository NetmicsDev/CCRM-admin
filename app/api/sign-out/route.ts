import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    cookies().delete("token");
    revalidatePath("/");
    return NextResponse.redirect(new URL("/login", request.url));
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { message: "Sign out failed", error: error.response?.data },
      { status: 400 }
    );
  }
}
