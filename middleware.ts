import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyToken } from "./utils/jwt";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value || req.headers.get('authorization')?.split(' ')[1]
  var user = null
  if (token) {
    const decoded = await verifyToken(token);
    user = {
      id: decoded.id
    }
  }

  const res = NextResponse.next()
  // console.log(user)
  res.headers.set("X-HEADER-USER", JSON.stringify(user))

  return res
}