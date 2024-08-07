import { NextResponse } from "next/server";

export function middleware(request) {
  return NextResponse.next();
}

//filter, es filtern nun nur nach Request im Kontext der aufgeführten route(s)
export const config = {
  matcher: "/news",
};
