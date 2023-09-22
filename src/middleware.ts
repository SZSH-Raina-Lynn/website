import { NextResponse, NextRequest } from "next/server";
const SERVER_URL = process.env.NEXT_PUBLIC_FIREBASE_SERVER || "http://localhost:3000";


export async function middleware(request: NextRequest) {
  const session = request.cookies.get("session");
  const path = request.nextUrl.pathname;
  //Return to /login if don't have a session
  // if (!session && path !== '/admin') {
  //   return NextResponse.redirect(new URL("/admin", request.url));
  // }

  // //Call the authentication endpoint
  // const responseAPI = await fetch(`${SERVER_URL}/api/auth/login`, {
  //   headers: {
  //     Cookie: `session=${session?.value}`,
  //   },
  // });
  // //Return to /login if token is not authorized
  // console.log('status:', responseAPI.status, path)
  // if (responseAPI.status !== 200 && path !== '/admin') {
  //   return NextResponse.redirect(new URL("/admin", request.url));
  // }
  // if (responseAPI.status === 200 && path === '/admin') {
  //   return NextResponse.redirect(new URL("/admin/edit", request.url))
  // }
  return NextResponse.next();
}

//Add your protected routes
export const config = {
  matcher: ["/admin/:path*"],
};