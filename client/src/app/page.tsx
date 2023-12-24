import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <div className="flex justify-between items-center px-6 w-full h-14 border-b-2 bg-opacity-0 shadow border-black/20">
        <div className="flex items-center" id="logo">
          <div className="h-fit">
            <span className="font-fredoka font-bold">ADAPTO'DIET</span>
          </div>
          <div className="ml-2 h-6 w-8 relative">
            <Image src="/logo.webp" fill={true} alt="adapto'diet" />
          </div>
        </div>
        <div className="h-8 w-8 relative">
          <Image src="/hamburger-menu.svg" fill={true} alt="menu dropdown" />
        </div>
      </div>
      <section className="h-full">
        <div className="px-6 text-center mt-10 py-5">
          <h1 className="font-epilogue font-extrabold text-2xl">Bienvenue sur ADAPTO’DIET</h1>
          <p className="font-inter mt-7">
            Découvrez une expérience culinaire unique qui allie le plaisir de la gastronomie à une alimentation saine.<br /><br /> 
            Chez <strong>ADAPTO’DIET</strong>, notre engagement est de vous offrir des recettes équilibrées et délicieuses, adaptées à tous les goûts.
          </p>
        </div>
      </section>
      <section className="h-full bg-primary text-white">
        <div className="px-6 text-center mt-10 py-5">
          <div className="w-60 h-32 relative mt-3 mb-6 mx-auto">
            <Image src="/plate.svg" fill={true} alt="Repas équilibré sur une assiette avec légumes et protéines" />
          </div>
          <h2 className="font-epilogue font-extrabold text-lg">Une diététique Redéfinie</h2>
          <p className="font-inter mt-7">
            Manger sain ne devrait jamais sacrifier la saveur.<br /><br />
            Chez ADAPTO’DIET, nous redéfinissons la diététique en intégrant l'expertise culinaire.<br />
            Profitez d'une variété de recettes gastronomiques qui prennent soin de votre bien-être.
          </p>
        </div>
      </section>
      <section className="h-full">
        <div className="px-6 text-center mt-10 py-5">
          <div className="w-60 h-32 relative mt-3 mb-6 mx-auto">
            <Image src="/Chars.webp" fill={true} alt="Panier équilibré repmlit de légumes et protéines" />
          </div>
          <h2 className="font-epilogue font-extrabold text-lg">Variété de Saveurs Santé</h2>
          <p className="font-inter mt-7">
            Explorez nos menus diététiques diversifiés, élaborés pour s'adapter à toutes les préférences alimentaires.<br /><br />
            De la cuisine méditerranéenne aux options végétariennes, découvrez des recettes délicieuses adaptées à votre style de vie.
          </p>
        </div>
      </section>
      <section className="h-full bg-primary text-white">
        <div className="px-6 text-center mt-10 py-5">
          <div className="w-60 h-32 relative mt-3 mb-6 mx-auto">
            <Image src="/ia-image.webp" fill={true} alt="Repas équilibré créé avec l'aide d'une intelligence artificielle" />
          </div>
          <h2 className="font-epilogue font-extrabold text-lg">Plans de Repas Personnalisés avec Expertise Virtuelle</h2>
          <p className="font-inter mt-7">
            Notre particularité réside dans l'utilisation de l'expertise virtuelle pour créer des plans de repas personnalisés.<br /> <br />
            Grâce à cela, ADAPTO’DIET assure que chaque repas contribue à votre bien-être tout en satisfaisant vos papilles.
          </p>
        </div>
      </section>
      <section className="h-full">
        <div className="px-6 text-center mt-10 py-5">
          <div className="w-28 h-64 relative mt-3 mb-6 mx-auto">
            <Image src="/healthy.webp" fill={true} alt="Repas équilibré créé avec l'aide d'une intelligence artificielle" />
          </div>
          <h2 className="font-epilogue font-extrabold text-lg">Variété de Saveurs Santé</h2>
          <p className="font-inter mt-7">
            Explorez nos menus diététiques diversifiés, élaborés pour s'adapter à toutes les préférences alimentaires.<br />
            De la cuisine méditerranéenne aux options végétariennes, découvrez des recettes délicieuses adaptées à votre style de vie.
          </p>
        </div>
      </section>
      <section className="h-full bg-primary text-white">
        <div className="px-6 text-center mt-10 py-5">
          <p className="font-inter mt-7 font-bold">
            Commencez votre voyage avec ADAPTO’DIET, où chaque bouchée est une étape vers une vie plus saine et savoureuse!
          </p>
          <button type="button" className="mt-10 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Commencer</button>
        </div>
      </section>
    </main>
  )
}
