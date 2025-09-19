'use client'

import { useState } from 'react'

export default function ProblemSolution () {
  const [activeTab, setActiveTab] = useState<'problem' | 'solution'>('problem')

  const problemCode = `// Managing multiple blockchains the hard way
const bitcoinClient = new BitcoinClient(config1)
const ethereumClient = new EthereumClient(config2)
const cosmosClient = new CosmosClient(config3)
const avalancheClient = new AvalancheClient(config4)

// Different APIs for each chain
const btcBalance = await bitcoinClient.getBalance(address)
const ethBalance = await ethereumClient.balanceOf(address)
const atomBalance = await cosmosClient.queryBalance(address)
const avaxBalance = await avalancheClient.getAccountBalance(address)

// Different transaction formats
const btcTx = await bitcoinClient.sendTransaction({
  to: recipient,
  amount: amount,
  fee: calculateBtcFee()
})

const ethTx = await ethereumClient.transfer({
  recipient: recipient,
  value: amount,
  gasPrice: await ethereumClient.getGasPrice()
})

// ...and 18 more chains with different APIs
// 100+ lines of repetitive, error-prone code`

  const solutionCode = `// The XChainJS way - unified wallet patterns
import { Wallet } from '@xchainjs/xchain-wallet'
import { Client as BtcClient, defaultBTCParams } from '@xchainjs/xchain-bitcoin'
import { Client as EthClient, defaultEthParams } from '@xchainjs/xchain-ethereum'

// Initialize wallet with multiple chain clients
const wallet = new Wallet({
  BTC: new BtcClient({ ...defaultBTCParams, network: Network.Mainnet }),
  ETH: new EthClient({ ...defaultEthParams, network: Network.Mainnet })
})

// Unified balance checking
const allBalances = await wallet.getBalances()

// Cross-chain swaps through THORChain
import { ThorchainAMM } from '@xchainjs/xchain-thorchain-amm'
const thorchainAmm = new ThorchainAMM(new ThorchainQuery(), wallet)

const swapEstimate = await thorchainAmm.estimateSwap({
  fromAsset: assetFromString('BTC.BTC'),
  destinationAsset: assetFromString('ETH.ETH'),
  amount: cryptoAmount,
  destinationAddress: await wallet.getAddress('ETH')
})

// Cross-chain development made manageable`

  return (
    <section className="py-20 px-4 md:px-16 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
          Cross-Chain Development, Simplified
        </h2>
        <p className="text-xl text-primary-light max-w-3xl mx-auto">
          Building multi-chain applications means juggling dozens of different APIs, standards, and complexities.
          XChainJS provides unified patterns and tools to make cross-chain development manageable.
        </p>
      </div>

      {/* Tab switcher */}
      <div className="flex justify-center mb-12">
        <div className="glass p-2 rounded-lg flex">
          <button
            onClick={() => { setActiveTab('problem') }}
            className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
              activeTab === 'problem'
                ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg'
                : 'text-primary-light hover:text-primary'
            }`}
          >
            The Problem
          </button>
          <button
            onClick={() => { setActiveTab('solution') }}
            className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
              activeTab === 'solution'
                ? 'bg-gradient-to-r from-chain-blue-500 to-electric-green-500 text-white shadow-lg'
                : 'text-primary-light hover:text-primary'
            }`}
          >
            The Solution
          </button>
        </div>
      </div>

      {/* Content area */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Explanation */}
        <div className="space-y-6">
          {activeTab === 'problem'
            ? (
              <>
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-red-600">
                  Blockchain Fragmentation is Killing Innovation
                </h3>
                <div className="space-y-4 text-lg text-primary-light">
                  <div className="flex items-start space-x-3">
                    <span className="text-red-500 text-xl">❌</span>
                    <p><strong>Different APIs</strong> - Every blockchain has its own client library and methods</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-red-500 text-xl">❌</span>
                    <p><strong>Inconsistent Standards</strong> - Transaction formats, fee calculations, and error handling vary wildly</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-red-500 text-xl">❌</span>
                    <p><strong>Maintenance Nightmare</strong> - Updates to 20+ different libraries, each with breaking changes</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-red-500 text-xl">❌</span>
                    <p><strong>Developer Frustration</strong> - Months of integration work for each new chain</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded">
                <h4 className="font-semibold text-red-800 mb-2">The Result?</h4>
                <p className="text-red-700">
                  Most projects only support 2-3 blockchains, missing out on 90% of the market.
                  Development takes 10x longer than it should, and bugs are everywhere.
                </p>
              </div>
            </>
              )
            : (
              <>
              <div className="space-y-4">
                <h3 className="text-3xl font-bold gradient-text">
                  Unified Patterns, Real Solutions
                </h3>
                <div className="space-y-4 text-lg text-primary-light">
                  <div className="flex items-start space-x-3">
                    <span className="text-electric-green-500 text-xl">✅</span>
                    <p><strong>Wallet Abstraction</strong> - Manage multiple blockchain clients through a single interface</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-electric-green-500 text-xl">✅</span>
                    <p><strong>Cross-Chain Protocols</strong> - Built-in support for THORChain and MAYAChain swaps</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-electric-green-500 text-xl">✅</span>
                    <p><strong>Consistent Patterns</strong> - Standardized client interfaces and transaction handling</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-electric-green-500 text-xl">✅</span>
                    <p><strong>Production Ready</strong> - Used by ASGARDEX, Leap Wallet, and other real projects</p>
                  </div>
                </div>
              </div>

              <div className="bg-electric-green-50 border-l-4 border-electric-green-500 p-6 rounded">
                <h4 className="font-semibold text-electric-green-800 mb-2">The Result?</h4>
                <p className="text-electric-green-700">
                  Focus on building great user experiences instead of wrestling with blockchain complexity.
                  XChainJS handles the cross-chain infrastructure so you don&apos;t have to.
                </p>
              </div>

              {/* Real metrics */}
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">20+</div>
                  <div className="text-sm text-primary-lighter">Supported Chains</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">433</div>
                  <div className="text-sm text-primary-lighter">Weekly Downloads</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">6+</div>
                  <div className="text-sm text-primary-lighter">Production Apps</div>
                </div>
              </div>
            </>
              )}
        </div>

        {/* Right side - Code comparison */}
        <div className="relative">
          <div className="code-block overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-semibold text-dark-300">
                {activeTab === 'problem' ? 'Before: Traditional Approach' : 'After: XChainJS Approach'}
              </span>
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-electric-green-500 rounded-full"></div>
              </div>
            </div>

            <pre className="text-sm leading-relaxed overflow-x-auto">
              <code>
                {activeTab === 'problem' ? problemCode : solutionCode}
              </code>
            </pre>
          </div>

          {/* Lines of code comparison */}
          <div className="mt-4 flex justify-between items-center text-sm">
            <span className="text-primary-lighter">
              {activeTab === 'problem' ? '100+ lines' : '5 lines'}
            </span>
            <span className={`font-semibold ${
              activeTab === 'problem' ? 'text-red-500' : 'text-electric-green-500'
            }`}>
              {activeTab === 'problem' ? 'Complex & Error-prone' : 'Simple & Reliable'}
            </span>
          </div>
        </div>
      </div>

      {/* Call to action */}
      <div className="text-center mt-16">
        <a
          href="#playground"
          className="px-8 py-4 bg-gradient-to-r from-chain-blue-500 to-electric-green-500 text-white font-semibold rounded-lg shadow-glow-blue hover:shadow-glow-green transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
        >
          See It In Action
        </a>
      </div>
    </section>
  )
}
