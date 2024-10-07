import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    cookies().delete("token");
    revalidatePath("/");
    return NextResponse.json({ message: "Sign out success" }, { status: 200 });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { message: "Sign out failed", error: error.response?.data },
      { status: 400 }
    );
  }
}
