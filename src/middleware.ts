import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req:NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })
  const { data } = await supabase.auth.getSession();

  // console.log("data",data);

  if (data?.session && req.nextUrl.pathname.startsWith('/auth')) {
    return NextResponse.redirect(new URL('/', req.url))
  }
  if(data?.session && req.nextUrl.pathname.startsWith('/premium')){
    return NextResponse.redirect(new URL('/', req.url))
  }

  // Must be a session to see these routes
  if (
    !data?.session && (
    req.nextUrl.pathname.startsWith('/checkout') ||
    req.nextUrl.pathname.startsWith('/projects') ||
    req.nextUrl.pathname.startsWith('/orders') ||
    req.nextUrl.pathname.startsWith('/address')
  )) {
    return NextResponse.redirect(new URL('/auth', req.url))
  }

  return res
}