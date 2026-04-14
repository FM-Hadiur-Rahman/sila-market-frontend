import MainLayout from "../layouts/MainLayout";
import Hero from "../components/home/Hero";
import OfferBanner from "../components/home/OfferBanner";
import CategorySection from "../components/home/CategorySection";
import WeeklyOffers from "../components/home/WeeklyOffers";
import FeaturedProducts from "../components/home/FeaturedProducts";
import WhyChooseUs from "../components/home/WhyChooseUs";
import CTASection from "../components/home/CTASection";
import StoreInfo from "../components/home/StoreInfo";
import TestimonialSection from "../components/home/TestimonialSection";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <OfferBanner />
      <CategorySection />
      <WeeklyOffers />
      <FeaturedProducts />
      <WhyChooseUs />
      <TestimonialSection />
      <CTASection />
      <StoreInfo />
    </MainLayout>
  );
}
