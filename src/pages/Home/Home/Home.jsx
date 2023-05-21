import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import About from "../../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import GallerySection from "../GallerySection/GallerySection";
import ReactTabs from "../ReactTabs/ReactTabs";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Banner />
      <GallerySection />
      <ReactTabs />
      <About />
      <Contact />
    </>
  );
};

export default Home;
