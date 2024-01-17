"use client"

import axios from 'axios'
import { useEffect, useState } from 'react'

interface ApiResponse {
    data: any
}

export default function RegisterConfirm({ params }: { params: { token: string } }) {

    const [verified, setverified] = useState<Boolean> (false);

    useEffect(() => {
        const verifyToken = async () => {
            const verify = await axios.post<ApiResponse>(`${process.env.NEXT_PUBLIC_API_URL}/api/verify_email`, { data: { token: params.token }})
            .then(res => {
                console.log(res)
            }).catch(err => console.log('erreur =>', err))
        }
        verifyToken()
    }, [])

    console.log('token =>', params.token)
    return(
        <main className="">
            <section className="h-[91.5vh] bg-primary relative">
                <div className="w-9/12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white">
                    <h1 className="text-xl font-semibold">Félicitations ! Votre compte Adapto'diet a été confirmé avec succès.</h1>
                    <p className="mt-3">
                        Vous pouvez désormais vous connecter à votre compte en utilisant votre adresse e-mail et votre mot de passe que vous avez créés lors de l'inscription. <br />
                    </p>
                </div>
            </section>
        </main>
    )
}