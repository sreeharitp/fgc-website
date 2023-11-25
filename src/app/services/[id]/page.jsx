import Banner from "@/components/en/banner/Banner";
import ServiceContent from "@/components/en/service/ServiceContent";
import ServiceContent2 from "@/components/en/service/ServiceContent2";
import ServiceContent3 from "@/components/en/service/ServiceContent3";
import React from "react";

const SingleService = () => {

const services=[
  {
    subtitle:"IT Support",
    title:"IT Support for SMEs& in-house Teams",
    text:"Working to ADHICS and ISO aligned processes and industry best practices, we use leading-edge systems and tools to deliver world-class IT support to SMEs and internal IT teams.With an ISO 9001 & 27001 accredited in-house service desk."
  }
]

  return (
    <div>
      <Banner
        data={services}
      />
      <div className="box-width">
      <ServiceContent />
      <ServiceContent2 />
      <ServiceContent3 />
      </div>
    </div>
  );
};

export default SingleService;
