import Banner2 from "@/components/en/banner/Banner2";
import React from "react";
import contact from "public/contact.png";
import TeamList from "@/components/en/team/TeamList";
import Contactus3 from "@/components/en/contactus/Contactus3";
import Experience from "@/components/en/about/Experience";
import ContactSection from "@/components/en/team/ContactSection";

const OurTeam = () => {
  const ourteam = [
    {
      subtitle: "Our Team",
      title: "Get to know  us better",
      text: "Our staff has a verity of industry-recogonized certifications and degrees",
      img: contact,
      text2:
        "Rits is proud to offer award-winning software solutions. Our commitment to excellence has been recognized and celebrated. Rits is proud to offer award-winning software solutions. Our commitment to excellence has been recognized and celebrated.  Rits is proud to offer award-winning software solutions. Our commitment to excellence has been recognized and celebrated.",
    },
  ];

  const content = [
    {
      title: "Certified & experienced team",
      text: "All of our technicians are trained to the highest level, with years of experience under their belts. They’re fully accredited, (MCC, ISO) covering all the technology you require across IT, and security, with the hands-on knowledge required to keep your business running smoothly.",
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
