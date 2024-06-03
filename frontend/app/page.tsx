import Hero from "@/components/Hero";
import Slider from "@/components/Slider";
import { SliderData } from "@/components/SliderData";

export default function Home() {
  return (
    <main>
      <div>
        <Hero heading="Achiomwa Edits" message="Elevate Your Listings with Professional Editing." />
        <Slider slides={SliderData} />
      </div>
    </main>
  );
}
