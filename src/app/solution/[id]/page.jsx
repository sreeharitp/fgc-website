import Banner from "@/components/en/banner/Banner";
import SolutionContent from "@/components/en/solution/SolutionContent";
import SolutionContent2 from "@/components/en/solution/SolutionContent2";
import React from "react";

const SingleSolution = () => {
  const solution = [
    {
      subtitle: "Solutions",
      title: "Managed Services",
      text: "Why hire an internal IT person, when you can have an entire team of IT experts for a fraction of the cost?",
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
