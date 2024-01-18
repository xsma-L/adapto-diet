"use client"

import { useState, useEffect, useRef } from 'react'
import { Pivot as Hamburger } from 'hamburger-react'

import Image from 'next/image'

import RegisterModal from './registerModal'
import SignIn from './singIn'
import ResponsiveMenu from './responsiveMenu'

export default function Header(){
   
    const [registerModal, setRegisterModal] = useState<boolean>(false)
    const [signInModal, setSignInModal] = useState<boolean>(false)
    const [windowWidth, setWindowWidth ] = useState<number>(window.innerWidth)
    const [windowHeight, setWindowHeight] = useState<number>(window.innerHeight)
    const [isOpen, setOpen] = useState<boolean>(false)
    const [marginTop, setMarginTop] = useState<number>(0)

    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth)            
        };
        
        window.addEventListener('resize', handleWindowResize)
        
        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    })

    useEffect(() => {
        const mainContainer = document.getElementById("main-container");
        if (mainContainer && elementRef.current) {
            mainContainer.style.marginTop = `${elementRef.current.offsetHeight}px`;
            setMarginTop(elementRef.current.offsetHeight)
        }
    })

    const isToggle = (open: boolean) => {
        if(open) {
            let main_container = document.getElementById("main-container")
            console.log('open =>', main_container)
        }else {
            console.log('close')
        }
    }


    return(
        <>
            <RegisterModal open={registerModal} setRegisterModal={setRegisterModal} />
            <SignIn open={signInModal} setSignInModal={setSignInModal} />
            <div ref={elementRef} className=" fixed top-0 bg-white z-30 flex justify-between items-center px-6 py-7 lg:py-10 w-full h-14 border-b-2 shadow border-black/20">
                <div className="flex items-center" id="logo">
                    <div className="h-fit">
                        <span className="font-fredoka font-bold lg:text-2xl">ADAPTO&apos;DIET</span>
                    </div>
                    <div className="ml-2 h-6 lg:h-8 w-8 lg:w-10 relative">
                        <Image src="/logo.webp" fill={true} alt="adapto'diet" />
                    </div>
                </div>
                <div className="h-fit w-fit flex">
                    { windowWidth <= 540 ?
                        <div className="">
                            <Hamburger size={23} toggled={isOpen} toggle={setOpen} onToggle={(isOpen) => isToggle(isOpen)} />
                            <ResponsiveMenu open={isOpen} marginTop={marginTop} screenWidth={windowWidth} screenHeight={windowHeight - marginTop} setOpen={setOpen} setRegisterModal={setRegisterModal} setSignInModal={setSignInModal}   />
                        </div>
                    :
                         <>
                            <button onClick={() => setRegisterModal(true)} className="rounded-lg bg-primary text-white font-bold p-2 mr-6 transition">S&apos;inscrire</button>
                            <button onClick={() => setSignInModal(true)} className="rounded-lg border border-primary bg-white text-primary font-bold p-2">Se connecter</button>
                        </>
                    }
                    
                </div>
            </div>
        </>
    )
}