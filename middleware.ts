import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
    const verify = req.cookies.get("logged")
    const url = req.url;
    if (!verify && url.includes("/dashboard")) {
        return NextResponse.redirect("http://localhost:3000")
    }

    // if(verify && )
    //   if (req.nextUrl.pathname.startsWith('/about')) {
    //     return NextResponse.rewrite(new URL('/about-2', req.url))
    //   }

    //   if (req.nextUrl.pathname.startsWith('/dashboard')) {
    //     return NextResponse.rewrite(new URL('/dashboard/user', req.url))
    //   }
}