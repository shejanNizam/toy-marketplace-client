import React from "react";

const GallerySection = () => {
  const galleryData = [
    {
      id: 1,
      image: "https://i.ibb.co/Rhy8M7z/sports-car1.jpg",
      caption: "Red Sports Car",
    },
    {
      id: 2,
      image: "https://i.ibb.co/bmZq6QZ/sports-car2.jpg",
      caption: "Yellow Sports Car",
    },
    {
      id: 3,
      image: "https://i.ibb.co/YQCSpwy/regular-car1.jpg",
      caption: "Red Regular Car",
    },
    {
      id: 4,
      image: "https://i.ibb.co/7gG56Wc/regular-car2.webp",
      caption: "Blue Regular Car",
    },
    {
      id: 5,
      image: "https://i.ibb.co/CKhz8zq/police-car1.jpg",
      caption: "White Police Car",
    },
    {
      id: 6,
      image: "https://i.ibb.co/TrCrsC5/police-car2.webp",
      caption: "Black Police Car",
    },
    {
      id: 7,
      image: "https://i.ibb.co/Rhy8M7z/sports-car1.jpg",
      caption: "Red Sports Car",
    },
    {
      id: 8,
      image: "https://i.ibb.co/bmZq6QZ/sports-car2.jpg",
      caption: "Yellow Sports Car",
    },
    {
      id: 9,
      image: "https://i.ibb.co/YQCSpwy/regular-car1.jpg",
      caption: "Red Regular Car",
    },
    {
      id: 10,
      image: "https://i.ibb.co/7gG56Wc/regular-car2.webp",
      caption: "Blue Regular Car",
    },
  ];
  return (
    <section className="bg-gray-200 py-16 px-32">
      <h2 className="text-2xl text-center text-orange-400 font-bold my-8 mb-8">
        Some of our sample Collection
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {galleryData.map((item) => (
          <div key={item.id} className="rounded overflow-hidden shadow-md">
            <img
              className="w-3/4 mx-auto h-32 rounded"
              src={item.image}
              alt={item.caption}
            />
            <div className="p-4">
              <p className="text-lg text-center font-bold">{item.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
