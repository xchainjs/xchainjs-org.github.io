'use client'

import { Icon, IconClass } from '@components'

export default function DeveloperCommunity () {
  const integratedProjects = [
    { name: 'ASGARDEX', icon: IconClass.ASGARDEX, description: 'Cross-chain DEX interface' },
    { name: 'Leap Wallet', icon: IconClass.LEAP_WALLET, description: 'Multi-chain wallet' },
    { name: 'Swapper', icon: IconClass.SWAPPER, description: 'Cross-chain aggregator' },
    { name: 'Lends', icon: IconClass.LENDS, description: 'Lending protocol' },
    { name: 'CacaoSwap', icon: IconClass.CACAOSWAP, description: 'MAYAChain DEX' },
    { name: 'LeoDex', icon: IconClass.LEODEX, description: 'Trading platform' }
  ]

  return (
    <section id="success-stories" className="py-20 px-4 md:px-16 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
          Powering Real Projects
        </h2>
        <p className="text-xl text-primary-light max-w-3xl mx-auto">
          These projects have already integrated XChainJS to build cross-chain applications. 
          Join the growing ecosystem of developers building the multi-chain future.
        </p>
      </div>

      {/* Integrated Projects Showcase */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold text-center text-primary mb-8">Projects Using XChainJS</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {integratedProjects.map((project) => (
            <div key={project.name} className="glass p-6 rounded-xl text-center hover:shadow-card-hover transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 text-primary">
                <Icon iconClass={project.icon} className="w-full h-full" />
              </div>
              <h4 className="font-semibold text-primary text-sm mb-1">{project.name}</h4>
              <p className="text-xs text-primary-lighter">{project.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Developer-focused features */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="glass p-8 rounded-xl text-center">
          <div className="text-4xl mb-4">🔧</div>
          <h3 className="text-xl font-semibold text-primary mb-4">Developer Tools</h3>
          <p className="text-primary-light">
            Comprehensive TypeScript SDK with full type safety and excellent IDE support.
          </p>
        </div>
        
        <div className="glass p-8 rounded-xl text-center">
          <div className="text-4xl mb-4">📚</div>
          <h3 className="text-xl font-semibold text-primary mb-4">Documentation</h3>
          <p className="text-primary-light">
            Detailed guides, examples, and API documentation to get you started quickly.
          </p>
        </div>
        
        <div className="glass p-8 rounded-xl text-center">
          <div className="text-4xl mb-4">👥</div>
          <h3 className="text-xl font-semibold text-primary mb-4">Community</h3>
          <p className="text-primary-light">
            Active Discord and Telegram communities for support and collaboration.
          </p>
        </div>
      </div>

      {/* Real community stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        <div className="text-center">
          <div className="text-4xl font-bold gradient-text mb-2">128</div>
          <div className="text-primary-lighter">GitHub Stars</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold gradient-text mb-2">108</div>
          <div className="text-primary-lighter">GitHub Forks</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold gradient-text mb-2">46</div>
          <div className="text-primary-lighter">NPM Dependents</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold gradient-text mb-2">433</div>
          <div className="text-primary-lighter">Weekly Downloads</div>
        </div>
      </div>

      {/* Call to action for developers */}
      <div className="glass p-8 rounded-xl text-center">
        <h3 className="text-2xl font-bold text-primary mb-4">Ready to Build?</h3>
        <p className="text-lg text-primary-light mb-6 max-w-2xl mx-auto">
          Start building cross-chain applications with XChainJS. 
          From simple balance checks to complex DeFi protocols.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href="https://xchainjs.gitbook.io/xchainjs"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gradient-to-r from-chain-blue-500 to-electric-green-500 text-white font-semibold rounded-lg shadow-glow-blue hover:shadow-glow-green transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
          >
            Get Started
          </a>
          <a
            href="https://discord.com/invite/7RRmc35UEG"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-primary-light text-primary-light hover:border-primary hover:text-primary font-semibold rounded-lg transition-all duration-300"
          >
            Join Community
          </a>
        </div>
      </div>
    </section>
  )
}