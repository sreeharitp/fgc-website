
import Banner from "@/components/ar/banner/Banner";
import SolutionContent from "@/components/ar/solution/SolutionContent";
import SolutionContent2 from "@/components/ar/solution/SolutionContent2";
import React from "react";

const SingleSolution = () => {
  const solution = [
    {
      subtitle: "حلول",
      title: "الخدمات المدارة",
      text: "لماذا تقوم بتعيين شخص داخلي لتكنولوجيا المعلومات، بينما يمكنك الحصول على فريق كامل من خبراء تكنولوجيا المعلومات مقابل جزء بسيط من التكلفة؟",
    },
  ];
  return (
    <div>
      <Banner data={solution} />
     <div className="box-width">
     <SolutionContent/>
      <SolutionContent2/>
     </div>
    </div>
  );
};

export default SingleSolution;
