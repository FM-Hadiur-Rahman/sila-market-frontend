import { useEffect, useMemo, useState } from "react";
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
import { getProducts } from "../services/productService";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadHomeData = async () => {
      try {
        setLoading(true);
        const res = await getProducts();
        setProducts(res.data || []);
      } catch (error) {
        console.error("Failed to load home products:", error.message);
      } finally {
        setLoading(false);
      }
    };

    loadHomeData();
  }, []);

  const categories = useMemo(() => {
    const grouped = {};

    products.forEach((product) => {
      const key = product.category?.trim();
      if (!key) return;

      if (!grouped[key]) {
        grouped[key] = product;
      }
    });

    return Object.entries(grouped).map(([name, product]) => ({
      name,
      image: product.image,
      slug: name.toLowerCase(),
    }));
  }, [products]);

  const weeklyOffers = useMemo(() => {
    return products
      .filter((product) => {
        const hasDiscount =
          Number(product.oldPrice || 0) > Number(product.price || 0);

        const badge = String(product.badge || "").toLowerCase();

        const hasOfferBadge =
          badge.includes("sale") ||
          badge.includes("angebot") ||
          badge.includes("hot") ||
          badge.includes("deal") ||
          badge.includes("fresh") ||
          badge.includes("popular");

        return hasDiscount || hasOfferBadge;
      })
      .slice(0, 3);
  }, [products]);

  const featuredProducts = useMemo(() => {
    return products.slice(0, 8);
  }, [products]);

  return (
    <MainLayout>
      <Hero />
      <OfferBanner />

      <CategorySection categories={categories} loading={loading} />

      <WeeklyOffers products={weeklyOffers} loading={loading} />

      <FeaturedProducts products={featuredProducts} loading={loading} />

      <WhyChooseUs />
      <TestimonialSection />
      <CTASection />
      <StoreInfo />
    </MainLayout>
  );
}
