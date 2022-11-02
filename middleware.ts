import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyToken } from "./utils/jwt";

export function middleware(req: NextResponse) {
  const token = req.cookies.get('token')?.value
  var user = null
  if (token) {
    const decoded = verifyToken(token);
    user = decoded
  }
  // req.user(user)
  const res = NextResponse.next()

  res.headers.set("X-HEADER-USER", JSON.stringify(user))

  return res
}