'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import Image from 'next/image'
import { IconLink } from '@components'
import { IconClass } from '../../components/Icon/Icon'
import { useState } from 'react'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
                <button
                  onClick={() => { setIsMobileMenuOpen(!isMobileMenuOpen) }}
                  className="md:hidden p-3 text-primary-light hover:text-primary transition-colors"
                  aria-label="Toggle mobile menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-40 pt-16">
            <div className="fixed inset-0 bg-black/50" onClick={() => { setIsMobileMenuOpen(false) }} />
            <nav className="relative glass m-4 rounded-xl p-6">
              <div className="space-y-4">
                <a
                  href="#playground"
                  className="block py-3 px-4 text-primary-light hover:text-primary text-lg transition-colors rounded-lg hover:bg-primary-light/10"
                  onClick={() => { setIsMobileMenuOpen(false) }}
                >
                  Playground
                </a>
                <a
                  href="#chains"
                  className="block py-3 px-4 text-primary-light hover:text-primary text-lg transition-colors rounded-lg hover:bg-primary-light/10"
                  onClick={() => { setIsMobileMenuOpen(false) }}
                >
                  Chains
                </a>
                <a
                  href="#success-stories"
                  className="block py-3 px-4 text-primary-light hover:text-primary text-lg transition-colors rounded-lg hover:bg-primary-light/10"
                  onClick={() => { setIsMobileMenuOpen(false) }}
                >
                  Success Stories
                </a>
                <a
                  href="https://xchainjs.gitbook.io/xchainjs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-3 px-4 text-primary-light hover:text-primary text-lg transition-colors rounded-lg hover:bg-primary-light/10"
                  onClick={() => { setIsMobileMenuOpen(false) }}
                >
                  Docs
                </a>
                <a
                  href="https://discord.com/invite/7RRmc35UEG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full mt-6 px-4 py-3 bg-gradient-to-r from-chain-blue-500 to-electric-green-500 text-white font-semibold rounded-lg text-center transition-all duration-300 hover:shadow-glow-blue"
                  onClick={() => { setIsMobileMenuOpen(false) }}
                >
                  Get Started
                </a>
              </div>
            </nav>
          </div>
        )}

        {/* Add top padding to account for fixed header */}
        <div className="pt-16">
          {children}
        </div>

        {/* Modern footer */}
        <footer className="bg-dark-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {/* Logo and description */}
              <div className="sm:col-span-2 lg:col-span-2">
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
                <div className="flex flex-wrap gap-3 sm:gap-4 justify-center sm:justify-start">
                  <IconLink iconClass={IconClass.X} url="https://x.com/xchainjs"/>
                  <IconLink iconClass={IconClass.GITHUB} url="https://github.com/xchainjs/xchainjs-lib"/>
                  <IconLink iconClass={IconClass.TELEGRAM} url="https://t.me/xchainjs"/>
                  <IconLink iconClass={IconClass.DISCORD} url="https://discord.com/invite/7RRmc35UEG"/>
                </div>
              </div>

              {/* Links */}
              <div className="text-center sm:text-left">
                <h3 className="font-semibold mb-3 sm:mb-4 text-white">Developers</h3>
                <ul className="space-y-2 sm:space-y-3 text-dark-300">
                  <li><a href="https://xchainjs.gitbook.io/xchainjs" className="block py-1 hover:text-white transition-colors text-sm sm:text-base">Documentation</a></li>
                  <li><a href="#" className="block py-1 hover:text-white transition-colors text-sm sm:text-base">API Reference</a></li>
                  <li><a href="#" className="block py-1 hover:text-white transition-colors text-sm sm:text-base">Examples</a></li>
                  <li><a href="#" className="block py-1 hover:text-white transition-colors text-sm sm:text-base">GitHub</a></li>
                </ul>
              </div>

              <div className="text-center sm:text-left">
                <h3 className="font-semibold mb-3 sm:mb-4 text-white">Community</h3>
                <ul className="space-y-2 sm:space-y-3 text-dark-300">
                  <li><a href="https://discord.com/invite/7RRmc35UEG" className="block py-1 hover:text-white transition-colors text-sm sm:text-base">Discord</a></li>
                  <li><a href="https://t.me/xchainjs" className="block py-1 hover:text-white transition-colors text-sm sm:text-base">Telegram</a></li>
                  <li><a href="https://x.com/xchainjs" className="block py-1 hover:text-white transition-colors text-sm sm:text-base">Twitter</a></li>
                  <li><a href="#" className="block py-1 hover:text-white transition-colors text-sm sm:text-base">Blog</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-dark-700 pt-6 sm:pt-8 text-center text-dark-400">
              <p className="text-sm sm:text-base">&copy; 2024 XChainJS. Building the multi-chain future.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
