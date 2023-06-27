/** @format */

import React from "react";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import sliderImg from "../../resources/Images/hero.jpg";

import Navbar from "../navbar/Navbar";
import "./Slider.css";

const Slider = () => {
  return (
    <>
      <div className="container-1   opacity-90 ">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          // pagination={{
          //   clickable: true,
          // }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="3xl:h-screen "
        >
          <SwiperSlide>
            <img className="w-full object-cover  " src={sliderImg} alt="" />
            <div className="hero-text	sticky  w-full     shadow-sm ">
              <Navbar />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <img className="w-full" src={sliderImg} alt="" />
            <div className="hero-text	sticky  w-full     shadow-sm ">
              <Navbar />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <img className="w-full " src={sliderImg} alt="" />
            <div className="hero-text	sticky  w-full     shadow-sm ">
              <Navbar />
            </div>
            {/* <div className="hero-text h-40 w-1/2 	pt-5  md:h-96 md:pt-20	 ">
              <h1 className="ml-20 text-left text-xl text-slate-700 lg:text-4xl">
                <span className="text-lg md:text-3xl lg:text-6xl">
                  <span className="text-white">BROWNEARTH LTD.</span>
                </span>
              </h1>

              <p className="ml-20 text-left  text-sm text-slate-100 sm:text-2xl md:mt-5 md:text-3xl  ">
                Commitment to quality and attention to detail
              </p>
            </div> */}
          </SwiperSlide>

          <SwiperSlide>
            <img className="w-full" src={sliderImg} alt="" />
            <div className="hero-text	sticky  w-full     shadow-sm ">
              <Navbar />
            </div>
            {/* <div className="hero-text h-40 w-1/2 	pt-5  md:h-96 md:pt-20	 ">
              <h1 className="ml-20 text-left text-xl text-slate-700 lg:text-4xl">
                <span className="text-lg md:text-3xl lg:text-6xl">
                  <span className="text-white">BROWNEARTH LTD.</span>
                </span>
              </h1>

              <p className="ml-20 text-left  text-sm text-slate-100 sm:text-2xl md:mt-5 md:text-3xl  ">
                Commitment to quality and attention to detail
              </p>
            </div> */}
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
