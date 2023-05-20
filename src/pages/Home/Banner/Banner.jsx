import React from "react";
import { FaAngleRight } from "react-icons/fa";
import img1 from "../../../assets/banner-img1.jpg";
import img2 from "../../../assets/banner-img2.jpg";
import img3 from "../../../assets/banner-img3.jpg";

const Banner = () => {
  return (
    <>
      <div className="carousel w-full h-[550px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img2} className="w-full rounded-xl" />
          <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 pl-12 w-1/2">
              <h2 className="text-6xl font-bold">
                Affordable Price For Toys Collection
              </h2>
              <p>
                There are many variations of toy cars available, but the
                majority have suffered alteration in some form
              </p>
              <div>
                <button className="btn btn-outline btn-sm text-white mr-5">
                  Discover More <FaAngleRight />
                </button>
                <button className="btn btn-outline btn-sm text-gray-200">
                  Latest Toys <FaAngleRight />
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle me-4">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle bg-orange-700 ">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img1} className="w-full rounded-xl" />
          <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 pl-12 w-1/2">
              <h2 className="text-6xl font-bold">
                Affordable Price For Toys Collection
              </h2>
              <p>
                There are many variations of toy cars available, but the
                majority have suffered alteration in some form
              </p>
              <div>
                <button className="btn btn-outline btn-sm text-white mr-5">
                  Discover More <FaAngleRight />
                </button>
                <button className="btn btn-outline btn-sm text-gray-200">
                  Latest Toys <FaAngleRight />
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle me-4">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle bg-orange-700 ">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full rounded-xl" />
          <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 pl-12 w-1/2">
              <h2 className="text-6xl font-bold">
                Affordable Price For Toys Collection
              </h2>
              <p>
                There are many variations of toy cars available, but the
                majority have suffered alteration in some form
              </p>
              <div>
                <button className="btn btn-outline btn-sm text-white mr-5">
                  Discover More <FaAngleRight />
                </button>
                <button className="btn btn-outline btn-sm text-gray-200">
                  Latest Toys <FaAngleRight />
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle me-4">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle bg-orange-700 ">
              ❯
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
