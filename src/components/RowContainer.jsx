import React, { useEffect, useRef, useState } from "react";
import { MdShoppingCart } from "react-icons/md";
import { motion } from "framer-motion";
import NotFound from "../img/NotFound.svg";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const RowContainer = ({ flag, data }) => {
  const rowContainer = useRef();
  const [{ cartItems }, dispatch] = useStateValue();

  const addToCart = (item) => {
    const newCartItems = [...cartItems, item];
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    dispatch({
      type: actionType.SET_CART_ITEMS,
      cartItems: newCartItems,
    });
  };

  return (
    <div
      ref={rowContainer}
      className={`w-full  flex items-center my-12 scroll-smooth ${
        flag
          ? "overflow-x-scroll scrollbar-none"
          : "overflow-x-hidden flex-wrap justify-center"
      }`}
    >
      {data && data.length > 0 ? (
        data.map((item) => (
          <div
            key={item.id}
            className="w-300  min-w-[300px] md:w-340 md:min-w-[340px] h-auto 
             bg-cardOverlay rounded-lg p-2 my-12   backdrop-blur-lg hover:drop-shadow-lg items-center justify-items-end"
          >
            <div className="w-full flex  items-center justify-between">
              <motion.div
                className="w-40 h-40 -mt-8 drop-shadow-2xl"
                whileTap={{ scale: 1.2 }}
              >
                <img
                  src={item?.imageURL}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </motion.div>

              <motion.div
                whileTap={{ scale: 0.75 }}
                className="w-8 h-8 rounded-full  bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md"
                onClick={() => addToCart(item)}
              >
                <MdShoppingCart className="text-white" />
              </motion.div>
            </div>
            <div className="w-full flex flex-col  items-end justify-end">
              <p className="text-textColor font-semibold text-base md:text-lg">
                {item?.title}
              </p>
              <div className="flex-items-center gap-8">
                <p className="text-lg text-headingColor font-semibold">
                  <span className="text-sm text-red-500">Rs.</span>
                  {item?.price}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="w-full flex flex-col items-center justify-center">
          <img src={NotFound} alt="Not found " className="h-340" />
          <p className="text-xl text-headingColor font-semibold my-2">
            Items not available
          </p>
        </div>
      )}
    </div>
  );
};

export default RowContainer;
