import Info from "@/components/Home/Info";
import Products from "@/components/Home/Products";
import Slider from "@/components/Home/Slider";
import ServicesSection from "@/components/Services/ServicesSection";

export default function Home() {
  return (
    <div>
      <Slider/>
      <ServicesSection/>
      <Info/>
      <Products/>
    </div>
  );
}
