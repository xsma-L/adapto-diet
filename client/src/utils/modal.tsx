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
    confirm_password: string,
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
            <div className="flex bg-white w-[60%] h-[70%] rounded-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="hidden lg:block lg:w-[40%] lg:h-full lg:relative lg:rounded-l-xl">
                    <Image src="/modal-bg.jpeg" className="rounded-l-xl" fill={true}  alt="Mélange de fruits et légumes" />
                </div>
                <div className="w-full lg:w-[60%] text-center pt-2 relative flex flex-col justify-center items-center">
                    <FontAwesomeIcon icon={faX} size="lg" className="block absolute right-5 top-5" />
                    <h2 className="font-epilogue text-2xl">Inscription</h2>
                    
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex justify-evenly w-full">
                            <div className="w-[45%]">
                                <div className="p-2 w-full h-9 border border-black">
                                    <input type="text" {...register("nom", {required: true})} className="w-[80%] focus-visible:outline-none" placeholder="Nom" />
                                    <FontAwesomeIcon icon={faUser} size="lg" className="ml-2"/>
                                </div>
                                {errors.nom && <span>Ce champ est obligatoire</span>}
                            </div>

                            <div className="w-[45%]">
                                <div className="p-2 w-full h-9 border border-black">
                                    <input type="text" {...register("prenom", {required: true})} className="w-[80%] focus-visible:outline-none" placeholder="Prénom" />
                                    <FontAwesomeIcon icon={faUser} size="lg" className="ml-2"/>
                                </div>
                                {errors.prenom && <span>Ce champs est obligatoire</span>}
                            </div>
                        </div>

                        <div className="mt-6 flex justify-evenly w-full">
                            <div className="w-[45%]">
                                <div className="p-2 h-9 border border-black">
                                    <input type="email" {...register("email", {required: true})} className="w-[80%] focus-visible:outline-none" placeholder="Email" />
                                    <FontAwesomeIcon icon={faEnvelope} size="lg" className="ml-2"/>
                                </div>
                                {errors.email && <span className="w-full">Ce champs est obligatoire</span>}
                            </div>

                            <div className="w-[45%]">
                                <div className="p-2 h-9 border border-black">
                                    <input type="password" {...register("password", {required: true})} className="w-[80%] focus-visible:outline-none" placeholder="Mot de passe" />
                                    <FontAwesomeIcon icon={faLock} size="lg" className="ml-2"/>
                                </div>
                                {errors.email && <span>Ce champs est obligatoire</span>}
                            </div>

                        </div>

                        <div className="ml-[3%] w-[45%]">
                            <div className="mt-6 p-2 w-full h-9 border border-black">
                                <input type="password" {...register("confirm_password", {required: true})} className="w-[80%] focus-visible:outline-none" placeholder="Mot de passe" />
                                <FontAwesomeIcon icon={faLock} size="lg" className="ml-2"/>
                            </div>
                            {errors.email && <span>Ce champs est obligatoire</span>}
                        </div>

                        <button type="submit" className="mt-8 rounded-lg bg-primary text-white font-bold py-2 px-6 mr-6 transition">S'inscrire</button>
                    </form>


                </div>
            </div>
        </div>
    )
}