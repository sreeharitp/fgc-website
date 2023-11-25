
import Banner from "@/components/ar/banner/Banner";
import ServiceContent from "@/components/ar/service/ServiceContent";
import ServiceContent2 from "@/components/ar/service/ServiceContent2";
import ServiceContent3 from "@/components/ar/service/ServiceContent3";
import React from "react";

const SingleService = () => {

const services=[
  {
    subtitle:"دعم تكنولوجيا المعلومات",
    title:"دعم تكنولوجيا المعلومات للشركات الصغيرة والمتوسطة والفرق الداخلية",
    text:"من خلال العمل مع العمليات المتوافقة مع ADHICS وISO وأفضل ممارسات الصناعة، نستخدم أنظمة وأدوات رائدة لتقديم دعم تكنولوجيا المعلومات على مستوى عالمي للشركات الصغيرة والمتوسطة وفرق تكنولوجيا المعلومات الداخلية. مع مكتب خدمة داخلي معتمد ISO 9001 و27001."
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
