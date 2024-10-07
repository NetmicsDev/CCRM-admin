import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const url = request.nextUrl.pathname;
  if (url.startsWith("/api")) {
    return NextResponse.next();
  }

  // 요청에서 받은 쿠키로 JWT 토큰 읽기
  const token = request.cookies.get("token")?.value;

  // console.log("Middleware", url, token);

  // 로그인 상태에서 /login 경로로 접근하면 홈으로 리디렉션
  if (token && url === "/login") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // 로그인 상태가 아니면 /login 경로로 리디렉션
  if (!token && url !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
