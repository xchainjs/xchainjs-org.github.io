import { Subtitle } from '../Subtitle'
import { IconClass } from '../Icon'
import { IntegrationCard } from '../IntegrationCard'
import localFont from 'next/font/local'
const arcadeClassic = localFont({
  src: '../../fonts/arcadeclassic/arcadeclassic.woff2'
})

const Contributors = () => {
  return (
    <section className="md:mb-28 mb-14 px-8 md:px-16 lg:px-20 mt-10 lg:mt-0">
      <div className="flex flex-col">
        <header className="flex flex-row justify-center">
          <Subtitle text="CONTRIBUTORS" iconClass={IconClass.INVADER2} />
        </header>
        {[
          {
            title: 'Enterprise',
            color: 'text-enterprise',
            width: '400px',
            items: [
              {
                title: 'THORCHAIN',
                icon: IconClass.THORCHAIN,
                url: 'https://thorchain.org/',
                iconHoverColor: 'text-enterprise',
                description:
                  ''
              },
              {
                title: 'MAYACHAIN',
                icon: IconClass.MAYACHAIN,
                url: 'https://www.mayaprotocol.com/',
                iconHoverColor: 'text-enterprise',
                description:
                  ''
              }
            ]
          },
          {
            title: 'GROWTH',
            color: 'text-growth',
            width: '400px',
            items: [
              {
                title: 'ASGARDEX',
                icon: IconClass.ASGARDEX,
                url: 'https://www.asgardex.com/',
                iconHoverColor: 'text-growth',
                description:
                  'The guardians of the desktop space. Their dedication to open-source and resisting censorship? Nothing short of legendary.'
              }
            ]
          },
          {
            title: 'Basic',
            color: 'text-basic',
            width: '400px',
            items: [
              {
                title: 'Lends',
                icon: IconClass.LENDS,
                url: 'https://www.lends.so/',
                iconHoverColor: 'text-primary-light',
                description:
                  "The fearless trailblazers in the world of loans. From bold ventures into lending territories to whipping up stellar features, they'are turning heads."
              },
              {
                title: 'CACAO SWAP',
                icon: IconClass.CACAOSWAP,
                url: 'https://cacaoswap.app/',
                iconHoverColor: 'text-primary-light',
                description:
                  'CacaoSwap app is the supercharged front end, pairing great UX/UI with truly decentralised swaps. Backed and powered by MAYAChain and THORChain and built for you'
              },
              {
                title: 'LEAP WALLET',
                icon: IconClass.LEAP_WALLET,
                url: 'https://www.leapwallet.io/',
                iconHoverColor: 'text-primary-light',
                description:
                  'Super Wallet for the Internet of Blockchains. Your gateway to 60+ Cosmos chains!'
              },
              {
                title: 'LEODEX',
                icon: IconClass.LEODEX,
                url: 'https://leodex.io/',
                iconHoverColor: 'text-primary-light',
                description:
                  'Multi-chain DEX interface that bridges the gap of functionality and usability. Built by the LEO Ecosystem, powered by Maya Protocol and aggregating HIVE Swaps.'
              }
            ]
          }
        ].map(({ title, color, items }) => (
          <div key={title}>
            <h2
              className={`${arcadeClassic.className} text-center ${color} text-2xl`}
              style={{ margin: '100px auto' }}
            >
              {title}
            </h2>
            <div
              className="mt-6 md:mt-12 flex flex-row flex-wrap lg:flex-nowrap justify-center"
              style={{ gap: '50px' }}
            >
              {items.map(({ title, description, icon, url, iconHoverColor }) => (
                <IntegrationCard
                  url={url}
                  key={title}
                  description={description}
                  iconClass={icon}
                  name={title}
                  iconHoverColor={iconHoverColor}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Contributors
