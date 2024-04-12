import { Card, IntegrationCard, Subtitle, ButtonLink, TextLink, IconClass } from '@components'

export default function Home () {
  return (
    <main className='flex flex-col'>
      <section className='md:mb-20 mb-12 px-4 md:px-16 lg:px-64'>
        <div className='flex flex-col'>
          <header className='flex flex-row justify-center'>
            <Subtitle text='Hey there crypto explorer!' size='lg'/>
          </header>
          <p className='text-center mt-3 md:mt-6 text-sm md:text-lg'>Say hello to XchainJS! We’ve got the toolkit that makes your cross-chain adventures feel like a walk in the park. Open-sourced, backed by the might of THORChain & MAYAChain, and crafted with a sprinkle of love just for you.</p>
        </div>
      </section>
      <section className='md:mb-28 mb-14 px-4 md:px-16 lg:px-20'>
        <div className='flex flex-col'>
          <header className='flex flex-row justify-center'>
            <Subtitle text='Why XChainJS' iconClass={IconClass.JELLYFISH}/>
          </header>
          <div className='mt-3 md:mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-6'>
            <Card title='Rock-Solid security' iconClass={IconClass.LOCK}>
              <p>Let&apos;s keep things straight; we lock down your private keys like Fort Knox. Sleep tight, no worries here!</p>
            </Card>
            <Card title='Beyond the horizon' iconClass={IconClass.SUN}>
              <p>It&apos;s not just about THORChain or MAYAChain. Dive into our expansive arsenal of wallet tools waiting for your exploration.</p>
            </Card>
            <Card title='No Geek Speak Needed' iconClass={IconClass.FLASK}>
              <p>Our comprehensive suite of wallet tools is designed for integration and ease of use.</p>
            </Card>
            <Card title='The Bigger, The Better' iconClass={IconClass.HEART}>
              <p>Join us in our vast universe of services, projects, and collaborations.</p>
            </Card>
          </div>
        </div>
      </section>
      <section className='md:mb-28 mb-14 px-8 md:px-16 lg:px-20'>
        <div className='flex flex-col'>
          <header className='flex flex-row justify-center'>
            <Subtitle text='Featured integrations' iconClass={IconClass.INVADER1}/>
          </header>
          <div className='mt-6 md:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 lg:gap-x-20 gap-y-10 lg:gap-y-12'>
              <IntegrationCard key='lends' iconClass={IconClass.LENDS} name='Lends' url='https://www.lends.so/' description="The fearless trailblazers in the world of loans. From bold ventures into lending territories to whipping up stellar features, they'are turning heads."/>
              <IntegrationCard key='asgardex' iconClass={IconClass.ASGARDEX}name='Asgardex' url='https://github.com/asgardex/asgardex-desktop' description='The guardians of the desktop space. Their dedication to open-source and resisting censorship? Nothing short of legendary.'/>
              <IntegrationCard key='swapper' iconClass={IconClass.SWAPPER} name='Swapper' url='https://swapper.market/' description='The heroes with dreams bigger than the cosmos. A simple UI and a vision to make your crypto journey seamless. Expect big things!'/>
              <IntegrationCard key='leapwallet' iconClass={IconClass.LEAP_WALLET} name='Leap Wallet' url='https://www.leapwallet.io/' description='Super Wallet for the Internet of Blockchains. Your gateway to 60+ Cosmos chains!'/>
              <IntegrationCard key='CacaoSwap' iconClass={IconClass.CACAOSWAP} name='Cacao Swap' url='https://cacaoswap.app/' description='CacaoSwap app is the supercharged front end, pairing great UX/UI with truly decentralised swaps. Backed and powered by MAYAChain and THORChain and built for you'/>
          </div>
        </div>
      </section>
      <section className='md:mb-28 mb-14 px-4 md:px-16 lg:px-36'>
        <div className='flex flex-col'>
          <header className='flex flex-row justify-center'>
            <Subtitle text='XChainJS features' iconClass={IconClass.INVADER2}/>
          </header>
          <div className='mt-3 md:mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-20 gap-y-6 lg:gap-y-12'>
            <Card title='Supported Chains'>
              <div className='flex flex-col'>
                <div>
                  <span className='inline-block'><TextLink text='AVAX' url='https://www.avax.network/' underlined/></span>
                  <p className='inline'>, </p>
                  <span className='inline-block'><TextLink text='BSC' url='https://docs.bnbchain.org/docs/learn/intro' underlined/></span>
                  <p className='inline'>, </p>
                  <span className='inline-block'><TextLink text='BNB CHAIN' url='https://docs.bnbchain.org/docs/learn/beaconIntro' underlined/></span>
                  <p className='inline'>, </p>
                  <span className='inline-block'><TextLink text='BITCOIN' url='https://bitcoin.org/en/' underlined/></span>
                  <p className='inline'>, </p>
                  <span className='inline-block'><TextLink text='BITCOIN CASH' url='https://bitcoincash.org/en/' underlined/></span>
                  <p className='inline'>, </p>
                  <span className='inline-block'><TextLink text='COSMOS' url='https://cosmos.network/' underlined/></span>
                  <p className='inline'>, </p>
                  <span className='inline-block'><TextLink text='DASH' url='https://www.dash.org/' underlined/></span>
                  <p className='inline'>, </p>
                  <span className='inline-block'><TextLink text='DOGE' url='https://dogecoin.com/' underlined/></span>
                  <p className='inline'>, </p>
                  <span className='inline-block'><TextLink text='ETHEREUM' url='https://ethereum.org/en/' underlined/></span>
                  <p className='inline'>, </p>
                  <span className='inline-block'><TextLink text='ARBITRUM' url='https://arbitrum.io/' underlined/></span>
                  <p className='inline'>, </p>
                  <span className='inline-block'><TextLink text='KUJIRA' url='https://kujira.network/' underlined/></span>
                  <p className='inline'>, </p>
                  <span className='inline-block'><TextLink text='LITECOIN' url='https://litecoin.org/' underlined/></span>
                  <p className='inline'>, </p>
                  <span className='inline-block'><TextLink text='MAYACHAIN' url='https://www.mayaprotocol.com/' underlined/></span>
                  <p className='inline'> and </p>
                  <span className='inline-block'><TextLink text='THORCHAIN' url='https://thorchain.org/' underlined/></span>
                </div>
                <ul className='mt-6'>
                  <li className='flex flex-wrap'><TextLink text='○ Signature and transmission of transactions' url='https://xchainjs.gitbook.io/xchainjs/clients/xchain-cosmos-sdk/xchain-thorchain/how-to-use#transfer-rune-using-thor-client'/></li>
                  <li className='flex flex-wrap'><TextLink text='○ Balance inquiries' url='https://xchainjs.gitbook.io/xchainjs/clients/xchain-binance/how-to-use#connect-wallet-to-new-binance-chain-client'/></li>
                  <li className='flex flex-wrap'><TextLink text='○ Transaction history and details' url='https://xchainjs.gitbook.io/xchainjs/clients/xchain-evm/xchain-avax/how-to-use#get-transaction-data--history'/></li>
                  <li className='flex flex-wrap'><TextLink text='○ Fee estimates' url='https://xchainjs.gitbook.io/xchainjs/clients/xchain-evm/xchain-avax/how-to-use#get-fees'/></li>
                </ul>
              </div>
            </Card>
            <Card title='Protocols'>
              <div className='flex flex-col'>
                <p>Featuring THORChain now, with Maya on the horizon. Get ready for:</p>
                <ul className='mt-6'>
                  <li className='flex flex-wrap'><TextLink text='○ Multi-chain swaps, including BTC!' url='https://xchainjs.gitbook.io/xchainjs/protocols/thorchain/xchain-thorchain-amm/make-swap-using-thorchain'/></li>
                  <li className='flex flex-wrap'><TextLink text='○ Native interest rates' url='https://xchainjs.gitbook.io/xchainjs/protocols/thorchain/xchain-thorchain-amm/handle-liquidity-and-savers'/></li>
                  <li className='flex flex-wrap'><TextLink text='○ Open loans without liquidation' url='https://xchainjs.gitbook.io/xchainjs/protocols/thorchain/xchain-thorchain-amm/open-and-close-loans'/></li>
                  <li className='flex flex-wrap'><TextLink text='○ Custom nameservice (THORname)' url='https://docs.xchainjs.org/xchain-docs/xchain-thorchain-query/docs/classes/ThorchainQuery.html#getThornameDetails'/></li>
                </ul>
              </div>
            </Card>
            <Card title='Node Providers'>
              <div>
                <p className='inline'>Rolling with the best - </p>
                <span className='inline-block'> <TextLink text='Blockcypher' url='https://www.blockcypher.com/' underlined/></span>
                <p className='inline'>, </p>
                <span className='inline-block'><TextLink text='Hashcoin' url='https://www.haskoin.com/' underlined/></span>
                <p className='inline'>, </p>
                <span className='inline-block'><TextLink text='Bitgo' url='https://www.bitgo.com/' underlined/></span>
                <p className='inline'>, </p>
                <span className='inline-block'><TextLink text='SoChain' url='https://sochain.com/' underlined/></span>
                <p className='inline'>, </p>
                <span className='inline-block'><TextLink text='Covalent' url='https://www.covalent.xyz/' underlined/></span>
                <p className='inline'>, </p>
                <span className='inline-block'><TextLink text='Infura' url='https://www.infura.io/' underlined/></span>
                <p className='inline'>, </p>
                <span className='inline-block'><TextLink text='Alchemy' url='https://www.alchemy.com/' underlined/></span>
                <p className='inline'>, </p>
                <span className='inline-block'><TextLink text='Ark' url='https://ark.io/' underlined/></span>
                <p className='inline'>, </p>
                <span className='inline-block'><TextLink text='Routescan' url='https://routescan.io/documentation' underlined/></span>
                <p className='inline'> and more!</p>
              </div>
            </Card>
            <Card title='Block Explorers'>
              <div>
                <p className='inline'>Stay updated with </p>
                <span className='inline-block'> <TextLink text='Runescan' url='https://runescan.io/' underlined/></span>
                <p className='inline'>, </p>
                <span className='inline-block'> <TextLink text='Mayascan' url='https://mayascan.org/' underlined/></span>
                <p className='inline'>, </p>
                <span className='inline-block'> <TextLink text='BlockCypher' url='https://www.blockcypher.com' underlined/></span>
                <p className='inline'>, </p>
                <span className='inline-block'> <TextLink text='Etherscan' url='https://etherscan.io/' underlined/></span>
                <p className='inline'>, </p>
                <span className='inline-block'><TextLink text='Snowtrace' url='https://snowtrace.dev/' underlined/></span>
                <p className='inline'>, </p>
                <span className='inline-block'><TextLink text='Blockchain.com' url='https://www.blockchain.com/en/' underlined/></span>
                <p className='inline'>, </p>
                <span className='inline-block'><TextLink text='Bscscan' url='https://bscscan.com/' underlined/></span>
                <p className='inline'>, </p>
                <span className='inline-block'><TextLink text='Arbiscan' url='https://arbiscan.io/' underlined/></span>
                <p className='inline'> and the rest of the crew.</p>
              </div>
            </Card>
          </div>
        </div>
      </section>
      <section className='md:mb-20 mb-12 px-4 md:px-16 lg:px-64 flex flex-row justify-center'>
        <div className='flex flex-col'>
          <header className='flex flex-row justify-center'>
            <Subtitle text='Roadmap' />
          </header>
          <div className='mt-3 md:mt-6'>
            <ul className='list-disc list-inside'>
              <li className="flex items-center">
                <span className="text-green-500 text-xl">&#10003;</span>
                <strong className="ml-2">Xchainjs-aggregator: </strong> Enhancements to provide more robust cross-chain functionality and improved performance.
              </li>
              <li>
                <strong>Ledger Support:</strong> Integration for secure hardware wallet transactions, enhancing user security.
              </li>
              <li>
                <strong>KeepKey Support:</strong> Integration for secure hardware wallet transactions, enhancing user security.
              </li>
              <li>
                <strong>Trezor Support:</strong> Implementing support for Trezor hardware wallets to diversify secure transaction options.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className='md:mb-20 mb-14 px-4 md:px-16 lg:px-64'>
        <div className='flex flex-col items-center'>
          <header className='flex flex-row justify-center'>
            <Subtitle text='Hop on the XchainJS train' iconClass={IconClass.UFO}/>
          </header>
          <p className='text-center mt-3 md:mt-6'>Ideas brewing? Feature request or a new integration on your mind? Do you want to know more?</p>
          <div className='flex flex-row mt-3 md:mt-8 gap-x-5 md:gap-x-12'>
            <ButtonLink url='https://discord.com/channels/838986635756044328/915384547670102037' text='Contact'/>
            <ButtonLink url='https://xchainjs.gitbook.io/xchainjs' text='Documentation' style='secundary'/>
          </div>
        </div>
      </section>
    </main>
  )
}
