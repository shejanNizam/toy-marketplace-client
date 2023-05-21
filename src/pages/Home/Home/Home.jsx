import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
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
      <Helmet>
        <title>Home | Toy Cars</title>
      </Helmet>
      <Banner />
      <GallerySection />
      <ReactTabs />
      <About />
      <Contact />
    </>
  );
};

export default Home;
