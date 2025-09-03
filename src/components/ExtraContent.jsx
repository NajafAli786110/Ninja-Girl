const ExtraContent = () => {
  const teamMembers = [
    {
      img: "/assets/HeroSliderImages/Attack__000.png",
      name: "Killer Master",
      role: "Blockchain Expert",
    },
    {
      img: "/assets/HeroSliderImages/Attack__001.png",
      name: "Shadow Hunter",
      role: "Smart Contract Developer",
    },
    {
      img: "/assets/HeroSliderImages/Attack__002.png",
      name: "Phantom Coder",
      role: "Frontend Engineer",
    },
    {
      img: "/assets/HeroSliderImages/Attack__003.png",
      name: "Cyber Ninja",
      role: "Backend Developer",
    },
    {
      img: "/assets/HeroSliderImages/Attack__004.png",
      name: "Pixel Master",
      role: "UI/UX Designer",
    },
    {
      img: "/assets/HeroSliderImages/Attack__005.png",
      name: "Code Samurai",
      role: "Full Stack Developer",
    },
    {
      img: "/assets/HeroSliderImages/Attack__004.png",
      name: "Pixel Master",
      role: "UI/UX Designer",
    },
  ];

  return (
    <section className="w-full gallery-scrolling flex items-center justify-center py-20 px-4 md:px-0 relative">
      <div className="container flex flex-col items-center justify-center gap-10">
        <div className="top_content flex flex-col gap-4 max-w-full md:max-w-2xl text-center">
          <span className="section_subheading">About Our Gaming Site</span>
          <h2>Forging Legends in the Gaming Universe</h2>
        </div>

        <div className="w-full flex gap-6 gallery-container">
          <div className="w-full flex flex-wrap items-center justify-center gap-2 md:gap-6">
            {teamMembers
              .slice(0, window.innerWidth < 768 ? 3 : teamMembers.length)
              .map((member, index) => (
                <div
                  key={index}
                  className="team__item min-w-[22%] md:min-w-[22%] item py-12 px-8 flex flex-col items-center justify-center gap-8 bg-[#ffffff]/20 border-2 border-white/10 rounded-3xl overflow-hidden relative"
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="size-52 rounded-full border-2 border-white bg-amber-600 p-4"
                  />
                  <div className="w-full content flex flex-col items-center gap-2">
                    <h5 className="text-2xl!">{member.name}</h5>
                    <p className="text-md">{member.role}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtraContent;
