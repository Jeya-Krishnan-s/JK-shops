import React from "react";

const images = [
  "https://www.lavanyathelabel.com/cdn/shop/products/0H8A8643_26e03a1d-75e7-4d52-849d-bd1f9752a642_1800x.jpg?v=1681380612",
  "https://www.aldoshoes.in/on/demandware.static/-/Sites-aldo_master_catalog/default/dwce314662/New%20Folder/candleberry1000-x-1000_21.jpg",
  "https://m.media-amazon.com/images/I/61qDaOZzfKL._AC_UY1100_.jpg",
  "https://i.pinimg.com/originals/e2/2e/10/e22e1003cd5462cbb4627ed07065e074.jpg",
  "https://watchfactory.in/cdn/shop/products/14.4_f2d9309a-4515-43d8-8c09-59a73e14fd8a_1800x1800.jpg?v=1711790945",
  "https://imgshopimages.lbb.in/catalog/product/d/r/drs-001-21_3_.jpg",
];

const brands = ["MANGO", "ZARA", "Reebok", "ASOS", "Stradivarius", "adidas", "Bershka"];

const GallerySection = () => {
  return (
    <div className="bg-gray-50 py-10 px-4">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-2">@shopper</h2>
        <p className="text-gray-500 mb-8">
          Appear, dry there darkness they're seas, dry waters.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-10 max-w-6xl mx-auto">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-md shadow-sm">
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center items-center gap-6">
        {brands.map((brand, index) => (
          <span
            key={index}
            className="text-gray-500 text-lg font-semibold hover:text-gray-700 transition"
          >
            {brand}
          </span>
        ))}
      </div>
    </div>
  );
};

const Gallery = () => {
  return (
    <div>
      <GallerySection />
    </div>
  );
};

export default Gallery;
