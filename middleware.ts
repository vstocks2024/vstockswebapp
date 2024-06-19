import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req:NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })
  const { data } = await supabase.auth.getSession()

  if (data?.session && (req.nextUrl.pathname.startsWith('/auth') || (req.nextUrl.pathname.startsWith("/login")))) {
    return NextResponse.redirect(new URL('/', req.url))
  }

  // Must be a session to see these routes
  if (
    !data?.session && (
    req.nextUrl.pathname.startsWith('/projects') ||
    req.nextUrl.pathname.startsWith('/checkout')
  )) {
    return NextResponse.redirect(new URL('/login', req.url))
  }
  return res
}