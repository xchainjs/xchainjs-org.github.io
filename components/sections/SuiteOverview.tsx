interface SuiteModule {
  name: string
  tagline: string
  color: string
  badge: string
  description: string
  packages: string[]
}

const suiteModules: SuiteModule[] = [
  {
    name: 'Chain Clients',
    tagline: 'One unified API across 21 blockchains',
    color: '#0d87ff',
    badge: 'CC',
    description: 'Send, receive, and query balances on every supported chain through a single consistent interface.',
    packages: ['xchain-bitcoin', 'xchain-ethereum', 'xchain-cosmos', 'xchain-thorchain', '+17 more']
  },
  {
    name: 'Protocol Layers',
    tagline: 'THORChain & MAYAChain swaps + queries',
    color: '#33cc77',
    badge: 'PL',
    description: 'High-level helpers to estimate, build, and execute native cross-chain swaps and liquidity actions.',
    packages: ['xchain-thorchain-amm', 'xchain-thorchain-query', 'xchain-mayachain-amm', 'xchain-mayachain-query']
  },
  {
    name: 'Aggregator',
    tagline: 'Best route across every protocol',
    color: '#8b5cf6',
    badge: 'AG',
    description: 'Compare and route swaps across THORChain, MAYAChain, and Chainflip to find the optimal path.',
    packages: ['xchain-aggregator']
  },
  {
    name: 'Wallet',
    tagline: 'Multi-chain wallet abstraction',
    color: '#f59e0b',
    badge: 'WL',
    description: 'Manage keys, addresses, and signing across all supported chains from one wallet instance.',
    packages: ['xchain-wallet']
  },
  {
    name: 'Core & Providers',
    tagline: 'The shared foundation',
    color: '#ef4444',
    badge: 'CP',
    description: 'Base client interfaces, data providers, and crypto/util primitives every package builds on.',
    packages: ['xchain-client', 'xchain-util', 'xchain-crypto', 'xchain-evm', 'xchain-utxo']
  },
  {
    name: 'Network APIs',
    tagline: 'Typed access to chain data',
    color: '#06b6d4',
    badge: 'NA',
    description: 'Strongly-typed clients for THORChain & MAYAChain network endpoints — Midgard, THORNode and more.',
    packages: ['xchain-midgard', 'xchain-thornode', 'xchain-mayanode']
  }
]

export default function SuiteOverview () {
  return (
    <section id="suite" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-4 sm:mb-6">
          The XChainJS Suite
        </h2>
        <p className="text-lg sm:text-xl text-primary-light max-w-3xl mx-auto px-4">
          A modular toolkit of <span className="font-semibold text-primary">40+ packages</span> that
          layer together — from low-level chain clients to a cross-protocol swap aggregator. Pick only
          what you need.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {suiteModules.map((module) => (
          <div
            key={module.name}
            className="interactive-card glass p-6 rounded-xl group relative overflow-hidden flex flex-col"
          >
            {/* Badge + title */}
            <div className="flex items-center gap-4 mb-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-sm network-node shrink-0"
                style={{ backgroundColor: module.color }}
              >
                {module.badge}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary leading-tight">
                  {module.name}
                </h3>
                <p className="text-xs sm:text-sm text-electric-green-600 font-medium">
                  {module.tagline}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-primary-lighter mb-4 flex-grow">
              {module.description}
            </p>

            {/* Key packages */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {module.packages.map((pkg) => (
                <span
                  key={pkg}
                  className="font-mono text-[11px] px-2 py-1 rounded-md bg-primary-light/10 text-primary-light"
                >
                  {pkg}
                </span>
              ))}
            </div>

            {/* Hover accent */}
            <div
              className="absolute inset-x-0 bottom-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ backgroundColor: module.color }}
            />
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-12 sm:mt-16">
        <a
          href="https://www.npmjs.com/org/xchainjs"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex px-6 py-3 bg-gradient-to-r from-chain-blue-500 to-electric-green-500 text-white font-semibold rounded-lg shadow-glow-blue hover:shadow-glow-green transition-all duration-300"
        >
          Browse all packages on npm
        </a>
      </div>
    </section>
  )
}
