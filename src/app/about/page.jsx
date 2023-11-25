"use client";

import Cta from "@/components/en/about/Cta";
import Experience from "@/components/en/about/Experience";
import Features from "@/components/en/about/Features";
import MobileTimeline from "@/components/en/about/TimelineMobile/MobileTimeline";
import WebTimeline from "@/components/en/about/TimelineWeb/WebTimeline";
import Title from "@/components/en/about/Title";
import Whyus from "@/components/en/about/Whyus";
import Contactus from "@/components/en/contactus/Contactus";
import React, { useEffect, useState } from "react";

const About = () => {
  const content = [
    {
      title: "Fully managed IT support for SMEs",
      text: "FGC will act as a strategic IT partner and expert team, providing a bespoke service that is tailored to health Care needs. FGC will act as a strategic IT partner and expert team, providing a bespoke service that is tailored to health Care needs. service that is tailored to health Care needs. FGC will act as a strategic IT partner and exper service that is tailored to health Care needs. FGC will act as a strategic IT partner and",
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
    <div>
      <Title />
      {isMobile ? <MobileTimeline /> : <WebTimeline />}
      <div className="box-width">
        <Whyus />
        <Features />
      </div>
      <Cta />
      <div className="box-width">
        <Experience data={content} />
        <Contactus />
      </div>
    </div>
  );
};

export default About;
