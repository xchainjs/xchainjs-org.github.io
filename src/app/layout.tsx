import { Roboto_Mono } from 'next/font/google'
import './globals.css'
import Image from 'next/image'
import { IconLink, Title } from '@components'
import { type Metadata } from 'next'
import { IconClass } from '../../components/Icon/Icon'

const robotoMono = Roboto_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'XChainJS',
  icons: ['logos/xchainjs.svg']
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${robotoMono.className} text-primary 2xl:px-60 antialiased`}>
        <header className='flex flex-col mt-5 md:mt-10 mb-10 md:mb-16'>
          <div className='hidden md:flex flex-row justify-center'>
            <Image className='text-center' src='logos/xchainjs.svg' width={110} height={110} alt='xchain-logo'/>
          </div>
          <div className='flex md:hidden flex-row justify-center'>
            <Image className='text-center' src='logos/xchainjs.svg' width={70} height={70} alt='xchain-logo'/>
          </div>
          <div className='flex flex-row justify-center mt-0 md:mt-3'>
            <Title text='xchainjs'/>
          </div>
        </header>
        {children}
        <footer className='flex flex-col mb-20 md:mb-40 text-center gap-y-7 md:gap-y-10'>
          <p>Join our vibrant communities</p>
          <div className='flex flex-row justify-center items-center gap-x-8 md:gap-x-20 '>
            <IconLink iconClass={IconClass.X} url='https://x.com/xchainjs'/>
            <IconLink iconClass={IconClass.GITHUB} url='https://github.com/xchainjs/xchainjs-lib'/>
            <IconLink iconClass={IconClass.TELEGRAM} url='https://t.me/xchainjs'/>
            <IconLink iconClass={IconClass.DISCORD} url='https://discord.com/invite/7RRmc35UEG'/>
          </div>
        </footer>
      </body>
    </html>
  )
}
