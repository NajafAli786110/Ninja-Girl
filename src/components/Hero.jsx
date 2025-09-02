import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const features = [
    {
      title: "Fluid Combat",
      desc: "Master fast-paced ninja combat moves.",
      icon: "https://cdn3d.iconscout.com/3d/premium/thumb/battle-3d-icon-png-download-7591010.png",
    },
    {
      title: "Epic Bosses",
      desc: "Face huge and challenging enemies.",
      icon: "https://cdn-icons-png.flaticon.com/512/1477/1477179.png",
    },
    {
      title: "Platformer Fun",
      desc: "Classic retro-inspired level design.",
      icon: "https://cdn-icons-png.flaticon.com/512/2118/2118338.png",
    },
  ];

  return (
    <section className="hero-section w-full flex flex-col justify-center items-center pt-40 h-[100vh] overflow-hidden">
      <div className="gradient-bg"></div>
      <div className="gradient-bg2"></div>
      <div className="container flex justify-center items-center gap-8">
        {/* Left Container */}
        <div className="left-container flex flex-1 flex-col gap-8 items-baseline">
          <div className="flex items-center gap-2 text-2xl">
            Play
            <img
              src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHRhcnFqZ2txNnB2NncwdGt3em52eW1ibGl5NHFjaG42ankxb2swMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/ujpaHBFQxnZIALTObQ/giphy.gif"
              alt="fire icon"
              className="h-6 w-6 -mt-2"
            />
            Earn
            <img
              src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHRhcnFqZ2txNnB2NncwdGt3em52eW1ibGl5NHFjaG42ankxb2swMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/ujpaHBFQxnZIALTObQ/giphy.gif"
              alt="fire icon"
              className="h-6 w-6 -mt-2"
            />
            Enjoy
          </div>
          <h1>ULTIMATE <span className="text-gradient">GAMER’S</span> HAVEN</h1>
          <Link
            to="/"
            className="bg-amber-600 py-3.5 px-8 rounded-full text-xl"
          >
            Contact Us
          </Link>
        </div>

        {/* Middle Container */}
        <div className="middle-container flex flex-1 justify-center items-center">
          <div className="hero-banner-bg">
            <img className="w-full" src="/assets/hero-bg-orange.png" alt="banner" />
          </div>
          <img
            src="https://gameplex-final.vercel.app/gameplex-v1/assets/img/hero.png"
            alt="Middle Man"
          />
        </div>

        {/* Right/Feature Container */}
        <div className="feature-container flex flex-1 flex-col px-12 py-12 border-2  rounded-3xl gap-8 bg-[#  ]/20 max-w-md backdrop:blur-2xl">
          <h3 className="text-gradient pb-4 border-b-2 border-white/15">
            Core Features
          </h3>
          <div className="w-full inner-feature-container flex flex-col gap-6">
            {features.map((item, index) => (
              <div key={index} className="feature-item flex items-center gap-4">
                <div className="border border-white rounded-full p-2">
                  <img src={item.icon} alt={item.title} className="size-12" />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-lg">{item.title}</h4>
                  <p className="text-sm text-gray-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
