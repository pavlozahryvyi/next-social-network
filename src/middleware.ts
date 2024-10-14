export { default } from "next-auth/middleware";

// export async function middleware() {

//   return NextResponse.next();
// }

export const config = {
  matcher: ["/profile", "/chat", "/messages", "/messages/:id", "/my/:path"],
};
