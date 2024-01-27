"use client"

import Image from "next/image"
import { useRouter } from 'next/navigation'

import { useForm, SubmitHandler } from "react-hook-form"
import { SignInSchema, SignInSchemaType } from "../utils/forms/schema/signIn"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"

import Cookies from "js-cookie"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faEnvelope, faLock, faX } from "@fortawesome/free-solid-svg-icons"

interface ApiResponse {
    userId: string
    token: string
    dietProfile: boolean
}

export default function SignIn({ open, setSignInModal, setConnected } : 
    {
        open: boolean, 
        setSignInModal: React.Dispatch<React.SetStateAction<boolean>>,
        setConnected: React.Dispatch<React.SetStateAction<boolean>>
    }  ){
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignInSchemaType>({ resolver: zodResolver(SignInSchema)})

  const router = useRouter()
  
  const onSubmit: SubmitHandler<SignInSchemaType> = async (data) => {
    try {
        const request = await axios.post<ApiResponse>(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, data)
        Cookies.set('token', request.data.token, { expires: 1 })
        Cookies.set('userId', request.data.userId, { expires: 1 })
        Cookies.set('dietProfile', request.data.dietProfile ? "done" : "not yet", { expires: 1 })

        if(request.status === 200)

        setConnected(true)
        setSignInModal(false)

        if(request.data.dietProfile) {
            router.push("/dashboard")
        } else {
            router.push('/mon-alimentation')
        }
    } catch (error) {
        console.log(error)
    }

  }

    return(
        <>
            <div className={`${open ? 'top-0 duration-500' : '-top-full duration-[1200ms]'} w-screen h-screen fixed z-40 bg-black/95 transition-all `}>
            </div>
            <div className={`flex flex-col items-center lg:flex-row justify-normal lg:justify-normal z-50 bg-white ${open ? ' top-1/2' : '-top-1/2'} w-[90%] h-[95%] md:w-[60%] lg:h-[70%] rounded-xl absolute left-1/2 transform -translate-y-1/2 -translate-x-1/2 transition-all duration-1000	`}>
                <FontAwesomeIcon icon={faX} size="lg" className="block absolute right-5 top-5 hover:cursor-pointer z-50" onClick={() => setSignInModal(false)}/>

                <div className="hidden lg:block lg:w-[40%] lg:h-full lg:relative lg:rounded-l-xl">
                    <Image src="/modal-bg.jpeg" className="rounded-l-xl" fill={true}  alt="Mélange de fruits et légumes" />
                </div>

                <div className="h-[70%] w-[90%] md:w-[70%] lg:w-[60%] text-center pt-2 relative lg:flex lg:flex-col lg:justify-center lg:items-center">
                    <div className="flex flex-col items-center my-4">
                        <div className="block h-[70px] w-[70px] relative">
                            <Image src="/logo.webp" className="rounded-l-xl" fill={true}  alt="Adapato'diet" />
                        </div>
                        <span className="font-fredoka font-bold text-xl">ADAPTO&apos;DIET</span>
                    </div>
                    <h2 className="font-epilogue text-xl">Connexion</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="h-full py-5 flex flex-col justify-evenly items-center">
                        <div className="flex flex-col items-center w-full">
                            <div className="mt-6 lg:mt-0 w-[100%]">
                                <div className={`p-2 w-full h-9 border rounded-md ${errors.email ?'border-red-600 border-2': 'border-black'} focus-within:border-2 focus-within:border-primary transition-all`}>
                                    <input type="text" {...register("email", {required: true})} className="w-[80%] focus-visible:outline-none" placeholder="Email" />
                                    <FontAwesomeIcon icon={faUser} size="lg" className="ml-2"/>
                                </div>
                                {errors.email && <span className="whitespace-nowrap text-sm">Ce champ est obligatoire</span>}
                            </div>

                            <div className="mt-6 w-[100%]">
                                <div className={`p-2 w-full h-9 border rounded-md ${errors.password ?'border-red-600 border-2': 'border-black'} focus-within:border-2 focus-within:border-primary transition-all`}>
                                    <input type="password" {...register("password", {required: true})} className="w-[80%] focus-visible:outline-none" placeholder="Mot de passe" />
                                    <FontAwesomeIcon icon={faLock} size="lg" className="ml-2"/>
                                </div>
                                {errors.password && <span className="whitespace-nowrap text-sm">Ce champs est obligatoire</span>}
                            </div>
                        </div>
                        <button type="submit" className="mt-8 rounded-lg bg-primary text-white font-bold py-2 px-6 mr-6 transition">Se connecter</button>
                    </form>
                </div>
            </div>
        </>
    )
}