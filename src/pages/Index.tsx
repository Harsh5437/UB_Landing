import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import NavigationBar from "@/components/NavigationBar";
import ImageSlider from "@/components/ImageSlider";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

// Import slider images
import slider1 from "@/assets/slider-1.jpg";
import slider2 from "@/assets/slider-2.jpg";
import slider3 from "@/assets/slider-3.jpg";
import slider4 from "@/assets/slider-4.jpg";
import slider5 from "@/assets/slider-5.jpg";
import slider6 from "@/assets/slider-6.jpg";

const sliderImages = [
  { id: 1, src: slider1, alt: "Traffic Junction Design" },
  { id: 2, src: slider2, alt: "GAD Design"},
  { id: 3, src: slider3, alt: "Roorkee 4-Lane Design" },
  { id: 4, src: slider4, alt: "Crossection of 4-Lane " },
  { id: 5, src: slider5, alt: "Wedding Hall Design" },
  { id: 6, src: slider6, alt: "Rest House Design" },
];

const Index = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background Animation */}
      <AnimatedBackground />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex flex-col">
        {/* Hero Section */}
        <HeroSection />

        {/* Navigation Buttons Bar */}
        <div className="flex justify-center">
          <NavigationBar />
        </div>

        {/* Image Slider */}
        <ImageSlider images={sliderImages} />

        {/* CTA Section */}
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
