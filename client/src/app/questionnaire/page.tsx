"use client"

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Widget } from '@typeform/embed-react'
import axios from 'axios'
import Cookies from "js-cookie"


interface ApiResponse {
    data: any
}

export default function Questionnaire() {
    
    const router = useRouter()

    useEffect(() => {
        const dietProfile = Cookies.get("dietProfile")

        if (dietProfile === "done")
        router.push("/mon-alimentation")
    },[])

    const handleFormSubmit = async (formId: String, responseId: string) => {
        try {
            const createDietProfile = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/create-diet-profile`, { formId: formId, responseId: responseId })
            console.log(createDietProfile)
        } catch (error) {
            console.log("error =>", error)
        }
    }

    return(
        <main className="bg-primary text-white h-[91.25vh]">
            <Widget id="nvFaG44o" style={{ width: '100%', height: '100%' }} className="my-form" onSubmit={( event => {handleFormSubmit(event.formId, event.responseId)})} />
        </main>
    )
}