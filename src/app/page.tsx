import { Card, IntegrationCard, Subtitle, ButtonLink, TextLink, IconClass } from '@components'

export default function Home () {
  return (
    <main className='flex flex-col'>
      <section className='md:mb-20 mb-12 px-4 md:px-16 lg:px-64'>
        <div className='flex flex-col'>
          <header className='flex flex-row justify-center'>
            <Subtitle text='Hey there crypto explorer!' size='lg'/>
          </header>
          <p className='text-center mt-3 md:mt-6 text-sm md:text-lg'>Say hello to XchainJS! We’ve got the toolkit that makes your cross-chain adventures feel like a walk in the park. Open-sourced, backed by the might of THORChain, and crafted with a sprinkle of love just for you.</p>
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
              <p>It&apos;s not just about THORChain. Dive into our expansive arsenal of wallet tools waiting for your exploration.</p>
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
          <div className='mt-6 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-x-10 lg:gap-x-20 gap-y-10 lg:gap-y-12'>
            <IntegrationCard key='lends' iconClass={IconClass.LENDS} name='Lends' url='https://www.lends.so/' description="The fearless trailblazers in the world of loans. From bold ventures into lending territories to whipping up stellar features, they'are turning heads."/>
            <IntegrationCard key='asgardex' iconClass={IconClass.ASGARDEX}name='Asgardex' url='https://github.com/asgardex/asgardex-desktop' description='The guardians of the desktop space. Their dedication to open-source and resisting censorship? Nothing short of legendary.'/>
            <IntegrationCard key='swapper' iconClass={IconClass.SWAPPER} name='Swapper' url='https://swapper.market/' description='The heroes with dreams bigger than the cosmos. A simple UI and a vision to make your crypto journey seamless. Expect big things!'/>
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
                  <span className='inline-block'><TextLink text='KUJIRA' url='https://kujira.network/' underlined/></span>
                  <p className='inline'>, </p>
                  <span className='inline-block'><TextLink text='LITECOIN' url='https://litecoin.org/' underlined/></span>
                  <p className='inline'>, </p>
                  <span className='inline-block'><TextLink text='MAYACHAIN' url='https://www.mayaprotocol.com/' underlined/></span>
                  <p className='inline'> and </p>
                  <span className='inline-block'><TextLink text='THORCHAIN' url='https://thorchain.org/' underlined/></span>
                </div>
                <ul className='mt-6'>
                  <li className='flex flex-wrap'><TextLink text='○ Signature and transmission of transactions' url='https://docs.xchainjs.org/xchain-client/overview.html#transfer'/></li>
                  <li className='flex flex-wrap'><TextLink text='○ Balance inquiries' url='https://docs.xchainjs.org/xchain-client/overview.html#get-balance'/></li>
                  <li className='flex flex-wrap'><TextLink text='○ Transaction history and details' url='https://docs.xchainjs.org/xchain-client/overview.html#get-transactions'/></li>
                  <li className='flex flex-wrap'><TextLink text='○ Fee estimates' url='https://docs.xchainjs.org/xchain-client/overview.html#get-fees'/></li>
                </ul>
              </div>
            </Card>
            <Card title='Protocols'>
              <div className='flex flex-col'>
                <p>Featuring THORChain now, with Maya on the horizon. Get ready for:</p>
                <ul className='mt-6'>
                  <li className='flex flex-wrap'><TextLink text='○ Multi-chain swaps, including BTC!' url='https://github.com/xchainjs/xchainjs-lib/tree/master/examples/do-swap'/></li>
                  <li className='flex flex-wrap'><TextLink text='○ Native interest rates' url='https://github.com/xchainjs/xchainjs-lib/tree/master/examples/liquidity'/></li>
                  <li className='flex flex-wrap'><TextLink text='○ Open loans without liquidation' url='https://github.com/xchainjs/xchainjs-lib/blob/master/examples/loans'/></li>
                  <li className='flex flex-wrap'><TextLink text='○ Custom nameservice (THORname)' url='https://docs.xchainjs.org/xchain-thorchain-amm/available-functions/thorchain-amm.html#getthornamesbyaddress'/></li>
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
                <span className='inline-block'><TextLink text='SoChain' url='https://sochain.com/' underlined/></span>
                <p className='inline'>, </p>
                <span className='inline-block'><TextLink text='Covalent' url='https://www.covalent.xyz/' underlined/></span>
                <p className='inline'>, </p>
                <span className='inline-block'><TextLink text='Infura' url='https://www.infura.io/' underlined/></span>
                <p className='inline'>, </p>
                <span className='inline-block'><TextLink text='Alchemy' url='https://www.alchemy.com/' underlined/></span>
                <p className='inline'>, </p>
                <span className='inline-block'><TextLink text='Ark' url='https://ark.io/' underlined/></span>
                <p className='inline'> and more!</p>
              </div>
            </Card>
            <Card title='Block Explorers'>
              <div>
                <p className='inline'>Stay updated with </p>
                <span className='inline-block'> <TextLink text='Runescan' url='https://runescan.io/' underlined/></span>
                <p className='inline'>, </p>
                <span className='inline-block'> <TextLink text='Etherscan' url='https://etherscan.io/' underlined/></span>
                <p className='inline'>, </p>
                <span className='inline-block'><TextLink text='Snowtrace' url='https://snowtrace.io/' underlined/></span>
                <p className='inline'>, </p>
                <span className='inline-block'><TextLink text='Blockchain.com' url='https://www.blockchain.com/en/' underlined/></span>
                <p className='inline'>, </p>
                <span className='inline-block'><TextLink text='Bscan' url='https://bscscan.com/' underlined/></span>
                <p className='inline'> and the rest of the crew.</p>
              </div>
            </Card>
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
            <ButtonLink url='https://docs.xchainjs.org/' text='Documentation' style='secundary'/>
          </div>
        </div>
      </section>
    </main>
  )
}
