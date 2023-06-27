import React, { useEffect } from "react";

import { motion, useAnimation } from "framer-motion";
import { AiOutlinePoweroff } from "react-icons/ai";
import { BiCctv } from "react-icons/bi";
import { BsFillCarFrontFill } from "react-icons/bs";
import { RiHomeGearFill } from "react-icons/ri";
import { RxRocket } from "react-icons/rx";
import { SiAdguard } from "react-icons/si";
// import singleProjectFloorPlan from "../../resources/floorplan.jpg";
// import {
//   default as aboutCover,
//   default as projectImage1,
// } from "../../resources/projectUrbanica/1.jpg";
// import projectImage2 from "../../resources/projectUrbanica/2.jpg";
// import projectImage6 from "../../resources/projectUrbanica/3.jpg";
// import projectImage8 from "../../resources/projectUrbanica/4.jpg";
// import projectImage7 from "../../resources/projectUrbanica/5.jpg";
// import projectImage4 from "../../resources/projectUrbanica/6.jpg";
// import projectImage5 from "../../resources/projectUrbanica/7.jpg";
// import projectImage3 from "../../resources/projectUrbanica/8.jpg";
// import singleProjectPortrait from "../../resources/urbanicaPotrait.jpg";
// import {} from "framer-motion/dist/framer-motion.dev";
import { useInView } from "react-intersection-observer";
import Navbar from "../../components/navbar/Navbar";
import sliderImg from "../../resources/Images/hero.jpg";

