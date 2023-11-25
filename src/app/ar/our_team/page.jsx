import React from "react";
import contact from "public/contact.png";
import Banner2 from "@/components/ar/banner/Banner2";
import TeamList from "@/components/ar/team/TeamList";
import Experience from "@/components/ar/about/Experience";
import Contactus3 from "@/components/ar/contactus/Contactus3";
import ContactSection from "@/components/ar/team/ContactSection";

const OurTeam = () => {
  const ourteam = [
    {
      subtitle: "فريقنا",
      title: "سوف تحظى بفرصة لتعرفنا أكثر",
      text: "يتمتع موظفونا بمجموعة من الشهادات والدرجات العلمية المعترف بها في الصناعة",
      img: contact,
      text2:
        "تفتخر شركة Rits بتقديم حلول برمجية حائزة على جوائز. لقد تم الاعتراف والاحتفال بالتزامنا بالتميز. تفتخر شركة Rits بتقديم حلول برمجية حائزة على جوائز. لقد تم الاعتراف والاحتفال بالتزامنا بالتميز. تفتخر شركة Rits بتقديم حلول برمجية حائزة على جوائز. لقد تم الاعتراف والاحتفال بالتزامنا بالتميز.",
    },
  ];

  const content = [
    {
      title: "فريق معتمد وذو خبرة",
      text: "يتم تدريب جميع الفنيين لدينا على أعلى مستوى، مع سنوات من الخبرة تحت أحزمتهم. إنهم معتمدون بالكامل (MCC، ISO) ويغطيون جميع التكنولوجيا التي تحتاجها عبر تكنولوجيا المعلومات والأمن، مع المعرفة العملية المطلوبة للحفاظ على سير أعمالك بسلاسة.",
    },
  ];

  return (
    <div>
     <div className="box-width">
        <Banner2 data={ourteam} />
        <TeamList />
        <Experience data={content} />
      </div>
      <ContactSection />
    </div>
  );
};

export default OurTeam;
