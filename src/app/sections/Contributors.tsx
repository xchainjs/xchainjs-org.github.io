import React from "react";
import { Subtitle } from "../../../components/Subtitle";
import { IconClass } from "../../../components/Icon";
import { IntegrationCard } from "../../../components/IntegrationCard";
import localFont from "next/font/local";
const arcadeClassic = localFont({
  src: "../../../fonts/arcadeclassic/arcadeclassic.woff2",
});

const Contributors = () => {
  return (
    <section className="md:mb-28 mb-14 px-8 md:px-16 lg:px-20">
      <div className="flex flex-col">
        <header className="flex flex-row justify-center">
          <Subtitle text="CONTRIBUTORS" iconClass={IconClass.INVADER2} />
        </header>
        {[
          {
            title: "Enterprise",
            color: "#1BE7B0",
            width: "400px",
            colorClass: "text-green-400",
            items: [
              {
                title: "THORCHAIN",
                icon: IconClass.THORCHAIN,
                description:
                  "The guardians of the desktop space. Their dedication to open-source and resisting censorship? Nothing short of legendary.",
              },
              {
                title: "MAYACHAIN",
                icon: IconClass.MAYACHAIN,
                description:
                  "The guardians of the desktop space. Their dedication to open-source and resisting censorship? Nothing short of legendary.",
              },
            ],
          },
          {
            title: "GROWTH",
            color: "#51A991",
            width: "400px",
            colorClass: "text-green-700",
            items: [
              {
                title: "ASGARDEX",
                icon: IconClass.ASGARDEX,
                url: "https://github.com/asgardex/asgardex-desktop",
                description:
                  "The guardians of the desktop space. Their dedication to open-source and resisting censorship? Nothing short of legendary.",
              },
            ],
          },
          {
            title: "Basic",
            color: "#000000",
            width: "320px",
            colorClass: "text-gray-600",
            items: [
              {
                title: "Lends",
                icon: IconClass.LENDS,
                url: "https://www.lends.so/",
                description:
                  "The fearless trailblazers in the world of loans. From bold ventures into lending territories to whipping up stellar features, they'are turning heads.",
              },
              {
                title: "CACAO SWAP",
                icon: IconClass.CACAOSWAP,
                url: "https://cacaoswap.app/",
                description:
                  "CacaoSwap app is the supercharged front end, pairing great UX/UI with truly decentralised swaps. Backed and powered by MAYAChain and THORChain and built for you",
              },
              {
                title: "LEAP WALLET",
                icon: IconClass.LEAP_WALLET,
                url: "https://www.leapwallet.io/",
                description:
                  "Super Wallet for the Internet of Blockchains. Your gateway to 60+ Cosmos chains!",
              },
              {
                title: "LEODEX",
                icon: IconClass.LEODEX,
                url: "https://leodex.io/",
                description:
                  "Multi-chain DEX interface that bridges the gap of functionality and usability. Built by the LEO Ecosystem, powered by Maya Protocol and aggregating HIVE Swaps.",
              },
            ],
          },
        ].map(({ title, color, items, width, colorClass }) => (
          <div key={title}>
            <h2
              className={`${arcadeClassic.className} text-center text-2xl`}
              style={{ color: color, margin: "100px auto" }}
            >
              {title}
            </h2>
            <div
              className="mt-6 md:mt-12 flex flex-row xs:flex-wrap lg:flex-nowrap justify-center"
              style={{ gap: "40px" }}
            >
              {items.map(({ title, description, icon }) => (
                <IntegrationCard
                  url="#"
                  key={title}
                  description={description}
                  iconClass={icon}
                  name={title}
                  iconHoverColor={colorClass}
                  styles={{
                    width: `min(90vw,${width})`,
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contributors;
