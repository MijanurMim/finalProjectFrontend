import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import sliderImg from "../../resources/Images/hero.jpg";

// import {} from "framer-motion/dist/framer-motion.dev";
import { useInView } from "react-intersection-observer";
import Navbar from "../../components/navbar/Navbar";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.4,
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
      {/* about cover section  */}
      <div className="group relative ">
        <img
          className="h-64 w-full object-cover grayscale lg:h-[550px]"
          src={sliderImg}
          alt="..."
        />
        {/* <div className=" lef-0  absolute top-80 mr-10 hidden h-0 w-full flex-col  items-start  justify-center bg-indigo-700 duration-500 md:flex  lg:mx-36 ">
          <h1 className="text-3xl text-white ">ABOUT US</h1>
        </div> */}
        <div className="hero-text	sticky  w-full     shadow-sm ">
          <Navbar />
        </div>
      </div>

      {/* Our Mission section  */}
      <div className="m-6  lg:m-20 2xl:mx-36">
        <div className="my-6 flex flex-col">
          <span className="text-stone-600 dark:text-slate-200 text-4xl">
            Total Quality
          </span>
          <span className="dark:text-slate-200 text-lg">
            Behind this success is Total Quality Management
          </span>
        </div>

        <div className="dark:text-slate-200 grid grid-cols-1 gap-6  font-light lg:grid-cols-3">
          <div>
            Brownearth Developments Ltd.an energetic and contemporary future in
            property services. We like to think different and be different, but
            we combine that with our traditional and familiar practices of
            providing no nonsense, down to earth advice and service.
          </div>
          <div>
            We offer an advanced and innovative approach towards real estate and
            how to market, lease and sell property using new and progressive
            marketing platforms and methods, particularly within the
            ever-expanding digital era of marketing and all that it has to
            offer.
          </div>
          <div>
            Brownearth Developments Ltd. we love talking about real estate and
            connecting with people from all walks of life. We would invite
            anyone to drop in, speak to our team and see what we are all about!
          </div>
        </div>
      </div>

      <div>
        <img
          className="h-64 w-full object-cover grayscale  lg:h-[550px]"
          src={sliderImg}
          alt=""
        />
      </div>

      {/* Design Excellence section  */}
      <div ref={ref} className="m-6  lg:m-20 2xl:m-36">
        <motion.div animate={animation} className="my-6 flex flex-col">
          <span className="text-stone-600 dark:text-slate-200 text-4xl">
            Design Excellence
          </span>
          <span className="dark:text-slate-200 text-lg">
            Our buildings are characterized by their avant-garde design with
            contemporary lines and a clean look
          </span>
        </motion.div>

        <motion.div
          animate={animation}
          className="dark:text-slate-200 grid grid-cols-1 gap-6  font-light lg:grid-cols-3"
        >
          <div>
            Brownearth Developments Ltd.an energetic and contemporary future in
            property services. We like to think different and be different, but
            we combine that with our traditional and familiar practices of
            providing no nonsense, down to earth advice and service.
          </div>
          <div>
            We offer an advanced and innovative approach towards real estate and
            how to market, lease and sell property using new and progressive
            marketing platforms and methods, particularly within the
            ever-expanding digital era of marketing and all that it has to
            offer.
          </div>
          <div>
            Brownearth Developments Ltd. we love talking about real estate and
            connecting with people from all walks of life. We would invite
            anyone to drop in, speak to our team and see what we are all about!
          </div>
        </motion.div>
      </div>

      <div>
        <img
          className="h-64 w-full object-cover grayscale  lg:h-[550px]"
          src={sliderImg}
          alt=""
        />
      </div>

      <div className="m-6 lg:m-20  2xl:m-36">
        <div className="my-6 flex flex-col">
          <span className="text-stone-600 dark:text-slate-200 my-4 text-4xl">
            Our Clients
          </span>
          <span className="text-md dark:text-slate-200">
            Our corporate clients have set high standards for themselves and
            expect us to continue to deliver unmatched quality. On the other
            hand our residential clientele are equally discerning, preserving
            their privacy and delivering value is of the utmost importance to
            us.
          </span>
        </div>
      </div>

      {/* card overlay animation  */}
      {/* <div class="p-10">
        <div class="group relative w-96">
          <img
            class="w-full object-cover"
            src="https://www.kindacode.com/wp-content/uploads/2022/06/t-shirt-example.png"
          />
          <div class="absolute top-0 left-0 flex h-0 w-full flex-col items-center justify-center bg-indigo-700 opacity-0 duration-500 group-hover:h-full group-hover:opacity-100">
            <h1 class="text-2xl text-white">Fiction T-Shirt Store</h1>
            <a
              class="mt-5 rounded-full bg-amber-400 px-8 py-3 duration-300 hover:bg-amber-600"
              href="#"
            >
              Continue Shopping
            </a>
          </div>
        </div>
      </div> */}

      {/* Our mission section  */}
      {/* <div className="containerx">
        <img src={aboutCover} alt="Avatar" className="imagex" />
        <div className="overlayx">
          <div className="textx">Hello World</div>
        </div>
      </div> */}
    </motion.div>
  );
};

export default About;
