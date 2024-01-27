import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  
  let token = request.cookies.get('token')
  if(!token)
  return NextResponse.redirect(new URL('/', request.url))
  
  if (request.nextUrl.pathname.startsWith('/questionnaire')) {
    let dietProfile = request.cookies.get("dietProfile")
    if(dietProfile)
    return NextResponse.redirect(new URL("/mon-alimentation", request.url))
  }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/dashboard', '/mon-alimentation', "/questionnaire"],
}