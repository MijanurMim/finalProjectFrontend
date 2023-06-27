import React from "react";
import { Triangle } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className=" flex  justify-center items-center ">
      <Triangle
        height="100"
        width="100"
        color="#83856B"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
