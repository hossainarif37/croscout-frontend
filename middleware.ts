import { jwtDecode } from 'jwt-decode';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';


export function middleware(req: NextRequest) {
    const token = req.cookies.get("token")?.value;
    const url = req.url;

    if (token) {
        const decodedToken: any = jwtDecode(token);
        const role = decodedToken['role'];

        if (role === "user" && url.includes("/dashboard/admin") || url.includes("/dashboard/agent")) {
            return NextResponse.redirect(new URL("/", url));
        }

        if (role === "agent" && url.includes("/dashboard/user") || url.includes("/dashboard/admin")) {
            return NextResponse.redirect(new URL("/", url));
        }

        if (role === "admin" && url.includes("/dashboard/user") || url.includes("/dashboard/agent")) {
            return NextResponse.redirect(new URL("/", url));
        }

    } else if (!token && url.includes("/dashboard")) {
        return NextResponse.redirect(new URL("/", url));
    }
}