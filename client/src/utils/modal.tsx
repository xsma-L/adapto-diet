"use client"

import Image from 'next/image'

import { useForm, SubmitHandler } from "react-hook-form"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faLock, faX } from '@fortawesome/free-solid-svg-icons'

type Inputs = {
    nom: string,
    prenom: string,
    email: string,
    password: string,
}

export default function Modal(){
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  console.log(watch("nom"))

    return(
        <div className="fixed top-0 z-50 bg-black/95 w-screen h-screen">
            <div className="flex flex-col items-center lg:flex-row justify-normal lg:justify-normal  bg-white w-[90%] h-[95%] md:w-[60%] rounded-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <FontAwesomeIcon icon={faX} size="lg" className="block absolute right-5 top-5" />

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
                    <h2 className="font-epilogue text-xl">Inscription</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="h-full py-5 flex flex-col justify-evenly items-center">
                        <div className="flex flex-col items-center lg:flex-row lg:justify-evenly w-full">
                            <div className="mt-6 lg:mt-0 w-[100%] lg:w-[45%]">
                                <div className={`p-2 w-full h-9 border rounded-md ${errors.nom ?'border-red-600 border-2': 'border-black'} focus-within:border-2 focus-within:border-primary`}>
                                    <input type="text" {...register("nom", {required: true})} className="w-[80%] focus-visible:outline-none" placeholder="Nom" />
                                    <FontAwesomeIcon icon={faUser} size="lg" className="ml-2"/>
                                </div>
                                {errors.nom && <span className="whitespace-nowrap text-sm">Ce champ est obligatoire</span>}
                            </div>

                            <div className="mt-6 lg:mt-0 w-[100%] lg:w-[45%]">
                                <div className={`p-2 w-full h-9 border rounded-md ${errors.prenom ?'border-red-600 border-2': 'border-black'} focus-within:border-2 focus-within:border-primary`}>
                                    <input type="text" {...register("prenom", {required: true})} className="w-[80%] focus-visible:outline-none" placeholder="Prénom" />
                                    <FontAwesomeIcon icon={faUser} size="lg" className="ml-2"/>
                                </div>
                                {errors.prenom && <span className="whitespace-nowrap text-sm">Ce champs est obligatoire</span>}
                            </div>
                        </div>

                        <div className="flex flex-col items-center lg:flex-row lg:justify-evenly w-full">
                            <div className="mt-6 lg:mt-0 w-[100%] lg:w-[45%]">
                                <div className={`p-2 w-full h-9 border rounded-md ${errors.email ?'border-red-600 border-2': 'border-black'} focus-within:border-2 focus-within:border-primary`}>
                                    <input type="email" {...register("email", {required: true})} className="w-[80%] focus-visible:outline-none" placeholder="Email" />
                                    <FontAwesomeIcon icon={faEnvelope} size="lg" className="ml-2"/>
                                </div>
                                {errors.email && <span className="whitespace-nowrap text-sm">Ce champs est obligatoire</span>}
                            </div>

                            <div className="mt-6 lg:mt-0 w-[100%] lg:w-[45%]">
                                <div className={`p-2 w-full h-9 border rounded-md ${errors.password ?'border-red-600 border-2': 'border-black'} focus-within:border-2 focus-within:border-primary`}>
                                    <input type="password" {...register("password", {required: true})} className="w-[80%] focus-visible:outline-none" placeholder="Mot de passe" />
                                    <FontAwesomeIcon icon={faLock} size="lg" className="ml-2"/>
                                </div>
                                {errors.password && <span className="whitespace-nowrap text-sm">Ce champs est obligatoire</span>}
                            </div>
                        </div>
                        <button type="submit" className="mt-8 rounded-lg bg-primary text-white font-bold py-2 px-6 mr-6 transition">S'inscrire</button>
                    </form>
                </div>
            </div>
        </div>
    )
}