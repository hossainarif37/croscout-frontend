import { jwtDecode } from 'jwt-decode';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';


export function middleware(req: NextRequest) {
    const token = req.cookies.get("authToken")?.value;
    const url = req.url;
    const { pathname } = req.nextUrl;

    const userRoutes = [
        "/dashboard/user/profile",
        "/dashboard/user/my-bookings",
    ];

    const agentRoutes = [
        "/dashboard/agent/add-property",
        "/dashboard/agent/my-properties",
        "/dashboard/agent/bookings",
    ];

    const adminRoutes = [
        "/dashboard/admin/all-users",
        "/dashboard/admin/all-properties",
        "/dashboard/admin/all-bookings",
    ];

    if (token) {
        const decodedToken: any = jwtDecode(token);
        const role = decodedToken['role'];

        if (role === "user" && (adminRoutes.includes(pathname) || agentRoutes.includes(pathname))) {
            return NextResponse.redirect(new URL("/", url));
        }

        if (role === "agent" && (userRoutes.includes(pathname) || adminRoutes.includes(pathname))) {
            return NextResponse.redirect(new URL("/", url));
        }

        if (role === "admin" && (userRoutes.includes(pathname) || agentRoutes.includes(pathname))) {
            return NextResponse.redirect(new URL("/", url));
        }

        return NextResponse.next();
    } else if (!token && url.includes("/dashboard")) {
        return NextResponse.redirect(new URL("/", url));
    }
}