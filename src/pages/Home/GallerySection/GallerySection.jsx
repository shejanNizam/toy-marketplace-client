import React from "react";

const GallerySection = () => {
  const galleryData = [
    {
      id: 1,
      image: "https://i.ibb.co/Rhy8M7z/sports-car1.jpg",
      caption: "Caption 1",
    },
    {
      id: 2,
      image: "https://i.ibb.co/bmZq6QZ/sports-car2.jpg",
      caption: "Caption 2",
    },
    {
      id: 3,
      image: "https://i.ibb.co/YQCSpwy/regular-car1.jpg",
      caption: "Caption 3",
    },
    {
      id: 4,
      image: "https://i.ibb.co/7gG56Wc/regular-car2.webp",
      caption: "Caption 4",
    },
    {
      id: 5,
      image: "https://i.ibb.co/CKhz8zq/police-car1.jpg",
      caption: "Caption 5",
    },
    {
      id: 6,
      image: "https://i.ibb.co/TrCrsC5/police-car2.webp",
      caption: "Caption 6",
    },
  ];
  return (
    <section className="bg-gray-200 py-8">
      <h2 className="text-2xl text-center font-bold mb-4">Gallery Section</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {galleryData.map((item) => (
          <div key={item.id} className="rounded overflow-hidden shadow-md">
            <img className="w-full h-96" src={item.image} alt={item.caption} />
            <div className="p-4">
              <p className="text-lg font-bold">{item.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
