"use client"

import { useState } from 'react'

import Image from 'next/image'

import RegisterModal from './registerModal'
import SignIn from './singIn'

export default function Header(){
   
    const [registerModal, setRegisterModal] = useState<boolean>(false)

    const [signInModal, setSignInModal] = useState<boolean>(false)

    return(
        <>
            <RegisterModal open={registerModal} setRegisterModal={setRegisterModal} />
            <SignIn open={signInModal} setSignInModal={setSignInModal} />
            <div className="fixed top-0 bg-white z-30 flex justify-between items-center px-6 py-7 lg:py-10 w-full h-14 border-b-2 shadow border-black/20">
                <div className="flex items-center" id="logo">
                <div className="h-fit">
                    <span className="font-fredoka font-bold lg:text-2xl">ADAPTO'DIET</span>
                </div>
                <div className="ml-2 h-6 lg:h-8 w-8 lg:w-10 relative">
                    <Image src="/logo.webp" fill={true} alt="adapto'diet" />
                </div>
                </div>
                <div className="h-fit w-fit flex">
                <button onClick={() => setRegisterModal(true)} className="rounded-lg bg-primary text-white font-bold p-2 mr-6 transition">S'inscrire</button>
                <button onClick={() => setSignInModal(true)} className="rounded-lg border border-primary bg-white text-primary font-bold p-2">Se connecter</button>
                </div>
            </div>
        </>
    )
}