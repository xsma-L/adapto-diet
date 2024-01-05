"use client"

import Image from 'next/image'
import Link from 'next/link';

export default function Header(){
   
    return(
        <div className="flex justify-between items-center px-6 w-full h-14 border-b-2 bg-opacity-0 shadow border-black/20">
            <div className="flex items-center" id="logo">
                <div className="h-fit">
                    <span className="font-fredoka font-bold">ADAPTO'DIET</span>
                </div>
                <div className="ml-2 h-6 w-8 relative">
                    <Image src="/logo.webp" fill={true} alt="adapto'diet" />
                </div>
            </div>
                <div className="flex">
                    <button className="h-10 p-2 bg-primary rounded-lg text-white">S'inscrire</button>
                </div>
        </div>
    )
}