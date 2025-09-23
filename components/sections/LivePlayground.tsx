'use client'

import { useState } from 'react'

interface Example {
  id: string
  title: string
  description: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  code: string
  output: string
}

export default function LivePlayground () {
  const [activeExample, setActiveExample] = useState<string>('balance')
  const [isRunning, setIsRunning] = useState(false)

  const examples: Example[] = [
    {
      id: 'balance',
      title: 'Get Balance',
      description: 'Check wallet balances across multiple chains using XChainJS Wallet',
      difficulty: 'Beginner',
      code: `import { Client as BtcClient, defaultBTCParams } from '@xchainjs/xchain-bitcoin'
import { Client as EthClient, defaultEthParams } from '@xchainjs/xchain-ethereum'
import { Network } from '@xchainjs/xchain-client'
import { Wallet } from '@xchainjs/xchain-wallet'
import { assetToString, baseToAsset } from '@xchainjs/xchain-util'

// Initialize wallet with multiple chain clients
const wallet = new Wallet({
  BTC: new BtcClient({ ...defaultBTCParams, network: Network.Mainnet }),
  ETH: new EthClient({ ...defaultEthParams, network: Network.Mainnet })
})

// Get all balances across all chains
const allBalances = await wallet.getBalances()

// Get balance for specific chain
const ethBalances = await wallet.getBalance('ETH')

// Format and display
console.table(
  ethBalances.map((balance) => ({
    Asset: assetToString(balance.asset),
    Amount: baseToAsset(balance.amount).amount().toString()
  }))
)`,
      output: `✅ Balance Results:
┌─────────┬─────────────────────┬─────────┐
│ (index) │        Asset        │ Amount  │
├─────────┼─────────────────────┼─────────┤
│    0    │     'ETH.ETH'       │ '1.25'  │
│    1    │ 'ETH.USDT-0xdAC1..' │ '100.50'│
└─────────┴─────────────────────┴─────────┘`
    },
    {
      id: 'swap',
      title: 'Cross-Chain Swap',
      description: 'Swap BTC for ETH through THORChain with real fee estimation',
      difficulty: 'Intermediate',
      code: `import { ThorchainAMM } from '@xchainjs/xchain-thorchain-amm'
import { ThorchainQuery, QuoteSwapParams } from '@xchainjs/xchain-thorchain-query'
import { CryptoAmount, assetAmount, assetFromString, assetToBase } from '@xchainjs/xchain-util'

// Initialize AMM with wallet
const thorchainAmm = new ThorchainAMM(new ThorchainQuery(), wallet)

// Define swap parameters
const swapParams: QuoteSwapParams = {
  fromAsset: assetFromString('BTC.BTC'),
  amount: new CryptoAmount(assetToBase(assetAmount('0.1', 8)), assetFromString('BTC.BTC')),
  destinationAsset: assetFromString('ETH.ETH'),
  destinationAddress: await wallet.getAddress('ETH'),
  toleranceBps: 1000, // 10% slippage tolerance
}

// Get swap estimate
const estimate = await thorchainAmm.estimateSwap(swapParams)
console.log({
  expectedOutput: estimate.txEstimate.netOutput.formatedAssetString(),
  totalFees: estimate.txEstimate.totalFees.affiliateFee.formatedAssetString(),
  slippage: \`\${estimate.txEstimate.slipBasisPoints.toFixed()}%\`,
  canSwap: estimate.txEstimate.canSwap
})

// Execute swap if estimate looks good
if (estimate.txEstimate.canSwap) {
  const result = await thorchainAmm.doSwap(swapParams)
  console.log(\`Swap initiated: \${result.hash}\`)
}`,
      output: `✅ Swap Estimate: {
  expectedOutput: '2.45 ETH',
  totalFees: '0.01 ETH',
  slippage: '250', // basis points
  canSwap: true
}

✅ Swap initiated: 0xabc123...def456789`
    },
    {
      id: 'liquidity',
      title: 'Add Liquidity',
      description: 'Add liquidity to THORChain pools with dual-asset handling',
      difficulty: 'Intermediate',
      code: `import { ThorchainAMM } from '@xchainjs/xchain-thorchain-amm'
import { AddliquidityPosition, ThorchainQuery } from '@xchainjs/xchain-thorchain-query'
import {
  AssetCryptoAmount,
  CryptoAmount,
  assetAmount,
  assetFromStringEx,
  assetToBase,
  isAssetRuneNative
} from '@xchainjs/xchain-util'

const thorchainAmm = new ThorchainAMM(new ThorchainQuery(), wallet)

// Define liquidity position
const runeAmount = new AssetCryptoAmount(
  assetToBase(assetAmount('100')), // 100 RUNE
  assetFromStringEx('THOR.RUNE')
)

const assetAmount = new CryptoAmount(
  assetToBase(assetAmount('0.05', 8)), // 0.05 BTC
  assetFromStringEx('BTC.BTC')
)

// Validate RUNE asset
if (!isAssetRuneNative(runeAmount.asset)) {
  throw Error('THOR.RUNE must be provided for liquidity')
}

const addLpParams: AddliquidityPosition = {
  asset: assetAmount,
  rune: runeAmount,
}

// Add liquidity
const lpResult = await thorchainAmm.addLiquidityPosition(addLpParams)
console.log({
  txHash: lpResult.hash,
  url: lpResult.url
})`,
      output: `✅ Liquidity Added: {
  txHash: '0x789abc...123def456',
  url: 'https://viewblock.io/thorchain/tx/0x789abc...'
}`
    },
    {
      id: 'aggregation',
      title: 'XChainJS Aggregator',
      description: 'Compare routes across THORChain, MAYAChain & ChainFlip protocols',
      difficulty: 'Advanced',
      code: `import { Aggregator, QuoteSwap } from '@xchainjs/xchain-aggregator'
import { CryptoAmount, assetAmount, assetToBase } from '@xchainjs/xchain-util'
import { AssetBTC } from '@xchainjs/xchain-bitcoin'
import { AssetETH } from '@xchainjs/xchain-ethereum'

// Initialize aggregator with multi-chain wallet
const aggregator = new Aggregator({ wallet })

// Compare all available protocols
const estimates = await aggregator.estimateSwap({
  fromAsset: AssetBTC,
  destinationAsset: AssetETH,
  fromAddress: await wallet.getAddress('BTC'),
  destinationAddress: await wallet.getAddress('ETH'),
  amount: new CryptoAmount(assetToBase(assetAmount('0.1', 8)), AssetBTC),
})

// Find best route by expected amount
const bestRoute = estimates.reduce((best, current) =>
  current.expectedAmount.gt(best.expectedAmount) ? current : best
)

console.log({
  protocol: bestRoute.protocol, // 'THORCHAIN' | 'MAYACHAIN' | 'CHAINFLIP'
  expectedAmount: bestRoute.expectedAmount.formatedAssetString(),
  totalFees: bestRoute.fees.affiliateFee.formatedAssetString(),
  estimatedTime: \`\${bestRoute.totalSwapSeconds}s\`,
  canSwap: bestRoute.canSwap
})

// Execute using best protocol
const swapResult = await aggregator.doSwap({
  protocol: bestRoute.protocol,
  fromAsset: AssetBTC,
  destinationAsset: AssetETH,
  amount: new CryptoAmount(assetToBase(assetAmount('0.1', 8)), AssetBTC),
  destinationAddress: await wallet.getAddress('ETH'),
})

console.log(\`Best route executed: \${swapResult}\`)`,
      output: `✅ Best Route Analysis: {
  protocol: 'THORCHAIN',
  expectedAmount: '2.45 ETH',
  totalFees: '0.01 ETH',
  estimatedTime: '180s',
  canSwap: true
}

✅ Best route executed: 0xfed...789abc123`
    },
    {
      id: 'wallet',
      title: 'Multi-Chain Wallet',
      description: 'Unified interface for managing multiple blockchain clients',
      difficulty: 'Beginner',
      code: `import { Wallet } from '@xchainjs/xchain-wallet'
import { Client as BtcClient, defaultBTCParams } from '@xchainjs/xchain-bitcoin'
import { Client as EthClient, defaultEthParams } from '@xchainjs/xchain-ethereum'
import { Client as ThorClient } from '@xchainjs/xchain-thorchain'
import { Network } from '@xchainjs/xchain-client'
import { assetToString, baseToAsset } from '@xchainjs/xchain-util'

// Initialize multi-chain wallet
const wallet = new Wallet({
  BTC: new BtcClient({ ...defaultBTCParams, phrase: seedPhrase, network: Network.Mainnet }),
  ETH: new EthClient({ ...defaultEthParams, phrase: seedPhrase, network: Network.Mainnet }),
  THOR: new ThorClient({ phrase: seedPhrase, network: Network.Mainnet })
})

// Get addresses across all chains
const allAddresses = await wallet.getAddresses()
console.log('Wallet addresses:', allAddresses)

// Get all balances across all chains
const allBalances = await wallet.getBalances()
Object.keys(allBalances).forEach((chain) => {
  const response = allBalances[chain]
  if (response.status === 'fulfilled') {
    console.log(\`\${chain} balances:\`)
    console.table(
      response.balances.map((balance) => ({
        Asset: assetToString(balance.asset),
        Amount: baseToAsset(balance.amount).amount().toString()
      }))
    )
  } else {
    console.log(\`Failed to get \${chain} balances: \${response.reason}\`)
  }
})`,
      output: `✅ Wallet addresses: {
  BTC: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
  ETH: '0x742d35Cc6634C0532925a3b8D4083fb4dBe20db8',
  THOR: 'thor1g6pnmnyeg48yc3lg796plt0uw50qpp7humfggz'
}

✅ BTC balances:
┌─────────┬───────────┬─────────┐
│ (index) │   Asset   │ Amount  │
├─────────┼───────────┼─────────┤
│    0    │ 'BTC.BTC' │ '0.054' │
└─────────┴───────────┴─────────┘

✅ ETH balances:
┌─────────┬─────────────────────┬─────────┐
│ (index) │        Asset        │ Amount  │
├─────────┼─────────────────────┼─────────┤
│    0    │     'ETH.ETH'       │ '1.25'  │
│    1    │ 'ETH.USDT-0xdAC1..' │ '500.0' │
└─────────┴─────────────────────┴─────────┘`
    }
  ]

  const currentExample = examples.find(ex => ex.id === activeExample) || examples[0]

  const simulateRun = () => {
    setIsRunning(true)
    setTimeout(() => { setIsRunning(false) }, 2000)
  }

  return (
    <section id="playground" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-4 sm:mb-6">
          Try XChainJS in 30 Seconds
        </h2>
        <p className="text-lg sm:text-xl text-primary-light max-w-3xl mx-auto px-4">
          Interactive code playground with real examples. No setup required -
          just click and see XChainJS in action.
        </p>
      </div>

      {/* Example selector */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-8 sm:mb-12">
        {examples.map((example) => (
          <button
            key={example.id}
            onClick={() => { setActiveExample(example.id) }}
            className={`p-4 sm:p-6 rounded-lg border-2 transition-all duration-300 text-left touch-manipulation min-h-[120px] w-full ${
              activeExample === example.id
                ? 'border-chain-blue-500 bg-chain-blue-50 shadow-glow-blue'
                : 'border-primary-light glass hover:border-chain-blue-300 hover:shadow-md'
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
              <h3 className="font-semibold text-primary text-sm sm:text-base">{example.title}</h3>
              <span className={`px-2 py-1 text-xs rounded-full font-medium self-start sm:self-auto ${
                example.difficulty === 'Beginner'
? 'bg-electric-green-100 text-electric-green-800'
                : example.difficulty === 'Intermediate'
? 'bg-yellow-100 text-yellow-800'
                : 'bg-red-100 text-red-800'
              }`}>
                {example.difficulty}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-primary-lighter leading-relaxed">{example.description}</p>
          </button>
        ))}
      </div>

      {/* Code playground */}
      <div className="flex flex-col xl:grid xl:grid-cols-2 gap-6 lg:gap-8">
        {/* Code editor */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h3 className="text-lg sm:text-xl font-semibold text-primary">Code Editor</h3>
            <button
              onClick={simulateRun}
              disabled={isRunning}
              className={`w-full sm:w-auto px-4 sm:px-6 py-3 sm:py-2 rounded-lg font-semibold transition-all duration-300 touch-manipulation min-h-[44px] flex items-center justify-center text-sm sm:text-base ${
                isRunning
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-chain-blue-500 to-electric-green-500 hover:shadow-glow-blue text-white'
              }`}
            >
              {isRunning
                ? (
                <div className="flex items-center">
                  <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                  <span className="text-sm sm:text-base">Running...</span>
                </div>
                  )
                : (
                    <span className="text-sm sm:text-base">▶ Run Code</span>
                  )}
            </button>
          </div>

          <div className="code-block">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-semibold text-dark-300">example.js</span>
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-electric-green-500 rounded-full"></div>
              </div>
            </div>

            <pre className="text-sm leading-relaxed overflow-x-auto">
              <code>
                {currentExample.code}
              </code>
            </pre>
          </div>
        </div>

        {/* Output panel */}
        <div className="space-y-4">
          <h3 className="text-lg sm:text-xl font-semibold text-primary">Output</h3>

          <div className="bg-dark-900 text-electric-green-400 p-4 sm:p-6 rounded-lg font-mono text-xs sm:text-sm min-h-64 sm:min-h-96 overflow-x-auto">
            <div className="flex items-center mb-4">
              <span className="text-dark-400">$</span>
              <span className="ml-2 text-dark-300">node example.js</span>
            </div>

            {isRunning
              ? (
              <div className="space-y-2">
                <div className="text-yellow-400">⚡ Initializing XChainJS client...</div>
                <div className="text-chain-blue-400">🔗 Connecting to blockchain networks...</div>
                <div className="text-electric-green-400 animate-pulse">🔄 Executing transaction...</div>
              </div>
                )
              : (
              <pre className="whitespace-pre-wrap">{currentExample.output}</pre>
                )}
          </div>
        </div>
      </div>

      {/* Progress tracker */}
      <div className="mt-16 glass p-8 rounded-xl">
        <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
          From Idea to Production in 3 Steps
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-chain-blue-500 to-electric-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
              1
            </div>
            <h4 className="text-lg font-semibold text-primary mb-2">Try Examples</h4>
            <p className="text-primary-lighter">Experiment with code samples in our interactive playground</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-chain-blue-500 to-electric-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
              2
            </div>
            <h4 className="text-lg font-semibold text-primary mb-2">Install & Build</h4>
            <p className="text-primary-lighter">Add XChainJS to your project and start building</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-chain-blue-500 to-electric-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
              3
            </div>
            <h4 className="text-lg font-semibold text-primary mb-2">Ship to Users</h4>
            <p className="text-primary-lighter">Deploy your cross-chain application with confidence</p>
          </div>
        </div>
      </div>

      {/* Call to action */}
      <div className="text-center mt-8 sm:mt-12">
        <div className="space-y-4 sm:space-y-6">
          <h3 className="text-xl sm:text-2xl font-semibold text-primary">Ready to build the future?</h3>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 px-4">
            <a
              href="https://xchainjs.gitbook.io/xchainjs"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-chain-blue-500 to-electric-green-500 text-white font-semibold rounded-lg shadow-glow-blue hover:shadow-glow-green transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 text-center"
            >
              Get Started Now
            </a>
            <a
              href="https://discord.com/invite/7RRmc35UEG"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-primary-light text-primary-light hover:border-primary hover:text-primary font-semibold rounded-lg transition-all duration-300 text-center"
            >
              Join Discord Community
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
