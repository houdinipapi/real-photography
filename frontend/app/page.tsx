import Hero from "@/components/Hero";
import Instagram from "@/components/Instagram";
import Slider from "@/components/Slider";
import { SliderData } from "@/components/SliderData";

export default function Home() {
  return (
    <main>
      <div>
        <Hero heading="Achiomwa Edits" message="Elevate Your Listings with Professional Editing." />
        <Slider slides={SliderData} />
        <Instagram />
      </div>
    </main>
  );
}
