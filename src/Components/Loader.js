import React from "react";
import { ThreeDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="loader-container">
      <ThreeDots
        visible={true}
        height="150"
        width="150"
        color="#6c9898"
        radius="10"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
