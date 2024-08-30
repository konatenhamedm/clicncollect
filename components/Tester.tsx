import React from "react";
import SideSlide from "../components/slides/SideSlide";
import PubSousCategorieTester from "../components/slides/PubSousCategorieTester";

function Tester() {
  return (
    <div className=" flex-col w-full pt-4 top-10 pb-7">
      {/* <div> */}
      <PubSousCategorieTester ordre={1} />

      {/*  </div> */}
    </div>
  );
}

export default Tester;
