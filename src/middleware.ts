import { NextRequest, NextResponse } from "next/server";
import { meCheckService } from "./services/auth.service";

export { default } from "next-auth/middleware";

export async function middleware(request: NextRequest) {
  const meResponseData = await meCheckService();

  if (meResponseData.resultCode === 0) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: [
    "/profile",
    "/chat",
    "/messages",
    "/messages/:id",
    "/my",
    "/my/:path",
  ],
};
