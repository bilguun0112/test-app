"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
export default function Carausel() {
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
        autoPlay={true}
        infiniteLoop
        interval={5000}
        transitionTime={1000}
        showThumbs={false}
        showStatus={false}
        swipeable={true}
        renderArrowPrev={(clickHandler, hasPrev) => {
          return (
            <div
              className={`${
                hasPrev ? "absolute" : "hidden"
              } top-0 bottom-0 left-0 flex justify-center items-center p-3 opacity-60 hover:opacity-100 cursor-pointer z-20`}
              onClick={clickHandler}
            >
              <AiOutlineLeft className="w-9 h-9 text-white" />
            </div>
          );
        }}
        renderArrowNext={(clickHandler, hasNext) => {
          return (
            <div
              className={`${
                hasNext ? "absolute" : "hidden"
              } top-0 bottom-0 right-0 flex justify-center items-center p-3 opacity-60 hover:opacity-100 cursor-pointer z-20`}
              onClick={clickHandler}
            >
              <AiOutlineRight className="w-9 h-9 text-white" />
            </div>
          );
        }}
      >
        {data.map((item) => (
          <div
            key={item.id}
            className="relative aspect-h-1 opacity-90 aspect-w-0 w-full overflow-hidden lg:aspect-none h-[83vh] bg-cover bg-center bg-fixed flex items-center justify-center"
            // style={{ backgroundImage: `url(${item.imgUrl})` }}
          >
            <img src={item.imgUrl} className="img-fluid h-[85vh]" alt="" />
            <div className=" my-auto mx-auto absolute">
              <div
                className={`text-white text-[48px] md:text-[64px] text-bold`}
              >
                {item.name}
              </div>
              <div className=" text-white text-[16px] px-3 md:px-5 md:text-[24px] mt-[20px]">
                {item.desc}
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
