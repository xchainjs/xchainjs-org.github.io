import { type Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://xchainjs.org'),
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
