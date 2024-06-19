"use client"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import Link from 'next/link';

export default function AuthPage() {
    const supabase = createClientComponentClient();
    var callbackurl="";
    if(typeof window!=="undefined"){
        console.log(window.location.origin);
    callbackurl=`${window.location.origin}/auth/callback`;
   }
    return (
        <>
             <div id="AuthPage" className="w-full  min-h-screen bg-white">

            <div className="w-full bg-[#2E67DD] flex items-center justify-center p-5 border-b-gray-300">
                <Link href="/" className="min-w-[170px]">
                    <h1 className="text-center text-3xl text-white">VSTOCKS LOGO</h1>
                </Link>
            </div>

            <div className="w-full flex items-center justify-center p-5 border-b-gray-300">
                Login / Register
            </div>

            <div className="max-w-[400px] mx-auto px-2">
               
                <Auth
                    onlyThirdPartyProviders 
                    redirectTo={callbackurl}
                    supabaseClient={supabase}
                    providers={['google']}
                    appearance={{theme: ThemeSupa}}
                />
            </div>

        </div>
      </>
    )
  }
  