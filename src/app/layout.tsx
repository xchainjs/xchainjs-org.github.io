import { Inter } from 'next/font/google'
import './globals.css'
import Image from 'next/image'
import { IconLink } from '@components'
import { type Metadata } from 'next'
import { IconClass } from '../../components/Icon/Icon'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'XChainJS - Build Anywhere. Connect Everything.',
  description: 'The most comprehensive cross-chain development toolkit. Support 20+ blockchains with unified APIs that make cross-chain development simple.',
  keywords: 'XChainJS, cross-chain, blockchain development, DeFi, THORChain, cryptocurrency, multi-chain, developer toolkit',
  openGraph: {
    title: 'XChainJS - Build Anywhere. Connect Everything.',
    description: 'The most comprehensive cross-chain development toolkit for 20+ blockchains.',
    url: 'https://xchainjs.org',
    siteName: 'XChainJS',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'XChainJS - Build Anywhere. Connect Everything.',
    description: 'The most comprehensive cross-chain development toolkit for 20+ blockchains.',
    creator: '@xchainjs'
  },
  icons: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      url: '/logos/xchainjs.svg'
    }
  ],
  robots: {
    index: true,
    follow: true
  }
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-body text-primary antialiased">
        {/* Modern header */}
        <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-primary-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <Image
                  src="logos/xchainjs.svg"
                  width={40}
                  height={40}
                  alt="XChainJS Logo"
                  className="w-8 h-8 md:w-10 md:h-10"
                />
                <span className="text-xl md:text-2xl font-bold gradient-text">
                  XChainJS
                </span>
              </div>

              {/* Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                <a href="#playground" className="text-primary-light hover:text-primary transition-colors">
                  Playground
                </a>
                <a href="#chains" className="text-primary-light hover:text-primary transition-colors">
                  Chains
                </a>
                <a href="#success-stories" className="text-primary-light hover:text-primary transition-colors">
                  Success Stories
                </a>
                <a
                  href="https://xchainjs.gitbook.io/xchainjs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-light hover:text-primary transition-colors"
                >
                  Docs
                </a>
              </nav>

              {/* CTA */}
              <div className="flex items-center space-x-4">
                <a
                  href="https://discord.com/invite/7RRmc35UEG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex px-4 py-2 bg-gradient-to-r from-chain-blue-500 to-electric-green-500 text-white font-semibold rounded-lg hover:shadow-glow-blue transition-all duration-300"
                >
                  Get Started
                </a>

                {/* Mobile menu button */}
                <button className="md:hidden p-2 text-primary-light hover:text-primary">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Add top padding to account for fixed header */}
        <div className="pt-16">
          {children}
        </div>

        {/* Modern footer */}
        <footer className="bg-dark-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              {/* Logo and description */}
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <Image
                    src="logos/xchainjs.svg"
                    width={40}
                    height={40}
                    alt="XChainJS Logo"
                  />
                  <span className="text-2xl font-bold gradient-text">XChainJS</span>
                </div>
                <p className="text-dark-300 mb-6 max-w-md">
                  The most comprehensive cross-chain development toolkit.
                  Build anywhere, connect everything.
                </p>
                <div className="flex space-x-4">
                  <IconLink iconClass={IconClass.X} url="https://x.com/xchainjs"/>
                  <IconLink iconClass={IconClass.GITHUB} url="https://github.com/xchainjs/xchainjs-lib"/>
                  <IconLink iconClass={IconClass.TELEGRAM} url="https://t.me/xchainjs"/>
                  <IconLink iconClass={IconClass.DISCORD} url="https://discord.com/invite/7RRmc35UEG"/>
                </div>
              </div>

              {/* Links */}
              <div>
                <h3 className="font-semibold mb-4">Developers</h3>
                <ul className="space-y-2 text-dark-300">
                  <li><a href="https://xchainjs.gitbook.io/xchainjs" className="hover:text-white transition-colors">Documentation</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Examples</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Community</h3>
                <ul className="space-y-2 text-dark-300">
                  <li><a href="https://discord.com/invite/7RRmc35UEG" className="hover:text-white transition-colors">Discord</a></li>
                  <li><a href="https://t.me/xchainjs" className="hover:text-white transition-colors">Telegram</a></li>
                  <li><a href="https://x.com/xchainjs" className="hover:text-white transition-colors">Twitter</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-dark-700 pt-8 text-center text-dark-400">
              <p>&copy; 2024 XChainJS. Building the multi-chain future.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
