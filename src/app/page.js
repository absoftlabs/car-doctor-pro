import AboutUs from "@/components/Home/AboutUs";
import Info from "@/components/Home/Info";
import Products from "@/components/Home/Products";
import Slider from "@/components/Home/Slider";
import Team from "@/components/Home/Team";
import WhatCustomerSays from "@/components/Home/WhatCustomerSays";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import ServicesSection from "@/components/Services/ServicesSection";

export default function Home() {
  return (
    <div>
      <Slider/>
      <AboutUs/>
      <ServicesSection/>
      <Info/>
      <Products/>
      <Team/>
      <WhyChooseUs/>
      <WhatCustomerSays/>
    </div>
  );
}
