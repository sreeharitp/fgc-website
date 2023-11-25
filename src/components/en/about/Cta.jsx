import React from "react";
import Button from "../buttons/Button";

const Cta = () => {
  return (
    <div className="linear-gradient padding-y">
      <div className="padding-x padding-y box-width text-center">
      <h2 className="text-[30px] sm:text-[35px] lg:text-[40px] leading-[40px] sm:leading-[45px] lg:leading-[55px] font-semibold">
        A team built on experience
      </h2>
      <p className="mt-6 mb-16 3xl:text-[20px] opacity-80">
        FGC will act as a strategic IT partner and expert team, providing a
        bespoke service
        <br /> that is tailored to health Care needs.
      </p>
      <div className="flex justify-center">
        <Button text="Meet the team" url="" />
      </div>
    </div>
    </div>
  );
};

export default Cta;
