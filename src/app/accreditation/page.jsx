"use client";

import Banner2 from "@/components/en/banner/Banner2";
import React, { useEffect, useState } from "react";
import contact from "public/contact.png";
import Experience from "@/components/en/about/Experience";
import MobileTimeline2 from "@/components/en/about/TimelineMobile/MobileTimeline2";
import WebTimeline2 from "@/components/en/about/TimelineWeb/WebTimeline2";

const Accreditation = () => {
  const accreditation = [
    {
      subtitle: "Accreditation",
      title: "Drive business forward by partnering with us",
      text: "Our staff has a verity of industry-recogonized certifications and degrees",
      img: contact,
      text2:
        "Rits is proud to offer award-winning software solutions. Our commitment to excellence has been recognized and celebrated. Rits is proud to offer award-winning software solutions. Our commitment to excellence has been recognized and celebrated.  Rits is proud to offer award-winning software solutions. Our commitment to excellence has been recognized and celebrated.",
    },
  ];

  const content = [
    {
      title: "How we work with our partners",
      text: "our partnersAt Tecnologia, we treat our partners with the utmost respect and expect the same in return. We believe that the key to fostering any good relationship is finding the right balance between the give and the take.We pride ourselves on striking the perfect harmony between the two so that our relationships can flourish to full potential.",
    },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        const breakpoint = 576;
        setIsMobile(window.innerWidth < breakpoint);
      };
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <div className="box-width">
      <Banner2 data={accreditation} />
      {isMobile ? <MobileTimeline2 /> : <WebTimeline2 />}
      <Experience data={content} />
    </div>
  );
};

export default Accreditation;
