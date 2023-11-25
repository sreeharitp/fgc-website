"use client";
import React, { useEffect, useState } from "react";
import contact from "public/contact.png";
import Banner2 from "@/components/ar/banner/Banner2";
import Experience from "@/components/ar/about/Experience";
import MobileTimeline2 from "@/components/ar/about/TimelineMobile/MobileTimeline2";
import WebTimeline2 from "@/components/ar/about/TimelineWeb/WebTimeline2";

const Accreditation = () => {
  const accreditation = [
    {
      subtitle: "الاعتماد الاكاديمي",
      title: "دفع الأعمال إلى الأمام من خلال الشراكة معنا",
      text: "يتمتع موظفونا بمجموعة من الشهادات والدرجات العلمية المعترف بها في الصناعة",
      img: contact,
      text2:
        "تفتخر شركة Rits بتقديم حلول برمجية حائزة على جوائز. لقد تم الاعتراف والاحتفال بالتزامنا بالتميز. تفتخر شركة Rits بتقديم حلول برمجية حائزة على جوائز. لقد تم الاعتراف والاحتفال بالتزامنا بالتميز. تفتخر شركة Rits بتقديم حلول برمجية حائزة على جوائز. لقد تم الاعتراف والاحتفال بالتزامنا بالتميز.",
    },
  ];

  const content = [
    {
      title: "كيف نعمل مع شركائنا",
      text: "شركاؤنا في شركة Tecnologia، نتعامل مع شركائنا بأقصى قدر من الاحترام ونتوقع نفس الشيء في المقابل. نحن نؤمن بأن مفتاح تعزيز أي علاقة جيدة هو إيجاد التوازن الصحيح بين الأخذ والعطاء. ونحن نفخر بتحقيق الانسجام التام بين الاثنين حتى تزدهر علاقاتنا إلى أقصى إمكاناتها.",
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
