import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request:NextRequest) {
  const requestUrl = new URL(request.url)
  console.log(requestUrl);
  const code = requestUrl.searchParams.get('code')
  console.log(code);
  if (code) {
    const supabase = createRouteHandlerClient({ cookies })
    console.log(supabase);
    console.log(cookies);
    await supabase.auth.exchangeCodeForSession(code)
  }
  console.log(requestUrl.origin);
  // URL to redirect to after sign in process completes
  return NextResponse.redirect(requestUrl.origin)
}