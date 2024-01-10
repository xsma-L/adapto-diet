import type { Metadata } from 'next'
import { Inter, Epilogue, Fredoka } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter'});
const epilogue = Epilogue({ subsets: ['latin'], display: 'swap', variable: '--font-epilogue'})
const fredoka = Fredoka({ subsets: ['latin'], display: 'swap', variable: '--font-fredoka'})

export const metadata: Metadata = {
  title: 'Adapto\'diet - Découvrez une Alimentation Saine et Délicieuse',
  description: 'Explorez notre approche de l\'alimentation saine avec Adapdto\'diet. Découvrez des recettes équilibrées, des menus variés et une vie plus saine en savourant chaque bouchée.',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
      <script src="https://kit.fontawesome.com/6d6060bedc.js" crossOrigin="anonymous"></script>
      </head>
      <body className={`${inter.variable} ${epilogue.variable} ${fredoka.variable}`}>{children}</body>
    </html>
  )
}
