import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PricingSection from "@/components/sections/PricingSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import ContactsSection from "@/components/sections/ContactsSection";
import GeographySection from "@/components/sections/GeographySection";
import Footer from "@/components/sections/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServicesSection />
      <PricingSection />
      <ReviewsSection />
      <ContactsSection />
      <GeographySection />
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;