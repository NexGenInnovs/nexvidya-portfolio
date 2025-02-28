import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Products from "@/components/Products";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NEXGEN INNOVATIONS",
  description: "We are NEXGEN INNOVATIONS",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero id="hero" />
      <Products id="products" />
      <Features id="features" />
      <Blog id="blog" />
      {/* <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing /> */}
      {/* <Contact /> */}
    </>
  );
}
