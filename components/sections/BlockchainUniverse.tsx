'use client'

import { useState } from 'react'

interface Blockchain {
  id: string
  name: string
  symbol: string
  color: string
  category: 'L1' | 'L2' | 'Cosmos' | 'Bitcoin' | 'Other'
  description: string
  features: string[]
  volume24h: string
}

export default function BlockchainUniverse () {
  const [selectedChain, setSelectedChain] = useState<Blockchain | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>('All')

  const blockchains: Blockchain[] = [
    {
      id: 'bitcoin',
      name: 'Bitcoin',
      symbol: 'BTC',
      color: '#f7931a',
      category: 'Bitcoin',
      description: 'The original cryptocurrency and digital store of value',
      features: ['Digital Gold', 'Proof of Work', 'UTXO Model'],
      volume24h: '$8.2B'
    },
    {
      id: 'ethereum',
      name: 'Ethereum',
      symbol: 'ETH',
      color: '#627eea',
      category: 'L1',
      description: 'The world computer enabling smart contracts and DeFi',
      features: ['Smart Contracts', 'DeFi Hub', 'NFTs'],
      volume24h: '$12.4B'
    },
    {
      id: 'thorchain',
      name: 'THORChain',
      symbol: 'RUNE',
      color: '#33ff99',
      category: 'L1',
      description: 'Cross-chain liquidity protocol',
      features: ['Cross-chain DEX', 'Liquidity Pools', 'Native Swaps'],
      volume24h: '$45M'
    },
    {
      id: 'cosmos',
      name: 'Cosmos',
      symbol: 'ATOM',
      color: '#2e3148',
      category: 'Cosmos',
      description: 'Internet of blockchains with IBC protocol',
      features: ['IBC Protocol', 'Interoperability', 'Proof of Stake'],
      volume24h: '$180M'
    },
    {
      id: 'avalanche',
      name: 'Avalanche',
      symbol: 'AVAX',
      color: '#e84142',
      category: 'L1',
      description: 'High-performance smart contracts platform',
      features: ['Sub-second Finality', 'Subnets', 'EVM Compatible'],
      volume24h: '$320M'
    },
    {
      id: 'arbitrum',
      name: 'Arbitrum',
      symbol: 'ARB',
      color: '#28a0f0',
      category: 'L2',
      description: 'Ethereum Layer 2 scaling solution',
      features: ['Optimistic Rollups', 'Low Fees', 'Ethereum Security'],
      volume24h: '$890M'
    },
    {
      id: 'polygon',
      name: 'Polygon',
      symbol: 'MATIC',
      color: '#8247e5',
      category: 'L2',
      description: 'Ethereum scaling and infrastructure development',
      features: ['PoS Chain', 'zkEVM', 'Developer Tools'],
      volume24h: '$650M'
    },
    {
      id: 'bsc',
      name: 'BNB Chain',
      symbol: 'BNB',
      color: '#f3ba2f',
      category: 'L1',
      description: 'High-performance blockchain for DeFi and Web3',
      features: ['Fast & Cheap', 'DeFi Ecosystem', 'BEP Standards'],
      volume24h: '$1.2B'
    },
    {
      id: 'mayachain',
      name: 'MAYAChain',
      symbol: 'CACAO',
      color: '#ff6b35',
      category: 'L1',
      description: 'Cross-chain liquidity for long-tail assets',
      features: ['Cross-chain LP', 'Native Swaps', 'Long-tail Assets'],
      volume24h: '$12M'
    },
    {
      id: 'tron',
      name: 'TRON',
      symbol: 'TRX',
      color: '#ff060a',
      category: 'L1',
      description: 'High-throughput blockchain platform for decentralized applications',
      features: ['High TPS', 'Low Fees', 'DApp Ecosystem'],
      volume24h: '$450M'
    }
  ]

  const categories = ['All', 'L1', 'L2', 'Cosmos', 'Bitcoin', 'Other']

  const filteredChains = activeCategory === 'All'
    ? blockchains
    : blockchains.filter(chain => chain.category === activeCategory)

  return (
    <section id="chains" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-4 sm:mb-6">
          Explore the Blockchain Universe
        </h2>
        <p className="text-lg sm:text-xl text-primary-light max-w-3xl mx-auto px-4">
          Interactive map of all supported blockchains. Click any chain to see live examples
          and implementation details.
        </p>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8 px-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => { setActiveCategory(category) }}
            className={`px-3 py-2 text-xs font-semibold rounded-full transition-all duration-300 touch-manipulation min-h-[36px] flex items-center justify-center ${
              activeCategory === category
                ? 'bg-gradient-to-r from-chain-blue-500 to-electric-green-500 text-white shadow-glow-blue'
                : 'glass text-primary-light hover:text-primary hover:shadow-md'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blockchain grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6 mb-8 sm:mb-12">
        {filteredChains.map((blockchain) => (
          <div
            key={blockchain.id}
            onClick={() => { setSelectedChain(blockchain) }}
            className="interactive-card glass p-4 sm:p-6 rounded-xl cursor-pointer group relative overflow-hidden touch-manipulation flex flex-col items-center justify-center min-h-[160px] sm:min-h-[200px]"
            style={{
              boxShadow: selectedChain?.id === blockchain.id
                ? `0 0 30px ${blockchain.color}40`
                : undefined
            }}
          >
            {/* Blockchain icon/color */}
            <div
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg network-node mb-3 sm:mb-4"
              style={{ backgroundColor: blockchain.color }}
            >
              {blockchain.symbol}
            </div>

            <h3 className="text-base sm:text-lg font-semibold text-center mb-2 text-primary">
              {blockchain.name}
            </h3>

            <p className="hidden sm:block text-xs sm:text-sm text-primary-lighter text-center mb-3">
              {blockchain.category}
            </p>

            <div className="text-center mt-auto">
              <span className="text-sm font-semibold text-electric-green-600">
                {blockchain.volume24h}
              </span>
              <span className="text-xs text-primary-lighter block">24h Volume</span>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-chain-blue-500/20 to-electric-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
          </div>
        ))}
      </div>

      {/* Selected chain details */}
      {selectedChain && (
        <div className="glass p-4 sm:p-6 lg:p-8 rounded-2xl animate-[fadeIn_0.3s_ease-in-out]">
          <div className="flex flex-col xl:grid xl:grid-cols-2 gap-6 lg:gap-8 items-start">
            {/* Chain info */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                <div
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-white font-bold text-xl sm:text-2xl mb-4 sm:mb-0 sm:mr-6 mx-auto sm:mx-0"
                  style={{ backgroundColor: selectedChain.color }}
                >
                  {selectedChain.symbol}
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl sm:text-3xl font-bold text-primary">{selectedChain.name}</h3>
                  <p className="text-primary-light">{selectedChain.category} Blockchain</p>
                  <p className="text-electric-green-600 font-semibold">{selectedChain.volume24h} 24h Volume</p>
                </div>
              </div>

              <p className="text-base sm:text-lg text-primary-light mb-6 text-center sm:text-left">{selectedChain.description}</p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-primary mb-3 text-center sm:text-left">Key Features</h4>
                <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                  {selectedChain.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-chain-blue-100 text-chain-blue-800 rounded-full text-sm font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Code example */}
            <div>
              <h4 className="text-lg font-semibold text-primary mb-4 text-center sm:text-left">Quick Integration</h4>
              <div className="code-block">
                <pre className="text-xs sm:text-sm leading-relaxed">
                  <code>{`// Connect to ${selectedChain.name}
import { Client } from '@xchainjs/xchain-client'

const client = new Client()

// Get balance
const balance = await client.getBalance(
  '${selectedChain.symbol}',
  'your-address'
)

// Send transaction
const txHash = await client.transfer('${selectedChain.symbol}', {
  to: 'recipient-address',
  amount: amount,
  memo: 'Cross-chain transfer'
})

console.log('Transaction:', txHash)`}</code>
                </pre>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <a
                  href="#playground"
                  className="w-full sm:w-auto px-4 py-2 bg-chain-blue-500 text-white rounded-lg hover:bg-chain-blue-600 transition-colors text-center"
                >
                  Try Live Demo
                </a>
                <a
                  href="https://xchainjs.gitbook.io/xchainjs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-4 py-2 border border-primary-light text-primary-light rounded-lg hover:border-primary hover:text-primary transition-colors text-center"
                >
                  View Docs
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Real stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16">
        <div className="text-center">
          <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">21+</div>
          <div className="text-xs sm:text-sm text-primary-lighter">Supported Chains</div>
        </div>
        <div className="text-center">
          <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">128</div>
          <div className="text-xs sm:text-sm text-primary-lighter">GitHub Stars</div>
        </div>
        <div className="text-center">
          <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">46</div>
          <div className="text-xs sm:text-sm text-primary-lighter">NPM Dependents</div>
        </div>
        <div className="text-center">
          <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">433</div>
          <div className="text-xs sm:text-sm text-primary-lighter">Weekly Downloads</div>
        </div>
      </div>
    </section>
  )
}
