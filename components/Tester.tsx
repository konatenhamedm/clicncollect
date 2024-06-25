import React from "react";
import SideSlide from "../components/slides/SideSlide";
import PubSousCategorieTester from "../components/slides/PubSousCategorieTester";

function Tester() {
  return (
    <div className=" flex-col w-full pt-4 top-10 pb-7">
      <div>
        <PubSousCategorieTester ordre={1} />
      </div>
      {/*  <div> */}
      {/* <div className="md:grid md:grid-cols-1 grid lg:grid-cols-4 gap-2">
        <SideSlide
          titre="B2B"
          desc="Citation"
          image="https://akam.cdn.jdmagicbox.com/images/icons/website/newhome/1/b2b.png?v=1.01?w=1920&q=75"
        />
        <SideSlide
          titre="Expert"
          desc="Service de maison"
          image="https://akam.cdn.jdmagicbox.com/images/icons/website/newhome/1/xperts.png?v=1.0?w=1920&q=75"
        />
        <SideSlide
          titre="Immobilier"
          desc="Les meilleurs agents"
          image="https://akam.cdn.jdmagicbox.com/images/icons/website/newhome/1/realestate.png?v=1.0?w=1920&q=75"
        />
        <SideSlide
          titre="Docteurs"
          desc="Reserves maintenant"
          image="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/web_doctor_image.png?v=1.0?w=1920&q=75"
        />
      </div> */}
    </div>
  );
}

export default Tester;
