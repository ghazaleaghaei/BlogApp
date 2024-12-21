import { middleWareAuth } from "Functions/middlewareAuth";
import { NextResponse } from "next/server";

export async function middleware(req) {

    const { pathname } = req.nextUrl;

    if (pathname.startsWith("/signin") || pathname.startsWith("/signup")) {
        const user = await middleWareAuth(req)
        if (user) return NextResponse.redirect(new URL(`/`, req.nextUrl))
    }

    if (pathname.startsWith("/profile")) {
        const user = await middleWareAuth(req)
        if (!user) return NextResponse.redirect(new URL(`/signin`, req.nextUrl))
    }
}

export const config = {
    mather: ["/profile/:path", "/signin", "/signup"],
}
