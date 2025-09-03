import React from "react";

const GameStory = () => {
  const features = [
    {
      title: "Over 1k+ Affiliate Game",
      desc: "Keep users informed about the gaming industry with news articles on releases, updates, and events.",
      icon: "https://html.themeholy.com/bame/demo/assets/img/icon/about_feature_1.svg",
    },
    {
      title: "Exclusive Game Reviews",
      desc: "Provide in-depth reviews of popular games to help users make informed decisions.",
      icon: "https://html.themeholy.com/bame/demo/assets/img/icon/about_feature_2.svg",
    },
    {
      title: "Gaming Tutorials & Guides",
      desc: "Offer tutorials and guides for various games to assist players in improving their skills.",
      icon: "https://html.themeholy.com/bame/demo/assets/img/icon/about_feature_3.svg",
    },
  ];

  return (
    <section className="features w-full flex items-center justify-center relative z-10">
      <div className="container flex flex-col md:flex-row items-center gap-16 py-6 md:py-24 md:pb-32 px-4 md:px-0">
        <div className="clip-collage left_side flex-1">
        </div>

        <div className="right_side flex flex-col gap-10 flex-1">
          <div className="top_content flex flex-col gap-4">
            <span className="section_subheading">About Our Gaming Site</span>
            <h2>Forging Legends in the Gaming Universe</h2>
          </div>
          <div className="features_list">
            <ul className="list flex flex-col gap-6">
              {features.map((feature, index) => (
                <li key={index} className="item flex items-center gap-4 max-w-full md:max-w-[75%]">
                  <div className="feature_image max-w-full md:max-w-[110px] flex-shrink-0">
                    <img src={feature.icon} alt="Icons" className="w-full" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="text-2xl!">
                      {feature.title
                        .split(" ")
                        .map((word, idx) =>
                          word.startsWith("1k+") ? (
                            <span key={idx}>{word} </span>
                          ) : (
                            word + " "
                          )
                        )}
                    </h4>
                    <p className="text-md text-white/70! hidden md:block">{feature.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameStory;
