import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

import client11 from "public/client11.png";
import client12 from "public/client12.png";
import client13 from "public/client13.png";


const Clients = () => {
  return (
    <div className="padding-x padding-y ">
      <h2 className="text-[30px] sm:text-[35px] lg:text-[40px] leading-[40px] sm:leading-[45px] lg:leading-[55px] font-semibold mb-16">
      عملاء سعداء
      </h2>
      <div className="dir-ltr">
      <Marquee pauseOnHover={true} autoFill={true} direction="right">
      <Image className="mx-5 h-[105px] w-[175px] 3xl:h-[135px] 3xl:w-[205px]" src={client11} alt="client-logo"/>
        <Image className="mx-5 h-[105px] w-[175px] 3xl:h-[135px] 3xl:w-[205px]" src={client12} alt="client-logo"/>
        <Image className="mx-5 h-[105px] w-[175px] 3xl:h-[135px] 3xl:w-[205px]" src={client13} alt="client-logo"/>
      </Marquee>
      </div>
    </div>
  );
};

export default Clients;
