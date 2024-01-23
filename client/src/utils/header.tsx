"use client"

import { useState, useEffect, useRef } from "react"
import { Pivot as Hamburger } from "hamburger-react"

import Cookie from "js-cookie"
import Image from "next/image"
import { useRouter } from "next/navigation"

import RegisterModal from "../components/register"
import SignIn from "../components/singIn"
import ResponsiveMenu from "./responsiveMenu"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"


export default function Header(){
    const router = useRouter()
   
    const [registerModal, setRegisterModal] = useState<boolean>(false)
    const [signInModal, setSignInModal] = useState<boolean>(false)

    const [windowWidth, setWindowWidth ] = useState<number>(window.innerWidth)
    const [windowHeight, setWindowHeight] = useState<number>(window.innerHeight)

    const [isOpen, setOpen] = useState<boolean>(false)
    const [openMenu, setOpenMenu] = useState<boolean>(false)
    const [connected, setConnected] = useState<boolean>(false)

    const [marginTop, setMarginTop] = useState<number>(0)

    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const mainContainer = document.getElementById("main-container");
        if (mainContainer && elementRef.current) {
            mainContainer.style.marginTop = `${elementRef.current.offsetHeight}px`;
            setMarginTop(elementRef.current.offsetHeight)
        }

        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth)            
        };
        
        window.addEventListener('resize', handleWindowResize)
        
        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    })

    useEffect(() => {
        const token = Cookie.get('token')

        if(token)
        setConnected(true)
    })

    const isToggle = (open: boolean) => {
        if(open) {
            let main_container = document.getElementById("main-container")
            console.log('open =>', main_container)
        }else {
            console.log('close')
        }
    }

    const logOut = () => {
        Cookie.remove('token')
        Cookie.remove('userId')
        setConnected(false)
        router.push('/')
    }


    return(
        <>
            <RegisterModal open={registerModal} setRegisterModal={setRegisterModal}/>
            <SignIn open={signInModal} setSignInModal={setSignInModal}  setConnected={setConnected}/>
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
                            <ResponsiveMenu connected={connected} logOut={logOut} open={isOpen} marginTop={marginTop} screenWidth={windowWidth} screenHeight={windowHeight - marginTop} setOpen={setOpen} setRegisterModal={setRegisterModal} setSignInModal={setSignInModal}   />
                        </div>
                    :
                        connected ?
                            <div className="mr-2">
                                <FontAwesomeIcon icon={faUser} size="xl" className="m-auto text-black hover:cursor-pointer" onClick={() => { setOpenMenu(prevState => !prevState) }}/>
                                <div className={`absolute flex flex-col ${ !openMenu ? "h-0" :  "h-[200px] border-b-[1px]" } w-fit overflow-hidden justify-between mt-4 right-0 border-x-[1px] border-black font-epilogue font-semibold z-10 transition-all duration-700`}>
                                    <div className="flex flex-col">
                                        <span className="py-2 px-1 border-black border-b-[1px] hover:cursor-pointer hover:bg-gray-400/30 hover:text-white">Mon alimentation</span>
                                        <span className="py-2 px-1 border-black border-b-[1px] hover:cursor-pointer hover:bg-gray-400/30 hover:text-white">Mon dashboard</span>
                                        <span className="py-2 px-1 border-black border-b-[1px] hover:cursor-pointer hover:bg-gray-400/30 hover:text-white">Mon compte</span>
                                    </div>
                                    <div className="mt-8">
                                        <span className="flex py-2 px-1 w-full hover:cursor-pointer hover:bg-gray-400/30 hover:text-white" onClick={() => {logOut(); setOpenMenu(false)}}>Me déconnecter</span>
                                    </div>
                                </div>
                            </div>
                        :
                            <>
                                <button onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'}); setRegisterModal(true)}} className="rounded-lg bg-primary text-white font-bold p-2 mr-6 transition">S&apos;inscrire</button>
                                <button onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'}); setSignInModal(true)}} className="rounded-lg border border-primary bg-white text-primary font-bold p-2">Se connecter</button>
                            </>       
                    }
                    
                </div>
            </div>
        </>
    )
}