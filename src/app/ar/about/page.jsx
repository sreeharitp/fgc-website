"use client";
import Cta from "@/components/ar/about/Cta";
import Experience from "@/components/ar/about/Experience";
import Features from "@/components/ar/about/Features";
import MobileTimeline from "@/components/ar/about/TimelineMobile/MobileTimeline";
import WebTimeline from "@/components/ar/about/TimelineWeb/WebTimeline";
import Title from "@/components/ar/about/Title";
import Whyus from "@/components/ar/about/Whyus";
import Contactus from "@/components/ar/contactus/Contactus";
import React, { useEffect, useState } from "react";

const About = () => {
  const content = [
    {
      title: "دعم تكنولوجيا المعلومات مُدار بالكامل للشركات الصغيرة والمتوسطة",
      text: "ستعمل FGC كشريك استراتيجي في مجال تكنولوجيا المعلومات وفريق من الخبراء، حيث تقدم خدمة مخصصة مصممة خصيصًا لتلبية احتياجات الرعاية الصحية. ستعمل FGC كشريك استراتيجي في مجال تكنولوجيا المعلومات وفريق من الخبراء، حيث تقدم خدمة مخصصة مصممة خصيصًا لتلبية احتياجات الرعاية الصحية. خدمة مصممة خصيصًا لتلبية احتياجات الرعاية الصحية. ستعمل FGC كشريك استراتيجي في مجال تكنولوجيا المعلومات وخدمة خبرة مصممة خصيصًا لتلبية احتياجات الرعاية الصحية. ستعمل FGC كشريك استراتيجي في مجال تكنولوجيا المعلومات",
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
