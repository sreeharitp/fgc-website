import React from "react";
import service from "/public/service-img.png";
import Image from "next/image";

const ServiceContent = () => {
  return (
    <div className="padding-x padding-y flex flex-col sm:flex-row justify-between gap-20">
      <div className="w-full sm:w-1/2">
        <h5 className="font-semibold text-[25px] 3xl:text-[30px] mb-5">
          All your needs and technology covered
        </h5>
        <p className=" mb-10 3xl:text-[20px] opacity-80">
          Our all-inclusive managed IT support services will maintain and manage
          your IT infrastructure, and support your staff for a fixed yearly fee.
          From day-to-day advice and troubleshooting to complex problem
          diagnosis and resolution, we’ll provide fully managed IT support
          services and straightforward Service Level Agreements.
        </p>
        <ul className="list-disc  ml-5 3xl:text-[20px] opacity-80">
          <li>All business technology supported</li>
          <li>
            Inclusive Service Desk support (remote support by tel., email, )
          </li>
          <li>Reactive desk-side support & scheduled onsite visits</li>
          <li>Scheduled preventative maintenance</li>
          <li>Automated updates & patch management</li>
          <li>Managed security & backups</li>
          <li>Bespoke preventative ransom ware protection</li>
          <li>Asset & licencing management</li>
          <li>Regular reporting for complete transparency</li>
        </ul>
      </div>
      <div className="w-full sm:w-1/2">
        <Image src={service} alt="service" className="ml-auto" />
      </div>
    </div>
  );
};

export default ServiceContent;
