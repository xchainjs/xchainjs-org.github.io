import {
  HeroSection,
  ProblemSolution,
  BlockchainUniverse,
  LivePlayground,
  DeveloperCommunity,
  ButtonLink,
  Icon,
  IconClass
} from '@components'
import Crisp from '../../components/Crisp'

export default function Home () {
  return (
    <main className="min-h-screen">
      {/* Hero Section - "Build Anywhere. Connect Everything." */}
      <HeroSection />

      {/* Problem/Solution Story - The Universal Bridge Builder */}
      <ProblemSolution />

      {/* Interactive Blockchain Universe Map */}
      <BlockchainUniverse />

      {/* Live Code Playground - Try in 30 Seconds */}
      <LivePlayground />

      {/* Developer Community */}
      <DeveloperCommunity />

      {/* Developer Experience & Community */}
      <section className="py-20 px-4 md:px-16 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Developer-focused content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Built for Developers, by Developers
            </h2>
            <p className="text-xl text-primary-light mb-8 leading-relaxed">
              XChainJS was born from the frustration of building cross-chain applications.
              We&apos;ve abstracted away the complexity so you can focus on what matters -
              building amazing user experiences.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-electric-green-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  ✓
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">TypeScript Native</h3>
                  <p className="text-primary-light">Full type safety and excellent IDE support out of the box</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-electric-green-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  ✓
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Comprehensive Testing</h3>
                  <p className="text-primary-light">100% test coverage ensures reliability in production</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-electric-green-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  ✓
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Active Community</h3>
                  <p className="text-primary-light">Join 10K+ developers building the future of DeFi</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <ButtonLink
                url="https://xchainjs.gitbook.io/xchainjs"
                text="View Documentation"
              />
              <ButtonLink
                url="https://discord.com/invite/7RRmc35UEG"
                text="Join Discord"
                style="secundary"
              />
            </div>
          </div>

          {/* Community stats and metrics */}
          <div className="space-y-8">
            <div className="glass p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-primary mb-6">Developer Metrics</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold gradient-text">433</div>
                  <div className="text-primary-lighter">Weekly Downloads</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">128</div>
                  <div className="text-primary-lighter">GitHub Stars</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">46</div>
                  <div className="text-primary-lighter">Dependents</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">20+</div>
                  <div className="text-primary-lighter">Supported Chains</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-dark-800 to-dark-900 p-8 rounded-xl text-white">
              <h3 className="text-xl font-bold mb-4">Latest Release</h3>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-electric-green-400">v2.1.0</span>
                <span className="text-dark-300">Released 2 days ago</span>
              </div>
              <p className="text-dark-200 mb-4">
                • Added Radix chain support<br/>
                • Improved error handling<br/>
                • 15% performance boost
              </p>
              <button className="px-4 py-2 bg-chain-blue-500 text-white rounded-lg hover:bg-chain-blue-600 transition-colors">
                View Changelog
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 md:px-16 lg:px-8 bg-gradient-to-br from-dark-900 via-dark-800 to-chain-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Build the
            <span className="gradient-text"> Multi-Chain Future</span>?
          </h2>
          <p className="text-xl text-dark-300 mb-12 max-w-2xl mx-auto">
            Join thousands of developers already building with XChainJS.
            From simple swaps to complex DeFi protocols - we&apos;ve got you covered.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8 mb-12">
            <a
              href="https://xchainjs.gitbook.io/xchainjs"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-6 bg-gradient-to-r from-chain-blue-500 to-electric-green-500 text-white font-bold text-lg rounded-lg shadow-glow-blue hover:shadow-glow-green transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
              Start Building Now
            </a>
            <a
              href="https://discord.com/invite/7RRmc35UEG"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-6 border-2 border-dark-400 text-dark-200 hover:border-white hover:text-white font-bold text-lg rounded-lg transition-all duration-300"
            >
              Join Discord
            </a>
          </div>

          <div className="text-center">
            <p className="text-dark-400 mb-4">Powering real cross-chain projects</p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="flex items-center space-x-2 opacity-70">
                <Icon iconClass={IconClass.ASGARDEX} className="w-6 h-6 text-dark-300" />
                <span className="text-dark-300 text-sm">ASGARDEX</span>
              </div>
              <div className="flex items-center space-x-2 opacity-70">
                <Icon iconClass={IconClass.LEAP_WALLET} className="w-6 h-6 text-dark-300" />
                <span className="text-dark-300 text-sm">Leap Wallet</span>
              </div>
              <div className="flex items-center space-x-2 opacity-70">
                <Icon iconClass={IconClass.SWAPPER} className="w-6 h-6 text-dark-300" />
                <span className="text-dark-300 text-sm">Swapper</span>
              </div>
              <div className="flex items-center space-x-2 opacity-70">
                <Icon iconClass={IconClass.LENDS} className="w-6 h-6 text-dark-300" />
                <span className="text-dark-300 text-sm">Lends</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Crisp />
    </main>
  )
}
