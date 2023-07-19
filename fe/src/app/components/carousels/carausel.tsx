"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react";
export default function Carausel() {
  const [loading, setLoading] = useState(true);
  function onChange() {
    setLoading(false);
  }
  const data = [
    {
      id: 2,
      imgUrl:
        "https://res.cloudinary.com/dne57yfdi/image/upload/v1689742820/cargo/slider-bg_yt9gmm.jpg",
      desc: "Some beautiful roads cannot be discovered without getting loss.",
      name: "EXPLORE NATURE",
    },
    {
      id: 1,
      imgUrl:
        "https://res.cloudinary.com/dne57yfdi/image/upload/v1689742492/cargo/bernd-dittrich-mjhvx4CO6G8-unsplash_yprnjl.jpg",
      desc: "Some beautiful roads cannot be discovered without getting loss.",
      name: "EXPLORE NATURE",
    },

    {
      id: 3,
      imgUrl:
        "https://res.cloudinary.com/dne57yfdi/image/upload/v1689742485/cargo/wallpaperflare.com_wallpaper_srl1pe.jpg",
      desc: "Some beautiful roads cannot be discovered without getting loss.",
      name: "EXPLORE NATURE",
    },
  ];
  return (
    <div className="carousel-wrapper">
      <Carousel
        useKeyboardArrows={true}
        onChange={onChange}
        autoPlay={true}
        infiniteLoop
        interval={5000}
        transitionTime={1000}
        showThumbs={false}
        showStatus={false}
      >
        {data.map((item) => (
          <div
            key={item.id}
            className="aspect-h-1 bg-[#cccccc] opacity-90 aspect-w-0 w-full overflow-hidden lg:aspect-none h-[83vh] bg-cover bg-center bg-fixed flex items-center justify-center"
            style={{ backgroundImage: `url(${item.imgUrl})` }}
          >
            <div className="my-auto mx-auto">
              <div
                className={`text-white text-[48px] md:text-[64px] text-bold 
                     ${loading ? "opacity-0" : "animate-showcontentDes"}`}
              >
                {item.name}
              </div>
              <div className="text-white text-[16px] px-3 md:px-5 md:text-[24px] mt-[20px] opacity-0 animate-showcontentDes">
                {item.desc}
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
