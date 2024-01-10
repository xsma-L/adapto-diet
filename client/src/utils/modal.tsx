"use client"

import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faLock, faX } from '@fortawesome/free-solid-svg-icons'

export default function Modal(){
   
    return(
        <div className="fixed z-50 bg-black/95 w-screen h-screen">
            <div className="flex bg-white w-[60%] h-[70%] rounded-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-1/2 h-full relative rounded-l-xl">
                    <Image src="/modal-bg.jpeg" className="rounded-l-xl" fill={true}  alt="Mélange de fruits et légumes" />
                </div>
                <div className="w-1/2 text-center pt-2 relative flex flex-col justify-center items-center">
                    <FontAwesomeIcon icon={faX} size="lg" className="block absolute right-5 top-5" />
                    <h2 className="font-epilogue text-2xl">Inscription</h2>
                    <div className="w-2/3 h-1/2 flex flex-col justify-center items-center">
                        <div className="p-2 w-full border border-black">
                            <input type='text' className="w-[80%] focus-visible:outline-none" placeholder="Nom" />
                            <FontAwesomeIcon icon={faUser} size="lg" className="ml-2"/>
                        </div>
                        <div className="mt-6 p-2 w-full border border-black">
                            <input type='text' className="w-[80%] focus-visible:outline-none" placeholder="Prénom" />
                            <FontAwesomeIcon icon={faUser} size="lg" className="ml-2"/>
                        </div>

                        <div className="mt-6 p-2 w-full border border-black">
                            <input type='email'className="w-[80%] focus-visible:outline-none"  placeholder="Email" />
                            <FontAwesomeIcon icon={faEnvelope} size="lg" className="ml-2"/>
                        </div>

                        <div className="mt-6 p-2 w-full border border-black">
                            <input type='email'className="w-[80%] focus-visible:outline-none"  placeholder="Mot de passe" />
                            <FontAwesomeIcon icon={faLock} size="lg" className="ml-2"/>
                        </div>

                        <button onClick={() => console.log('Inscription...')} className="mt-8 rounded-lg bg-primary text-white font-bold p-2 mr-6 transition">S'inscrire</button>
                    </div>


                </div>
            </div>
        </div>
    )
}