import AssetType from "@/components/AssetType";
import CardSection from "@/components/Card";
import FAQ from "@/components/FAQ";
import Floating from "@/components/Floating";
import Hero from "@/components/Hero";
import InvestmentJourney from "@/components/Journey";
import Popup from "@/components/Popup";
import PropertyCard from "@/components/PropertyCard";
import SocialProof from "@/components/SocialProof";
import Tesing from "@/components/Testing";
import TheWhy from "@/components/TheWhy";

export default function Home() {
  const title = "The modern way for anyone to invest in real estate!";
  const subtitle = "Get 12% Rental ROI & 25% Combined ROI 💹";

  return (
    <main className="bg-white-3 overflow-hidden">
      {/* Render Popup */}
      <Popup />

      {/* Hero Section */}
      <Hero title={title} subtitle={subtitle} />

      {/* Card Section */}
      <CardSection />

      {/* Asset Type Section */}
      <AssetType />

      {/* Social Proof */}
      <SocialProof />

      {/* Investment Journey */}
      <InvestmentJourney />

      {/* The Why */}
      <TheWhy />

      {/* Property Card Section */}
      <PropertyCard />

      {/* FAQ */}
      <FAQ />

      {/* Floating Icons */}
      <Floating />
    </main>
  );
}
