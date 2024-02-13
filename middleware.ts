import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
    const loginStatus = req.cookies.get("logged")?.value;
    const userRole = req.cookies.get("role")?.value;
    const url = req.url;

    // if users login status is undefined or false then he will redirect to home
    if (!loginStatus && url.includes("/dashboard")) {
        return NextResponse.redirect(new URL("/", url))
    }

    // if(verify && )
    //   if (req.nextUrl.pathname.startsWith('/about')) {
    //     return NextResponse.rewrite(new URL('/about-2', req.url))
    //   }

    //   if (req.nextUrl.pathname.startsWith('/dashboard')) {
    //     return NextResponse.rewrite(new URL('/dashboard/user', req.url))
    //   }
}