import React from "react";
import { Subtitle } from "../../../components/Subtitle";
import { IconClass } from "../../../components/Icon";
import { Card } from "../../../components/Card";

const XChainArmy = () => {
  return (
    <section className="md:mb-28 mb-14 px-8 md:px-16 lg:px-20">
      <div className="flex flex-col">
        <header className="flex flex-row justify-center">
          <Subtitle
            text="XCHAIN  ARMY"
            size="lg"
            iconClass={IconClass.INVADER1}
          />
        </header>
        <p className="text-center" style={{ margin: "40px 0 20px" }}>
          Welcome to the Xchain Army, a community dedicated to the growth and
          support of XchainJS, an invaluable open-source library. Developing and
          maintaining such a robust tool requires significant effort and
          resources, yet we believe in making it accessible to everyone without
          cost. By joining the Xchain Army, you're not just subscribing to
          premium support; you're investing in the future of this powerful
          library.
        </p>
        <div className="mt-6 md:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 lg:gap-x-20 gap-y-10 lg:gap-y-12">
          {[
            {
              title: "Basic Plan",
              description:
                "Empower your project with essential support – perfect for POCs and sponsored initiatives.",
              features: ["Private Telegram group"],
              icon: IconClass.INVADER2,
              color: "text-basic",
              border: "#252525",
            },
            {
              title: "Growth Plan",
              description:
                "Stay ahead with seamless updates and enhanced support for your production-ready interfaces.",
              features: [
                "Private Telegram group",
                "Implementation of updates directly on the project's codebase",
                "Visibility on the XchainJS website",
              ],
              icon: IconClass.INVADER3,
              color: "text-growth",
              border: "#51A991",
            },
            {
              title: "Enterprise Plan",
              description:
                "Lead the future of XchainJS with priority features and strategic influence.",
              features: [
                "Private Telegram group",
                "Implementation of updates directly on the project's codebase",
                "Visibility on the XchainJS website",
                "Prioritization of features in the XchainJS roadmap",
              ],
              icon: IconClass.INVADER4,
              color: "text-enterprise",
              border: "#1BE7B0",
            },
          ].map(({ title, description, features, icon, color, border }) => (
            <Card
              title={title}
              key={title}
              iconClass={icon}
              titleClasses="text-2xl"
              wrapperStyle={{
                borderColor: border,
                padding: "20px 20px 30px",
              }}
            >
              <div className="pt-4">
                <p className="my-8">{description}</p>
                <div style={{ marginTop: "40px" }}>
                  {features?.map((d, i) => (
                    <div className="mt-4 flex" key={i}>
                      <span className={`text-2xl ${color}`}>✔</span>
                      <p className="ml-2">{d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default XChainArmy;
