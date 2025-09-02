import React from "react";

const VideoSection = () => {
  return (
    <section className="video-section flex items-center justify-center w-full pt-100 pb-20 px-5">
      <div className="w-full p-4 md:p-10 rounded-lg">
        <div className="main-video -mt-100">
          <iframe
            width="100%"
            height="670"
            style={{ maxHeight: "570px" }}
            src="https://www.youtube.com/embed/ujlej7tawfE"
            title="Top 15 2D Action Platformer Ninja Games That You Should Play"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="rounded-4xl"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
