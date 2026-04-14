import MainLayout from "../layouts/MainLayout";
import Hero from "../components/home/Hero";
import FeaturedProducts from "../components/home/FeaturedProducts";
import WeeklyOffers from "../components/home/WeeklyOffers";
import WhyChooseUs from "../components/home/WhyChooseUs";
import StoreCTA from "../components/home/StoreCTA";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <WeeklyOffers />
      <FeaturedProducts />
      <WhyChooseUs />
      <StoreCTA />
    </MainLayout>
  );
}
