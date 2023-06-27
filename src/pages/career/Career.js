import React from "react";
import sliderImg from "../../resources/Images/hero.jpg";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

const Career = () => {
  return (
    <motion.div
      className="dark:bg-slate-600"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      {/* Hero section  */}
      <div className="group relative ">
        <img
          className="h-64 w-full object-cover grayscale  lg:h-[550px]"
          src={sliderImg}
          alt="..."
        />
        {/* <div className=" absolute top-36 left-0 flex h-0 w-full flex-col items-center justify-center bg-indigo-700 duration-500  lg:top-60 ">
          <h1 className="text-3xl text-white lg:text-6xl">Career</h1>
          <h1 className="text-xl text-white ">Join the Brownearth Family</h1>
        </div> */}
        <div className="hero-text	sticky  w-full     shadow-sm ">
          <Navbar />
        </div>
      </div>

      {/* Our Mission section  */}
      <div className="m-10  lg:mx-20 2xl:mx-36">
        <div className="my-6 flex flex-col gap-4">
          <span className="text-stone-600 dark:text-slate-200 text-2xl lg:text-4xl">
            Open Positions
          </span>
          <div className="dark:text-slate-200 text-lg">
            <div>
              {" "}
              Sorry, there are no Job opportunities currently in Brownearth
              Developments Ltd.
            </div>
            <div className="dark:text-slate-200 text-sm">
              We request you to check back again or upload your resume so that
              we can get back to you whenever there is a suitable opportunity.
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div>To submit your resume for future reference</div>
            <div>
              {" "}
              <Link
                to="/contact"
                className="rounded-md border-2 border-black bg-black p-2 text-white duration-300 hover:bg-white hover:text-black"
                aria-current="page"
              >
                Click Here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Career;
