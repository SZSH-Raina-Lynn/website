import { NextResponse, NextRequest } from "next/server";


export async function middleware(request: NextRequest) {
  const session = request.cookies.get("session");

  //Return to /login if don't have a session
  if (!session) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  //Call the authentication endpoint
  const responseAPI = await fetch("/api/auth/login", {
    headers: {
      Cookie: `session=${session?.value}`,
    },
  });

  //Return to /login if token is not authorized
  if (responseAPI.status !== 200) {
    return NextResponse.redirect(new URL("/admin/protected/edit", request.url));
  }
  return NextResponse.next();
}

//Add your protected routes
export const config = {
  matcher: ["/admin/protected/:path*"],
};