import React, { useEffect, useState } from "react";
import HomeContainer from "./HomeContainer";

import { useStateValue } from "../context/StateProvider";
import CartContainer from "./CartContainer";

const MainContainer = () => {
  const [{ fooditems, cartShow, cartItems }, dispatch] = useStateValue();

  // const [scrollValue, setscrollValue] = useState(0);

  // useEffect(() => {}, [scrollValue]);

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center overflow-x-hidden">
      <HomeContainer />
      {cartShow && (<CartContainer />)}
    </div>
  );
};

export default MainContainer;
