import React, { useEffect, useState } from "react";

function ResponsiveMenu({connected, logOut, open, marginTop, screenWidth, screenHeight, setOpen, setRegisterModal, setSignInModal}: 
    {
        connected: boolean,
        logOut: ()=> void,
        open: boolean, 
        marginTop: number,
        screenWidth: number,
        screenHeight: number,
        setOpen: React.Dispatch<React.SetStateAction<boolean>>,
        setRegisterModal: React.Dispatch<React.SetStateAction<boolean>>,
        setSignInModal:  React.Dispatch<React.SetStateAction<boolean>>
    }) {

    const [height, setHeight] = useState<number>(0)

    useEffect(() => {
        console.log('open =>', open)
        if(open){
            setHeight(60)
        }else {
            setHeight(0)
        }
    })

    return (
        <>
            <div className={`fixed ${open ? 'top-0 duration-500' : '-top-full duration-[1200ms]'} left-0 z-40 bg-black/50 w-screen transition-all`} style={{ top:marginTop,  height: open ? screenHeight : 0}}>
            </div>
            <div className={`absolute bg-white left-0 top-[${marginTop}px] z-[41] overflow-hidden transition-all duration-1000`} style={{ top:marginTop, width: screenWidth, height: height + "vh" }}>
                <div className={`flex flex-col ${ connected ? "h-full justify-between" : "h-fit" }`}>
                    {
                        connected ?
                            <>
                                <div className="flex flex-col">
                                    <span className="py-2 px-1 border-black border-b-[1px] hover:cursor-pointer">Mon alimentation</span>
                                    <span className="py-2 px-1 border-black border-b-[1px] hover:cursor-pointer">Mon dashboard</span>
                                    <span className="py-2 px-1 border-black border-b-[1px] hover:cursor-pointer">Mon compte</span>
                                </div>
                                <div className="">
                                    <span className="flex py-2 px-1 w-full hover:cursor-pointer" onClick={() => {logOut(); setOpen(prevstate => !prevstate)}}>Me déconnecter</span>
                                </div>
                            </>
                        :
                            <>
                                <span className="w-full h-14 pl-3 border-b-[1px] flex flex-col justify-center font-epilogue text-lg font-medium hover:cursor-pointer" onClick={() => { setOpen(false), setRegisterModal(true) }}>S'inscrire</span>
                                <span className="w-full h-14 pl-3 border-b-[1px] flex flex-col justify-center font-epilogue text-lg font-mediu hover:cursor-pointer" onClick={() => { setOpen(false), setSignInModal(true) }}>Se connecter</span>
                            </>
                    }
                </div>
            </div>
        </>
    );
}

export default ResponsiveMenu;