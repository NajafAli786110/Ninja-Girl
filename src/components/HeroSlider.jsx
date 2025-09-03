import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, FreeMode } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/free-mode";

const games = [
  {
    id: 1,
    img: "/assets/HeroSliderImages/Attack__000.png",
    title: "Apex Legends",
  },
  {
    id: 2,
    img: "/assets/HeroSliderImages/Attack__001.png",
    title: "Super Mario Odyssey",
  },
  {
    id: 3,
    img: "/assets/HeroSliderImages/Attack__002.png",
    title: "Ghost of Tsushima",
  },
  {
    id: 4,
    img: "/assets/HeroSliderImages/Attack__003.png",
    title: "Clash Royale",
  },
  {
    id: 5,
    img: "/assets/HeroSliderImages/Attack__004.png",
    title: "Pokemon Quest",
  },
  {
    id: 6,
    img: "/assets/HeroSliderImages/Attack__005.png",
    title: "Street Fighter V",
  },
  { id: 7, img: "/assets/HeroSliderImages/Attack__006.png", title: "Tekken 7" },
  { id: 8, img: "/assets/HeroSliderImages/Attack__007.png", title: "Tekken 7" },
  { id: 9, img: "/assets/HeroSliderImages/Attack__008.png", title: "Tekken 7" },
  {
    id: 10,
    img: "/assets/HeroSliderImages/Attack__009.png",
    title: "Tekken 7",
  },
];

const HeroSlider = () => {
  return (
    <section className="hero-swiper-slider w-full flex justify-center items-center relative pb-4 pt-10 md:pt-0">
      <div className="container flex flex-col justify-center items-center z-20">
        {/* Slider Content */}
        <div className="w-full md:w-[75%] mt-0 md:-mt-18 px-4 md:px-0">
          <Swiper
            modules={[Navigation, Autoplay, FreeMode]}
            slidesPerView={1.5}
            spaceBetween={8}
            navigation
            freeMode={true}
            grabCursor={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            {games.map((character) => (
              <SwiperSlide key={character.id}>
                <div className="bg-[#120C16] border border-white rounded-2xl overflow-hidden shadow-lg hover:border-[#E63946] transition duration-300">
                  <div className="p-2 flex flex-col gap-4 relative items-center">
                    <img
                      src={character.img}
                      alt={character.title}
                      className="w-full h-90 object-cover p-3 rounded-xl"
                    />
                    <h5 className="text-white absolute bottom-2 bg-white/10 p-2 rounded-lg backdrop-blur-sm text-center min-w-[90%]">
                      {character.title}
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      
      
      <img
        src="/bg-cloud-dark-blue-yellow.png"
        alt="Section bottom pattern"
        className="absolute top-0 left-0 w-full h-auto z-10"
      />
    </section>
  );
};

export default HeroSlider;
