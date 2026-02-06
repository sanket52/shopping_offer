
"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button";
import { Ghost, LogIn, LogOut } from 'lucide-react';
import AuthModal from './AuthModal';
import {signOut} from "@/app/actions"

const AuthButton = ({user}) => {

    const [showAuthModal,setShowAuthModal]=useState(false);
    if(user)
    {
        return(
            <form action={signOut}>
                <Button
                variant={Ghost} size={"sm"} type='submit' className='gap-2'>
                <LogOut className='w-4 h-4'/>
                Sign Out
                </Button>
            </form>
        )
    }
  return (
   <>
       <Button
          onClick={()=>setShowAuthModal(true)}
            variant={"default"}
            size={"sm"}
            className="bg-orange-500 hover:bg-orange-900 gap-2"
          >
            Sign In <LogIn className="w-4 h-4" />
          </Button>

          <AuthModal
          isOpen={showAuthModal}
          onClose={()=>setShowAuthModal(false)}
          />
   </>
  )
}

export default AuthButton
