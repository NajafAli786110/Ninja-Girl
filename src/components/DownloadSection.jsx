import React from "react";
import { Link } from "react-router-dom";

const DownloadSection = () => {
  return (
    <section className="features w-full flex items-center justify-center">
      <div className="container flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16 py-6 md:py-24 px-4 md:px-0">
        <div className="left_side flex-1">
          <img
            src="https://aicdn.picsart.com/8d8ce140-9b92-4527-bfed-120db9a062aa.png"
            alt="Download section"
            className="h-auto md:h-[600px] w-full object-contain"
          />
        </div>
        
        {/* Content */}
        <div className="right_side flex flex-col gap-10 flex-1">
          <div className="top_content flex flex-col gap-4">
            <span className="section_subheading">About Our Gaming Site</span>
            <h2>Forging Legends in the Gaming Universe</h2>
          </div>

          {/* Para */}
          <div className="flex flex-col gap-4">
            <p className="text-xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              quas cumque nobis vel eveniet error accusantium, nulla nihil
              voluptatum eum, repudiandae in eos quod pariatur culpa dignissimos
              reprehenderit excepturi placeat.
            </p>
            <p className="text-xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              quas cumque nobis vel eveniet error accusantium, nulla nihil
              voluptatum eum, repudiandae in eos quod pariatur culpa dignissimos
              reprehenderit excepturi placeat.
            </p>
          </div>
          {/* Buttons */}
          <div className="flex items-center gap-6">
            <Link
              to="/"
              target="_blank"
              className="px-4 py-2 bg-black rounded-xl border border-x-amber-600"
            >
              <img
                src="/download-from-google.png"
                alt="Download our app now"
                className="w-[150px] h-[40px] object-cover rounded-xl"
              />
            </Link>
            <Link
              to="/"
              target="_blank"
              className="px-4 py-2 bg-black rounded-xl border border-x-amber-600"
            >
              <img
                src="/download-from-appstore.png"
                alt="Download our app now"
                className="w-[150px] h-[40px] object-cover rounded-xl"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
