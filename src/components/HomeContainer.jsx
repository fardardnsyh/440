import React from "react";
import { useNavigate } from "react-router-dom";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import { herodata } from "../utils/data";

const HomeContainer = () => {
  const navigate = useNavigate();
  const navigatetoMenu = () => {
    navigate("/menu");
  };

  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full "
      id="home"
    >
      <div className="py-2 flex-1 flex-col items-start  justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">Order</p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl ">
            <img
              src={Delivery}
              className="w-full h-full object-contain"
              alt="delivery"
            />
          </div>
          <p className="text-base text-orange-500 font-semibold">Delivery</p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl ">
            <img
              src={Delivery}
              className="w-full h-full object-contain"
              alt="delivery"
            />
          </div>
          <p className="text-base text-orange-500 font-semibold">Repeat</p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl ">
            <img
              src={Delivery}
              className="w-full h-full object-contain"
              alt="delivery"
            />
          </div>
        </div>

        <p className="text-[2.5rem]  lg:text-[4.5rem] font-bold tracking-wide text-headingColor ">
          Faaaaaastest delivery to you in{" "}
          <span className="text-orange-600 text-[3rem] lg:text-[5rem]">
            Minutes
          </span>
        </p>

        <p className="text-2xl text-textColor font-semibold text-center md:text-left md:w-[80%]">
          Discover good food for good mood 
        </p>

        <button
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2  
      rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 "
          onClick={navigatetoMenu}
        >
          Order now
        </button>
      </div>
      <div className="py-2 flex-1 ">
        <div className="py-2 flex-1 items-center relative">
          <img src={HeroBg} className="ml-auto lg:h-650" alt="hero-bg" />

          <div className="w-full h-full top-0 left-0 absolute flex items-center justify-center px-32 py-4 gap-4 flex-wrap">
            {herodata &&
              herodata.map((item) => (
                <div
                  key={item.id}
                  className="w-190  min-w-[190px] p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
                >
                  <img src={item.imagesrc} className="w40 -mt-20" alt="I1" />
                  <p className="text-xl font-semibold  text-textColor mt-4">
                    {item.name}
                  </p>
                  <p className="text-md text-lighttextGray my-3">{item.desc}</p>
                  <p className="text-sm font-semibold text-headingColor ">
                    <span className="text-xs text-green-600">Rs.</span>
                    {item.price}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
