import Clients from "@/components/en/clients/Clients";
import Contactus from "@/components/en/contactus/Contactus";
import Counter from "@/components/en/counter/Counter";
import Slider from "@/components/en/heroslider/Slider";
import Partners from "@/components/en/partner/Partners";
import Service from "@/components/en/service/Service";
import Solution from "@/components/en/solution/Solution";
import Testimonial from "@/components/en/testimonial/Testimonial";

export default function Home() {
  return (
    <div>
      <Slider />
      <div className="box-width">
        <Counter />
        <Service />
      </div>
      <Solution />
      <div className="box-width">
        <Testimonial />
        <Clients />
        <Contactus />
        <Partners />
      </div>
    </div>
  );
}
