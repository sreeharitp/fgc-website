import Clients from '@/components/ar/clients/Clients'
import Contactus from '@/components/ar/contactus/Contactus'
import Counter from '@/components/ar/counter/Counter'
import Slider from '@/components/ar/heroslider/Slider'
import Partners from '@/components/ar/partner/Partners'
import Service from '@/components/ar/service/Service'
import Solution from '@/components/ar/solution/Solution'
import Testimonial from '@/components/ar/testimonial/Testimonial'
import React from 'react'

const HomeArabic = () => {
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
  )
}

export default HomeArabic