import { NextResponse, type NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

export async function middleware(request: NextRequest) {
  const response = await updateSession(request);

  // Light gate: /admin/** requires an authenticated user.
  // Tier-level checks happen in route handlers / RLS — this is just a redirect for UX.
  const path = request.nextUrl.pathname;
  if (path.startsWith("/admin")) {
    const hasSession = request.cookies.getAll().some((c) =>
      c.name.startsWith("sb-") && c.name.endsWith("-auth-token")
    );
    if (!hasSession) {
      const url = request.nextUrl.clone();
      url.pathname = "/sign-in";
      url.searchParams.set("next", path);
      return NextResponse.redirect(url);
    }
  }

  return response;
}

export const config = {
  matcher: [
    // Run on everything except static assets and image optimisation
    "/((?!_next/static|_next/image|favicon.ico|app/|.*\\.(?:svg|png|jpg|jpeg|gif|webp|css|js|html)$).*)",
  ],
};
