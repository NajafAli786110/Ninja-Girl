import React from "react";

const VideoSection = () => {
  return (
    <section className="video-section flex items-center justify-center w-full pt-160 pb-0 px-5 bg-[#560600] -mt-40 relative">
      <div className="container p-4 md:p-10 rounded-lg">
        <div className="main-video -mt-100">
          <iframe
            width="100%"
            height="800px"
            style={{ maxHeight: "800px" }}
            src="https://www.youtube.com/embed/ujlej7tawfE"
            title="Top 15 2D Action Platformer Ninja Games That You Should Play"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="rounded-4xl"
          ></iframe>
        </div>
      </div>
      <img
        src="/bg-cloud-dark-blue-yellow.png"
        alt="Section bottom pattern"
        className="absolute -bottom-65 left-0 w-full h-auto z-40"
      />
    </section>
  );
};

export default VideoSection;
