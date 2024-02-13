import { jwtDecode } from 'jwt-decode';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';


export function middleware(req: NextRequest) {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YzU4NzFmM2I3NzljOWZhMDZmNzNlNiIsImVtYWlsIjoicmlkb3lhaG1lZDkwMDNAZ21haWwuY29tIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MDc4NDY4NjMsImV4cCI6MTcwNzkzMzI2M30.aED9GHxqvQpRr-ehZxNrxVhibhGEIv--Bx83zJ8Fhxs"
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