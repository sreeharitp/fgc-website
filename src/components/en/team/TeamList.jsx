import React from "react";
import member1 from "public/member1.png";
import member2 from "public/member2.png";
import member3 from "public/member3.png";
import member4 from "public/member4.png";
import Image from "next/image";

const teamList = [
  {
    id: 1,
    img: member1,
    name: "Mat Zalman",
    designation: "CEO",
  },
  {
    id: 2,
    img: member2,
    name: "Sofya",
    designation: "HR",
  },
  {
    id: 3,
    img: member3,
    name: "Mat Zalman",
    designation: "Co-president",
  },
  {
    id: 4,
    img: member4,
    name: "Angel",
    designation: "Marketing Director",
  },
  {
    id: 5,
    img: member1,
    name: "Mat Zalman",
    designation: "CEO",
  },
  {
    id: 6,
    img: member2,
    name: "Sofya",
    designation: "HR",
  },
  {
    id: 7,
    img: member3,
    name: "Mat Zalman",
    designation: "Co-president",
  },
  {
    id: 8,
    img: member4,
    name: "Angel",
    designation: "Marketing Director",
  },
];

const TeamList = () => {
  return (
    <div className="padding-x padding-y">
      <h2 className="text-[30px] sm:text-[35px] lg:text-[40px] leading-[40px] sm:leading-[45px] lg:leading-[55px] font-semibold mb-10">
        Meet the team
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {teamList.map((items) => (
          <div key={items.id}>
            <Image src={items.img} alt="team-member"/>
            <h6 className="text-[18px] sm:text-[20px] 3xl:text-[24px] font-semibold mt-3">{items.name}</h6>
            <p className="text-[16px]">{items.designation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamList;
