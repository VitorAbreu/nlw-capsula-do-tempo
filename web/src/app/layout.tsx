import { EmptyMemories } from '@/components/EmptyMemories'
import { Hero } from '@/components/Hero'
import { Profile } from '@/components/Profile'
import { SignIn } from '@/components/Signin'

import './globals.css'
import { Roboto_Flex, Bai_Jamjuree } from 'next/font/google'
import { Copyright } from '@/components/Copyright'
import { cookies } from 'next/headers'

const roboto = Roboto_Flex({ subsets: ['latin'], variable: '--font-roboto' })
const baiJamjuree = Bai_Jamjuree({ subsets: ['latin'], weight: '700', variable: '--font-bai-jamjuree' })

export const metadata = {
  title: 'NLW SpaceTime',
  description: 'Uma cápsula do tempo construída com React, Next.js,TailwindCSS e Typescript. Meu primeiro projeto React',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isAuthenticated = cookies().has('token')

  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baiJamjuree.variable} font-sans text-gray-100 bg-gray-900`}>
        <main className='grid grid-cols-2 min-h-screen'>
          {/* Left */}
          <div className='flex bg-[url(../assets/bg-stars.svg)] bg-cover flex-col items-start justify-between px-28 py-16 relative overflow-hidden border-r border-white/10'>
            {/* Blur */}
            <div className='absolute rounded-full blur-full right-0 top-1/2 h-[288px] w-[526px] bg-purple-700 opacity-50 translate-x-1/2 -translate-y-1/2'></div>
            {/* Stripes */}
            <div className='absolute right-2 top-0 bottom-0 w-2 bg-stripes'></div>
            {isAuthenticated ? <Profile /> : <SignIn />}
            <Hero />
            <Copyright />
          </div>
          {/* Right */}
          <div className='flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover'>
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
