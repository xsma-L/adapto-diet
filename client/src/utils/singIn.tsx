"use client"

import Image from 'next/image'

import { useForm, SubmitHandler } from "react-hook-form"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faLock, faX } from '@fortawesome/free-solid-svg-icons'

type Inputs = {
    email: string,
    password: string,
}

export default function SignIn(props: any){
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  console.log("open =>", props.open)

    return(
        <>
            <div className={`${props.open ? 'top-0 duration-500' : '-top-full duration-[1200ms]'} w-screen h-screen fixed z-40 bg-black/95 transition-all `}>
            </div>
            <div className={`flex flex-col items-center lg:flex-row justify-normal lg:justify-normal z-50 bg-white ${props.open ? ' top-1/2' : '-top-1/2'} w-[90%] h-[95%] md:w-[60%] rounded-xl absolute left-1/2 transform -translate-y-1/2 -translate-x-1/2 transition-all duration-1000	`}>
                <FontAwesomeIcon icon={faX} size="lg" className="block absolute right-5 top-5 hover:cursor-pointer" onClick={() => props.setSignInModal(false)}/>

                <div className="hidden lg:block lg:w-[40%] lg:h-full lg:relative lg:rounded-l-xl">
                    <Image src="/modal-bg.jpeg" className="rounded-l-xl" fill={true}  alt="Mélange de fruits et légumes" />
                </div>

                <div className="h-[70%] w-[90%] md:w-[70%] lg:w-[60%] text-center pt-2 relative lg:flex lg:flex-col lg:justify-center lg:items-center">
                    <div className="flex flex-col items-center my-4">
                        <div className="block h-[70px] w-[70px] relative">
                            <Image src="/logo.webp" className="rounded-l-xl" fill={true}  alt="Adapato'diet" />
                        </div>
                        <span className="font-fredoka font-bold text-xl">ADAPTO'DIET</span>
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
                                    <input type="text" {...register("password", {required: true})} className="w-[80%] focus-visible:outline-none" placeholder="Mot de passe" />
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