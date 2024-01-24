"use client"

import { Widget } from '@typeform/embed-react'
import axios from 'axios'

interface ApiResponse {
    data: any
}

export default function MonAlimentation() {

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