const SingleProject = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({ x: "-100vw" });
    }
  }, [inView, animation]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      className="dark:bg-slate-600"
    >
      {/* top section  */}
      {/* <div className="mx-10 grid grid-cols-1      gap-6  md:grid-cols-2  lg:mx-36">
        <div className=" flex  flex-col justify-center text-left  ">
          <p className="text-2xl uppercase text-stone-600 dark:text-slate-200 lg:text-4xl">
            Brownearth Urbanica
          </p>
          <p className="text-lg text-stone-700 dark:text-slate-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet non
            accusamus voluptatum, aperiam, debitis blanditiis sit culpa maiores
            nam iste nobis tempora nihil tempore vel asperiores dolore ipsam
            nesciunt earum.
          </p>
        </div>
        <div>
          <img src={singleProjectCover} alt="" className="object-cover" />
        </div>
      </div> */}
      <div className="group relative ">
        <img
          className="h-64 w-full object-cover grayscale lg:h-[550px]"
          src={sliderImg}
          alt="..."
        />
        {/* <div className=" absolute top-80 ml-36 flex h-0 w-full flex-col items-start justify-center bg-indigo-700 duration-500  lg:top-60 ">
          <h1 className="text-3xl uppercase text-white ">
            Brownearth Urbanica
          </h1>
        </div> */}
        <div className="hero-text	sticky  w-full     shadow-sm ">
          <Navbar />
        </div>
      </div>

      {/* Project Details section  */}
      <div className="mx-10 flex flex-col lg:mx-36">
        <div className=" text-stone-600  dark:text-slate-200 flex    text-xl uppercase tracking-wider md:items-center   lg:mb-2 lg:text-2xl	 ">
          Brownearth Urbanica
        </div>
        <div className="text-sm ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
          accusamus amet vero enim explicabo rerum sed cupiditate ullam. Illo
          necessitatibus unde modi animi eaque magnam natus. Voluptatibus
          praesentium esse error? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Corporis sunt odio nihil totam optio quibusdam
          dolore tempora nesciunt, unde at obcaecati commodi beatae perferendis
          quisquam! Inventore iure quae quod repudiandae!
        </div>
      </div>

      {/* Project Specification section  */}
      <div className=" m-10 grid  grid-cols-1 gap-1 md:grid-cols-2 lg:m-0   lg:mx-36 lg:gap-10 ">
        <div className="flex justify-end lg:mt-10">
          <img className="h-full w-full lg:h-[85%]  " src={sliderImg} alt="" />
        </div>
        <div className="lg:mt-10">
          <div className="text-stone-600 dark:text-slate-200 flex    text-xl uppercase tracking-wider md:items-center   lg:mb-36 lg:text-2xl	 ">
            SPECIFICATION
          </div>
          <div className="grid grid-cols-2  lg:grid-cols-3  ">
            <ul className=" flex  flex-col justify-between  gap-10 font-medium ">
              <li>Address : </li>
              <li>Land Area :</li>
              <li>Height :</li>
              <li>Building Type :</li>
              <li>Number Of Apartments :</li>
              <li>Number Of Car Parkings :</li>
              <li>Units Per Floor :</li>
              <li>Size Of Each Apartment :</li>
            </ul>
            <ul className="flex flex-col justify-between  lg:col-span-2">
              <li>BrownEarth Urbanica, RC4W+M2, Dhaka</li>
              <li>12 katha</li>
              <li>9 Storied (G+8)</li>
              <li className="">Residential</li>
              <li className="">24</li>
              <li>23</li>
              <li>03</li>
              <li> 1503 sft (Approx.)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Facilities Section  */}
      <div className=" text-stone-600 dark:text-slate-200 m-10 text-left  lg:mx-36   ">
        <p className=" text-3xl uppercase  lg:text-4xl">
          Some Of The Facilities
        </p>

        <div className="m-10 grid grid-cols-1  gap-10  md:ml-36 lg:grid-cols-2">
          <div className="flex-start flex items-center justify-start ">
            <div className="border-slate-800 text-stone-500 dark:border-slate-200 dark:text-slate-200 mr-6 rounded-full border p-2 text-4xl">
              <RiHomeGearFill />
            </div>
            <div className="text-xl md:text-2xl ">Designer Interiors</div>
          </div>

          <div className="flex items-center justify-start">
            <div className="border-slate-800  text-stone-500 dark:border-slate-200 dark:text-slate-200 mr-6  rounded-full border p-2 text-4xl">
              <SiAdguard />
            </div>
            <div className="text-xl md:text-2xl">High Security</div>
          </div>

          <div className="flex items-center justify-start">
            <div className="border-slate-800 text-stone-500 dark:border-slate-200 dark:text-slate-200 mr-6 rounded-full border p-2 text-4xl">
              <RxRocket />
            </div>
            <div className="text-xl md:text-2xl">High Speed Lift</div>
          </div>

          <div className="flex items-center justify-start">
            <div className="border-slate-800 text-stone-500 dark:border-slate-200 dark:text-slate-200 mr-6 rounded-full border p-2 text-4xl">
              <BsFillCarFrontFill />
            </div>
            <div className="text-xl md:text-2xl">Spacious Parking Spaces</div>
          </div>

          <div className="flex items-center justify-start ">
            <div className="border-slate-800 text-stone-500 dark:border-slate-200 dark:text-slate-200 mr-6 rounded-full border p-2 text-4xl">
              <AiOutlinePoweroff />
            </div>
            <div className="text-xl md:text-2xl">100% Power Backup</div>
          </div>

          <div className="flex items-center justify-start ">
            <div className="border-slate-800 text-stone-500 dark:border-slate-200 dark:text-slate-200 mr-6 rounded-full border p-2 text-4xl">
              <BiCctv />
            </div>
            <div className="text-xl md:text-2xl">CCTV Monitoring System</div>
          </div>
        </div>
      </div>

      {/* Floor Plan Section  */}
      <div className="text-stone-600  dark:text-slate-200 m-10 flex-col	 items-center justify-start text-left md:m-28  lg:mx-36">
        <p className="text-stone-600 dark:text-slate-200 text-3xl uppercase   lg:text-4xl ">
          Floor Plan
        </p>
        <div className="">
          <img className="w-full" src={sliderImg} alt="..." />
        </div>
      </div>

      {/* Single Project Masonry Section  */}
      <div
        ref={ref}
        className="text-stone-600   dark:text-slate-200 m-10 flex-col	 items-center justify-start text-left md:m-28  lg:mx-36"
      >
        <p className="text-stone-600 dark:text-slate-200 mb-6 text-3xl uppercase lg:text-4xl ">
          project gallery
        </p>

        <motion.div
          animate={animation}
          className="columns-1 gap-4    md:columns-3"
        >
          <img
            className="mb-4 aspect-video w-full object-cover"
            src={sliderImg}
            alt="..."
          />

          <img
            className="mb-4 aspect-square w-full object-cover "
            src={sliderImg}
            alt="..."
          />
          <img
            className="mb-4 aspect-video w-full object-cover "
            src={sliderImg}
            alt="..."
          />
          <img
            className="mb-4 aspect-square w-full object-cover "
            src={sliderImg}
            alt="..."
          />

          <img
            className="mb-4 aspect-square w-full object-cover "
            src={sliderImg}
            alt="..."
          />
          <img
            className="mb-4 aspect-video w-full  object-cover"
            src={sliderImg}
            alt="..."
          />
          <img
            className="mb-4 aspect-square w-full object-cover "
            src={sliderImg}
            alt="..."
          />
          <img
            className="mb-4 aspect-video w-full object-cover "
            src={sliderImg}
            alt="..."
          />
        </motion.div>
      </div>

      {/* Project Location Section  */}

      <div className="relative m-10 grid h-96 grid-cols-1 overflow-hidden rounded-lg bg-gray-300 p-10 lg:mx-36 lg:h-[580px] ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7300.6722002749275!2d90.44431826504896!3d23.806644605037686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7da9bb9d1f7%3A0x2651406d463f1861!2sBrownEarth%20Urbanica!5e0!3m2!1sen!2sbd!4v1680330426846!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          className="absolute inset-0"
          frameborder="0"
          title="map"
          marginheight="0"
          marginwidth="0"
          scrolling="yes"
        ></iframe>
      </div>
    </motion.div>
  );
};

export default SingleProject;
