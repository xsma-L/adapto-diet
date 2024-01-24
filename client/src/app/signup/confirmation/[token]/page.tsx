"use client"

import Loader from '@/utils/loader';
import axios from 'axios'
import { useEffect, useState } from 'react'

interface ApiResponse {
    data: any
}

export default function RegisterConfirm({ params }: { params: { token: string } }) {

    const [verified, setVerified] = useState<string> ("loading");

    useEffect(() => {
        if (verified === 'loading') {
            verifyToken();
        }
    }, [])

    const verifyToken = async () => {
        try {
            const response = await axios.post<ApiResponse>(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/verify_email`, { token: params.token });
            if (response.data) {
                setVerified('done');
            }
        } catch (error) {
            console.error("Une erreur s'est produite lors de la vérification du token :", error);
            setVerified('error');
        }
    }

    return(
        <main className="">
            <section className="h-[91.5vh] bg-primary relative">                
                <div className={`${verified === 'loading' ? "w-[100px]" : "w-9/12"} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white`}>
                    {verified === "loading" ?
                        <>
                            <Loader options={'animate-spin h-full w-full'}/>
                        </>
                    :
                        verified === 'error' ?
                        <>
                            <h1 className="text-xl font-semibold">Confirmation de compte impossible...</h1>
                            <p className="mt-3">
                                Il semble y avoir un problème avec la confirmation de votre compte. Veuillez vérifier votre lien de confirmation ou contactez notre support technique pour obtenir de l'aide. <br />
                            </p>
                        </>
                        :
                        <>
                            <h1 className="text-xl font-semibold">Félicitations ! Votre compte Adapto'diet a été confirmé avec succès.</h1>
                            <p className="mt-3">
                                Vous pouvez désormais vous connecter à votre compte en utilisant votre adresse e-mail et votre mot de passe que vous avez créés lors de l'inscription. <br />
                            </p>
                        </>
                    }
                </div>
            </section>
        </main>
    )
}