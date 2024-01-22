"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

import Cookies from "js-cookie"

export default function Dashboard (){
const router = useRouter()

    useEffect(() => {
        const token = Cookies.get('token')

        if(!token)
        router.push('/')
    })

    return (
    <>
        <h1>Dashboard</h1>
    </>        
    );
};