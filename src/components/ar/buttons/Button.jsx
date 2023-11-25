import Link from "next/link";
import React from "react";

const Button = ({ text, url }) => {
  return (
    <Link href={url}>
      <div className="bg-[#D02102] text-white px-6 py-3 3xl:px-9 3xl:py-4 rounded-full sm:max-w-fit text-center">
        {text}
      </div>
    </Link>
  );
};

export default Button;
