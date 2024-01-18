"use client"

import axios from 'axios'

import Image from 'next/image'

import { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faLock, faX } from '@fortawesome/free-solid-svg-icons'

type Inputs = {
    first_name: string,
    last_name: string,
    email: string,
    password: string,
}

interface ApiResponse {
    data: any
}

export default function RegisterModal(props: any){

    const [wrongEmail, setWrongEmail] = useState<Boolean>(false)
    const [registred, setRegistred] = useState<Boolean>(false)

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()
  
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        await axios.post<ApiResponse>(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/signup`, { data })
        .then(res => {
            setRegistred(true)
        }).catch(err => {
            if (err.response.data === "User already exist") {
                setWrongEmail(true)
            }
        })

    }

    return(
        <>
            <div className={`fixed ${props.open ? 'top-0 duration-500' : '-top-full duration-[1200ms]'} z-40 bg-black/95 w-screen h-screen transition-all`}>
            </div>
            <div className={`flex flex-col items-center lg:flex-row justify-normal lg:justify-normal  bg-white ${props.open ? ' top-1/2' : '-top-1/2'} w-[90%] h-[95%] md:w-[60%] md:h-[70%] rounded-xl absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 z-50`}>
                <FontAwesomeIcon onClick={() => props.setRegisterModal(false)} icon={faX} size="lg" className="block absolute right-5 top-5 hover:cursor-pointer z-50"/>
                <div className={`flex items-center absolute z-[20] top-[55px] ${wrongEmail ? "right-[80px] bg-blue-500 visible" : " invisible bg-blue-500/0 -right-[20px]" } text-white text-sm font-bold px-4 py-3 transition-all duration-1000 role="alert`}>
                    <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
                    <p>Cet email est déja utilisé</p>
                </div>

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
                    {registred ?
                        <>
                            <h2 className="font-epilogue text-xl text-bolder">Inscription Presque Terminée !</h2>
                            <p className="font-inter mt-6">
                                Merci de vous être inscrit. Un e-mail de confirmation a été envoyé à votre adresse. <br /><br /> 
                                Veuillez cliquer sur le lien dans cet e-mail pour finaliser votre inscription.
                            </p>
                        </>
                        :
                        <>
                            <h2 className="font-epilogue text-xl">Inscription</h2>
                            <form onSubmit={handleSubmit(onSubmit)} className="h-full py-5 flex flex-col justify-evenly items-center">
                                <div className="flex flex-col items-center lg:flex-row lg:justify-evenly w-full">
                                    <div className="mt-6 lg:mt-0 w-[100%] lg:w-[45%]">
                                        <div className={`p-2 w-full h-9 border rounded-md ${errors.last_name ?'border-red-600 border-2': 'border-black'} focus-within:border-2 focus-within:border-primary`}>
                                            <input type="text" {...register("last_name", {required: true})} className="w-[80%] focus-visible:outline-none" placeholder="Nom" />
                                            <FontAwesomeIcon icon={faUser} size="lg" className="ml-2"/>
                                        </div>
                                        {errors.last_name && <span className="whitespace-nowrap text-sm">Ce champs est obligatoire</span>}
                                    </div>

                                    <div className="mt-6 lg:mt-0 w-[100%] lg:w-[45%]">
                                        <div className={`p-2 w-full h-9 border rounded-md ${errors.first_name ?'border-red-600 border-2': 'border-black'} focus-within:border-2 focus-within:border-primary`}>
                                            <input type="text" {...register("first_name", {required: true})} className="w-[80%] focus-visible:outline-none" placeholder="Prénom" />
                                            <FontAwesomeIcon icon={faUser} size="lg" className="ml-2"/>
                                        </div>
                                        {errors.first_name && <span className="whitespace-nowrap text-sm">Ce champs est obligatoire</span>}
                                    </div>
                                </div>

                                <div className="flex flex-col items-center lg:flex-row lg:justify-evenly w-full">
                                    <div className="mt-6 lg:mt-0 w-[100%] lg:w-[45%]">
                                        <div className={`p-2 w-full h-9 border rounded-md ${errors.email ?'border-red-600 border-2': 'border-black'} focus-within:border-2 focus-within:border-primary`}>
                                            <input type="email" {...register("email", {required: true})} className="w-[80%] focus-visible:outline-none" placeholder="Email" onChange={() => wrongEmail && setWrongEmail(false)}/>
                                            <FontAwesomeIcon icon={faEnvelope} size="lg" className="ml-2"/>
                                        </div>
                                        {errors.email && <span className="whitespace-nowrap text-sm">Cette adresse mail est déja utilisée</span>}
                                    </div>

                                    <div className="mt-6 lg:mt-0 w-[100%] lg:w-[45%]">
                                        <div className={`p-2 w-full h-9 border rounded-md ${errors.password ?'border-red-600 border-2': 'border-black'} focus-within:border-2 focus-within:border-primary`}>
                                            <input type="password" {...register("password", {required: true})} className="w-[80%] focus-visible:outline-none" placeholder="Mot de passe" />
                                            <FontAwesomeIcon icon={faLock} size="lg" className="ml-2"/>
                                        </div>
                                        {errors.password && <span className="whitespace-nowrap text-sm">Ce champs est obligatoire</span>}
                                    </div>
                                </div>
                                <button type="submit" className="mt-8 rounded-lg bg-primary text-white font-bold py-2 px-6 mr-6 transition">S&apos;inscrire</button>
                            </form>
                        </>
                    }
                </div>
            </div>
        </>
    )
}