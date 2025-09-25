'use client'

import { useState } from 'react'
import { ButtonLink, Icon, IconClass } from '@components'

interface NetworkNode {
  id: string
  name: string
  x: number
  y: number
  color: string
  size: number
}

export default function HeroSection () {
  const [weeklyDownloads] = useState(433)
  const [supportedChainsCount] = useState(21)

  const supportedChainsList = [
    'Bitcoin', 'Ethereum', 'Thorchain', 'Cosmos', 'Avalanche', 'BSC',
    'Polygon', 'Arbitrum', 'Optimism', 'Solana', 'Cardano', 'Polkadot',
    'Chainlink', 'Litecoin', 'Bitcoin Cash', 'Dogecoin', 'Mayachain',
    'Kujira', 'Osmosis', 'Juno', 'Stargaze', 'Akash', 'Radix', 'TRON'
  ]

  const networkNodes: NetworkNode[] = [
    { id: 'btc', name: 'Bitcoin', x: 20, y: 30, color: '#f7931a', size: 8 },
    { id: 'eth', name: 'Ethereum', x: 80, y: 20, color: '#627eea', size: 7 },
    { id: 'thor', name: 'Thorchain', x: 50, y: 50, color: '#33ff99', size: 6 },
    { id: 'avax', name: 'Avalanche', x: 30, y: 70, color: '#e84142', size: 5 },
    { id: 'cosmos', name: 'Cosmos', x: 70, y: 80, color: '#2e3148', size: 5 },
    { id: 'bsc', name: 'BSC', x: 15, y: 60, color: '#f3ba2f', size: 4 },
    { id: 'poly', name: 'Polygon', x: 85, y: 60, color: '#8247e5', size: 4 }
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-900 via-dark-800 to-chain-blue-900 px-4 py-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>

      {/* Network visualization background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          {/* Connection lines */}
          {networkNodes.map((node, i) => (
            networkNodes.slice(i + 1).map((otherNode, j) => (
              <line
                key={`line-${i}-${j}`}
                x1={node.x}
                y1={node.y}
                x2={otherNode.x}
                y2={otherNode.y}
                stroke="url(#lineGradient)"
                strokeWidth="0.1"
                className="opacity-30"
                style={{
                  animation: `chain-link ${4 + Math.random() * 2}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              />
            ))
          )).flat()}

          {/* Network nodes */}
          {networkNodes.map((node) => (
            <g key={node.id}>
              <circle
                cx={node.x}
                cy={node.y}
                r={node.size / 10}
                fill={node.color}
                className="network-node opacity-80"
              />
              <circle
                cx={node.x}
                cy={node.y}
                r={node.size / 5}
                fill="none"
                stroke={node.color}
                strokeWidth="0.1"
                className="opacity-40 animate-pulse-slow"
              />
            </g>
          ))}

          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0d87ff" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Floating blockchain logos */}
      <div className="absolute inset-0">
        {supportedChainsList.slice(0, 6).map((chain, index) => (
          <div
            key={chain}
            className={'absolute w-12 h-12 rounded-full bg-gradient-to-r from-chain-blue-500 to-electric-green-500 opacity-20 floating animate-pulse-slow'}
            style={{
              left: `${20 + (index * 15)}%`,
              top: `${30 + (index % 3) * 20}%`,
              animationDelay: `${index * 0.5}s`
            }}
          >
            <div className="w-full h-full flex items-center justify-center text-white text-xs font-semibold">
              {chain.slice(0, 3).toUpperCase()}
            </div>
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Real metrics */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-8 px-4">
          <div className="glass text-on-dark p-4 sm:p-6 rounded-lg flex-1 max-w-xs mx-auto">
            <div className="text-xl sm:text-2xl font-bold gradient-text">{weeklyDownloads}</div>
            <div className="text-xs sm:text-sm text-dark-300">Weekly Downloads</div>
          </div>
          <div className="glass text-on-dark p-4 sm:p-6 rounded-lg flex-1 max-w-xs mx-auto">
            <div className="text-xl sm:text-2xl font-bold gradient-text">{supportedChainsCount}+</div>
            <div className="text-xs sm:text-sm text-dark-300">Supported Chains</div>
          </div>
        </div>

        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-on-dark mb-6 leading-tight">
          Build
          <span className="gradient-text"> Anywhere</span>.
          <br />
          Connect
          <span className="gradient-text"> Everything</span>.
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl lg:text-2xl text-dark-300 mb-8 max-w-4xl mx-auto leading-relaxed px-4">
          The most comprehensive cross-chain development toolkit.
          Support for <span className="text-electric-green-400 font-semibold">20+ blockchains</span> with
          <span className="text-chain-blue-400 font-semibold"> unified APIs</span> that make
          cross-chain development as simple as single-chain development.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-12 px-4">
          <a
            href="#playground"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-chain-blue-500 to-electric-green-500 text-white font-semibold rounded-lg shadow-glow-blue hover:shadow-glow-green transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 text-center"
          >
            Try in 30 Seconds
          </a>
          <ButtonLink
            url="https://xchainjs.gitbook.io/xchainjs"
            text="View Documentation"
            style="secundary"
          />
        </div>

        {/* Real projects showcase */}
        <div className="glass p-4 sm:p-6 rounded-xl max-w-4xl mx-auto">
          <p className="text-dark-300 mb-4 text-sm sm:text-base">Powering real cross-chain projects</p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            <div className="flex items-center space-x-2">
              <Icon iconClass={IconClass.ASGARDEX} className="w-5 h-5 text-dark-300" />
              <span className="text-dark-200 text-xs sm:text-sm">ASGARDEX</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon iconClass={IconClass.LEAP_WALLET} className="w-5 h-5 text-dark-300" />
              <span className="text-dark-200 text-xs sm:text-sm">Leap Wallet</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon iconClass={IconClass.SWAPPER} className="w-5 h-5 text-dark-300" />
              <span className="text-dark-200 text-xs sm:text-sm">Swapper</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon iconClass={IconClass.LENDS} className="w-5 h-5 text-dark-300" />
              <span className="text-dark-200 text-xs sm:text-sm">Lends</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon iconClass={IconClass.CACAOSWAP} className="w-5 h-5 text-dark-300" />
              <span className="text-dark-200 text-xs sm:text-sm">CacaoSwap</span>
            </div>
            <span className="text-dark-400 text-xs sm:text-sm">and more...</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-dark-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-chain-blue-400 to-electric-green-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}
