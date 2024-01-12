"use client"

import Image from 'next/image'

import { useState } from 'react'

import Header from '@/utils/header'

export default function Home() {

  const [registerModal, setRegisterModal] = useState<boolean>(false)

  const [signInModal, setSignInModal] = useState<boolean>(false)
  

  return (
    <main className="">
      <Header />
      <section className="h-full w-full lg:h-[85vh] lg:relative">
        <div className="px-6 text-center mt-10 py-5 lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
          <h1 className="font-epilogue font-extrabold text-2xl lg:text-5xl">Bienvenue sur ADAPTO’DIET</h1>
          <p className="font-inter mt-7 lg:mt-14 lg:text-xl">
            Découvrez une expérience culinaire unique qui allie le plaisir de la gastronomie à une alimentation saine.<br /><br /> 
            Chez <strong>ADAPTO’DIET</strong>, notre engagement est de vous offrir des recettes équilibrées et délicieuses, adaptées à tous les goûts.
          </p>
        </div>
      </section>
      <section className="h-full w-full lg:h-fit lg:flex lg:justify-center lg:align-center bg-primary text-white">
        <div className="px-6 text-center mt-10 py-5 lg:w-[80%] lg:flex lg:mt-0 lg:items-center lg:justify-around">
          <div className="h-32 relative mt-3 mb-6 mx-auto lg:basis-2/5 lg:w-full lg:h-80 lg:mt-0 lg:mx-0">
            <Image src="/plate.svg" fill={true} alt="Repas équilibré sur une assiette avec légumes et protéines" />
          </div>
          <div className="basis-1/2">
            <h2 className="font-epilogue font-extrabold text-lg lg:text-2xl lg:text-left lg:mt-5">Une diététique Redéfinie</h2>
            <p className="font-inter mt-7 lg:text-xl lg:leading-7 lg:text-left">
              Manger sain ne devrait jamais sacrifier la saveur.<br />
              Chez ADAPTO’DIET, nous redéfinissons la diététique en intégrant l'expertise culinaire.<br /><br />
              Profitez d'une variété de recettes gastronomiques qui prennent soin de votre bien-être.
            </p>
          </div>
        </div>
      </section>
      <section className="h-full w-full lg:h-fit lg:flex lg:justify-center lg:align-center">
        <div className="px-6 text-center mt-10 py-5 lg:mt-0 lg:w-[80%] lg:flex lg:flex-row-reverse lg:items-center lg:justify-around">
          <div className="w-60 h-32 relative mt-3 mb-6 mx-auto lg:basis-2/5 lg:h-64 lg:mt-0 lg:mx-0">
            <Image src="/Chars.webp" fill={true} alt="Panier équilibré repmlit de légumes et protéines" />
          </div>
          <div className="basis-1/2">
            <h2 className="font-epilogue font-extrabold text-lg lg:text-2xl lg:mt-5 lg:text-right">Variété de Saveurs Santé</h2>
            <p className="font-inter mt-7 lg:text-xl lg:leading-7 lg:text-right">
              Explorez nos menus diététiques diversifiés, élaborés pour s'adapter à toutes les préférences alimentaires.<br /><br />
              De la cuisine méditerranéenne aux options végétariennes, découvrez des recettes délicieuses adaptées à votre style de vie.
            </p>
          </div>
        </div>
      </section>
      <section className="h-full w-full lg:h-fit lg:flex lg:justify-center lg:align-center bg-primary text-white">
        <div className="px-6 text-center mt-10 py-5 lg:mt-0 lg:w-[80%] lg:flex lg:items-center lg:justify-around">
          <div className="w-60 h-32 relative mt-3 mb-6 mx-auto lg:basis-2/5 lg:h-80 lg:mt-0 lg:mx-0">
            <Image src="/robot.svg" fill={true} alt="Repas équilibré créé avec l'aide d'une intelligence artificielle" />
          </div>
          <div className="basis-1/2">
            <h2 className="font-epilogue font-extrabold text-lg lg:text-2xl lg:mt-5 lg:text-left">Plans de Repas Personnalisés avec Expertise Virtuelle</h2>
            <p className="font-inter mt-7 lg:text-xl lg:leading-7 lg:text-left">
              Notre particularité réside dans l'utilisation de l'expertise virtuelle pour créer des plans de repas personnalisés.<br /> <br />
              Grâce à cela, ADAPTO’DIET assure que chaque repas contribue à votre bien-être tout en satisfaisant vos papilles.
            </p>
          </div>
        </div>
      </section>
      <section className="h-full w-full lg:h-fit lg:flex lg:justify-center lg:align-center">
        <div className="px-6 text-center mt-10 py-5 lg:mt-0 lg:w-[80%] lg:flex lg:flex-row-reverse lg:items-center lg:justify-around">
          <div className="w-60 h-64 relative mt-3 mb-6 mx-auto md:h-[23rem] lg:w-basis-1/3 lg:h-[30rem] lg:mt-0 lg:mx-0">
            <Image src="/healthy.webp" fill={true} alt="Repas équilibré créé avec l'aide d'une intelligence artificielle" />
          </div>
          <div className="basis-1/2">
            <h2 className="font-epilogue font-extrabold text-lg lg:text-2xl lg:mt-5 lg:text-left">Savourer la Gourmandise en Toute Santé</h2>
            <p className="font-inter mt-7 lg:text-xl lg:leading-7 lg:text-left">
            Rejoignez-nous dans cette aventure culinaire où la gourmandise et la santé se rencontrent harmonieusement.
            <br /><br /><strong>ADAPTO'DIET</strong>vous accompagne dans votre quête d'un mode de vie équilibré, en mettant en avant le plaisir de la table tout en respectant vos objectifs diététiques.
            </p>
          </div>
        </div>
      </section>
      <section className="h-full w-full lg:h-[30vh] lg:relative bg-primary text-white">
        <div className="lg:w-[90%] px-6 text-center mt-10 py-5 lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
          <p className="font-inter font-extrabold text-center md:text-lg lg:text-2xl lg:mt-5">
            Commencez votre voyage avec ADAPTO’DIET, où chaque bouchée est une étape vers une vie plus saine et savoureuse!
          </p>
          {/* <button type="button" className="mt-10 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 lg:p-5 lg:text-lg">Commencer</button> */}
        </div>
      </section>
    </main>
  )
}
