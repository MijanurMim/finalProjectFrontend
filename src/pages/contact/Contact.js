import React from "react";

import { motion } from "framer-motion";
import Navbar from "../../components/navbar/Navbar";
import sliderImg from "../../resources/Images/hero.jpg";
import ContactForm from "./ContactForm";
const Contact = () => {
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
          <h1 className="text-3xl text-white lg:text-6xl">Contact Us</h1>
        </div> */}
        <div className="hero-text	sticky  w-full     shadow-sm ">
          <Navbar />
        </div>
      </div>
      <ContactForm />
    </motion.div>
  );
};

export default Contact;
