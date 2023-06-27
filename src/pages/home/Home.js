import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

import sliderImg from "../../resources/Images/hero.jpg";
import { motion, useAnimation } from "framer-motion";
// import {} from "framer-motion/dist/framer-motion.dev";
import { useInView } from "react-intersection-observer";
import Slider from "../../components/slider/Slider";

const Home = () => {
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
          bounce: 0.2,
        },
      });
    }
    if (!inView) {
      animation.start({ x: "-100vw" });
    }
  }, [inView, animation]);
  return (
    <motion.div
      className="dark:bg-slate-600"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <Slider />

      {/* landowner section  */}
      {/* <div className="m-10 grid grid-cols-1 gap-4 md:grid-cols-4  lg:my-10      lg:mx-36  lg:gap-6  ">
        <div></div>
        <Link
          to="/contact"
          className="flex cursor-pointer flex-col items-center justify-center bg-stone-100 p-10   text-stone-600 shadow-lg duration-300 hover:scale-105 dark:bg-slate-500 dark:text-slate-200 2xl:p-20"
        >
          <div className="text-4xl xl:text-6xl">
            <BiLandscape />
          </div>
          <div className="xl:text-xl">LANDOWNER</div>
          <div className="text-sm">
            Realize the full potential of your Land.
          </div>
        </Link>

        <Link
          to="/contact"
          className="flex cursor-pointer flex-col items-center justify-center bg-stone-100 p-6  text-stone-600 shadow-lg duration-300 hover:scale-105 dark:bg-slate-500 dark:text-slate-200"
        >
          <div className="text-6xl">
            <TbHomeDollar />
          </div>
          <div className="text-xl">BUYER</div>
          <div className="text-sm">Let us show you the possibilities.</div>
        </Link>

        <Link
          to="contact"
          className="flex cursor-pointer flex-col items-center justify-center bg-stone-100 p-6  text-stone-600 shadow-lg duration-300 hover:scale-105 dark:bg-slate-500 dark:text-slate-200"
        >
          <div className="text-6xl">
            {" "}
            <TbBrandGoogleBigQuery />
          </div>
          <div className="text-xl">OTHERS</div>
          <div className="text-sm"> Get in touch with us. </div>
        </Link>
      </div> */}

      {/* Home Overview Section  */}
      <div className="m-10 mb-20 flex flex-col items-center justify-center gap-8 text-center lg:mx-36">
        <div className="text-stone-600 text-xl font-medium lg:text-3xl">
          Deluxe Abodes Redefining Sophistication
        </div>
        <div className="text-sm">
          Brownearth Developments Ltd. an energetic and contemporary future in
          property services. We like to think different and be different, but we
          combine that with our traditional and familiar practices of providing
          no nonsense, down to earth advice and service.
        </div>
        <div>
          <Link
            to="/about"
            className="cursor-pointer border border-black px-20 py-3 duration-500 hover:bg-black hover:text-white"
          >
            EXPLORE
          </Link>
        </div>
      </div>

      <div className="flex min-h-[500px] items-center  justify-center bg-homeParalax bg-cover  bg-fixed bg-center bg-no-repeat xl:min-h-[700px]  "></div>

      {/* Features Work Section  */}
      <div
        ref={ref}
        className="m-10  grid grid-cols-1 gap-2 lg:mx-36  lg:my-10      lg:grid-cols-4  lg:gap-6  "
      >
        <div className="text-stone-600 dark:text-slate-200    flex text-3xl uppercase tracking-wider   md:items-center lg:text-4xl	 ">
          FEATURED <br /> WORK
        </div>

        <motion.div
          animate={animation}
          className="group relative cursor-pointer"
        >
          <img
            className="aspect-square h-full w-full object-cover"
            src={sliderImg}
            alt=""
          />
          <div class="bg-blur dark:bg-slate-500 absolute top-0 left-0 flex h-0 w-full flex-col items-center justify-center border-b-2 opacity-0 backdrop-blur-md duration-500 group-hover:h-[50%] group-hover:opacity-100">
            <h1 class="text-slate-200 text-lg uppercase tracking-wide lg:text-xl 2xl:text-2xl">
              Brownearth Urbanica
            </h1>
            <Link
              to="/projects"
              class="hover:bg-stone-300 dark:bg-slate-600 dark:text-slate-200 dark:hover:bg-slate-700 mt-5 rounded-full bg-white px-8 py-3 duration-300 "
              href="#"
            >
              Project Details
            </Link>
          </div>
        </motion.div>
        <div className="group relative cursor-pointer">
          <img
            className=" aspect-square  h-full w-full object-cover  lg:h-[400px] 2xl:h-[600px] "
            src={sliderImg}
            alt=""
          />
          <div class="bg-blur dark:bg-slate-500 absolute top-0 left-0 flex h-0 w-full flex-col items-center justify-center border-b-2 opacity-0 backdrop-blur-md duration-500 group-hover:h-[50%] group-hover:opacity-100">
            <h1 class="text-slate-200 text-lg uppercase tracking-wide lg:text-xl 2xl:text-2xl">
              Brownearth Urbanica
            </h1>
            <Link
              to="/projects"
              class="hover:bg-stone-300 dark:bg-slate-600 dark:text-slate-200 dark:hover:bg-slate-700 mt-5 rounded-full bg-white px-8 py-3 duration-300 "
              href="#"
            >
              Project Details
            </Link>
          </div>
        </div>
        <div className="group relative cursor-pointer">
          <img
            className="aspect-square h-full w-full object-cover"
            src={sliderImg}
            alt=""
          />
          <div class="bg-blur dark:bg-slate-500 absolute top-0 left-0 flex h-0 w-full flex-col items-center justify-center border-b-2 opacity-0 backdrop-blur-md duration-500 group-hover:h-[50%] group-hover:opacity-100">
            <h1 class="text-slate-200 text-lg uppercase tracking-wide lg:text-xl 2xl:text-2xl">
              Brownearth Urbanica
            </h1>
            <Link
              to="/projects"
              class="hover:bg-stone-300 dark:bg-slate-600 dark:text-slate-200 dark:hover:bg-slate-700 mt-5 rounded-full bg-white px-8 py-3 duration-300 "
              href="#"
            >
              Project Details
            </Link>
          </div>
        </div>
      </div>

      <div className="aspect-video lg:mx-36   ">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=lC6b85dQQCI"
          width="100%"
          height="80%"
          controls={true}
          muted={false}
        />
      </div>

      <div className="mb-6 grid  grid-cols-1 gap-2  xl:grid-cols-3 xl:bg-black        ">
        <div className="text-stone-600 dark:text-slate-200    mx-10 flex text-3xl uppercase tracking-wider md:items-center  lg:mx-36   lg:text-4xl xl:text-white	 ">
          FOOTPRINTS
        </div>
        <div className=" xl:col-span-2">
          {" "}
          <div className="relative    h-[580px] overflow-hidden   bg-gray-300 ">
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
        </div>
      </div>

      {/* Collection section  */}
      {/* <div className="mb-10 bg-black">
        <div className="mx-10 flex flex-col items-center justify-between gap-2  py-6 text-white md:flex-row lg:mx-36">
          <div className=" lg:text-xl">LUXURY COLLECTION </div>

          <div className="flex gap-1 sm:gap-4">
            <button className="border  p-2 px-4 text-xs   font-medium transition-all duration-300 hover:bg-white hover:text-black">
              DHAKA
            </button>

            <button className="border p-1 px-1 text-xs transition-all duration-300 hover:bg-white  hover:text-black sm:p-2 sm:px-4  ">
              VIEW OFFERS
            </button>
          </div>
        </div>
        <div className="aspect-video lg:aspect-[20/6]   ">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=lC6b85dQQCI"
            width="100%"
            height="100%"
            controls={true}
            muted={false}
          />
        </div>

        <div className="mx-10 flex flex-col items-center justify-between gap-2  py-6 text-white md:flex-row lg:mx-36">
          <div className=" lg:text-xl">CLASSIC COLLECTION </div>

          <div className="flex gap-1 sm:gap-4">
            <button className="border  p-2 px-4 text-xs   font-medium transition-all duration-300 hover:bg-white hover:text-black">
              DHAKA
            </button>
            <button className="border  p-2 px-4 text-xs   font-medium transition-all duration-300 hover:bg-white hover:text-black">
              CHATTOGRAM
            </button>
            <button className="border p-1 px-1 text-xs transition-all duration-300 hover:bg-white  hover:text-black sm:p-2 sm:px-4  ">
              VIEW OFFERS
            </button>
          </div>
        </div>
        <div className="aspect-video lg:aspect-[20/6]   ">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=lC6b85dQQCI"
            width="100%"
            height="100%"
            controls={true}
            muted={false}
          />
        </div>

        <div className="mx-10 flex flex-col items-center justify-between gap-2  py-6 text-white md:flex-row lg:mx-36">
          <div className=" lg:text-xl">COMMERCIAL COLLECTION </div>

          <div className="flex gap-1 sm:gap-4">
            <button className="border  p-2 px-4 text-xs   font-medium transition-all duration-300 hover:bg-white hover:text-black">
              DHAKA
            </button>
            <button className="border  p-2 px-4 text-xs   font-medium transition-all duration-300 hover:bg-white hover:text-black">
              CHATTOGRAM
            </button>
            <button className="border p-1 px-1 text-xs transition-all duration-300 hover:bg-white  hover:text-black sm:p-2 sm:px-4  ">
              VIEW OFFERS
            </button>
          </div>
        </div>
        <div className="aspect-video lg:aspect-[20/6]   ">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=lC6b85dQQCI"
            width="100%"
            height="100%"
            controls={true}
            muted={false}
          />
        </div>
      </div> */}

      {/* sustain section  */}
      {/* Hero section  */}
      {/* <div className="group relative my-10 lg:my-20  ">
        <img
          className="h-64 w-full object-cover  lg:h-[400px]"
          src={sustainCover}
          alt="..."
        />
        <div className="absolute top-36   flex h-0 w-full flex-col items-start justify-center gap-4  text-white duration-500 lg:left-40  lg:top-60 ">
          <h1 className="ml-10 text-lg tracking-wide lg:text-3xl	  ">
            Sustainable Development
          </h1>
          <h1 className="ml-10 text-sm	tracking-wider lg:text-base ">
            To Know More
          </h1>
          <Link
            to="/about"
            className="ml-10 border-2 p-1 tracking-wide	duration-300 hover:bg-green-900 lg:px-3 lg:py-2"
          >
            Click Here
          </Link>
        </div>
      </div> */}
    </motion.div>
  );
};

export default Home;
