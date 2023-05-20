import React from "react";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import GallerySection from "../GallerySection/GallerySection";
import ReactTabs from "../ReactTabs/ReactTabs";

const Home = () => {
  return (
    <>
      <Banner />
      <GallerySection />
      <ReactTabs />
      <Contact />
    </>
  );
};

export default Home;
