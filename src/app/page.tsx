import HeroSection from "@/components/HeroSection";
import CardSection from "@/components/CardSection";
import FeaturedCourse from "@/components/FeaturedCourses";
import { StickyScrollReveal } from "@/components/StickyScroll";

export default function Home() {
  return (
    <>
      <main className=" min-h-screen bg-black//[0.96] antialiased bg-grid-white/[0.3]">
        <HeroSection></HeroSection>
        <CardSection></CardSection>
        <FeaturedCourse></FeaturedCourse>
        {/* <StickyScrollReveal></StickyScrollReveal> */}
      </main>
    </>
  );
}
