import React from "react";
import service from "/public/service-img.png";
import Image from "next/image";

const ServiceContent = () => {
  return (
    <div className="padding-x padding-y flex flex-col sm:flex-row justify-between gap-20">
      <div className="w-full sm:w-1/2 ">
        <h5 className="font-semibold text-[25px] 3xl:text-[30px] mb-5">
          جميع احتياجاتك والتكنولوجيا مغطاة
        </h5>
        <p className="mb-10 3xl:text-[20px] opacity-80">
          ستحافظ خدمات دعم تكنولوجيا المعلومات المُدارة والشاملة لدينا على
          البنية التحتية لتكنولوجيا المعلومات لديك وإدارتها، وستدعم موظفيك مقابل
          رسوم سنوية ثابتة. بدءًا من النصائح اليومية واستكشاف الأخطاء وإصلاحها
          وحتى تشخيص المشكلات المعقدة وحلها، سنوفر خدمات دعم تكنولوجيا المعلومات
          المُدارة بالكامل واتفاقيات مستوى الخدمة المباشرة.
        </p>
        <ul className="list-disc 3xl:text-[20px] opacity-80 mr-5">
          <li>جميع تكنولوجيا الأعمال المدعومة</li>
          <li>
            دعم مكتب الخدمة الشامل (الدعم عن بعد عبر الهاتف والبريد الإلكتروني)
          </li>
          <li>الدعم التفاعلي من جانب المكتب والزيارات الميدانية المجدولة</li>
          <li>الصيانة الوقائية المجدولة</li>
          <li>التحديثات التلقائية وإدارة التصحيح</li>
          <li>إدارة الأمن والنسخ الاحتياطي</li>
          <li>حماية مخصصة لبرامج الفدية الوقائية</li>
          <li>إدارة الأصول والتراخيص</li>
          <li>تقارير منتظمة للشفافية الكاملة</li>
        </ul>
      </div>
      <div className="w-full sm:w-1/2">
        <Image src={service} alt="service" className="mr-auto"/>
      </div>
    </div>
  );
};

export default ServiceContent;
