import React from 'react';

const CartItems = () => {
  const items = [
    { 
      category: 'Shoes', 
      name: 'Leather mid-heel Sandals', 
      price: '$129.00', 
      imgSrc: 'https://via.placeholder.com/150', 
    },
    { 
      category: 'Dresses', 
      name: 'Cotton floral print Dress', 
      price: '$40.00', 
      sale: true,
      imgSrc: 'https://via.placeholder.com/150', 
    },
    { 
      category: 'Shoes', 
      name: 'Leather Sneakers', 
      price: '$85.00', 
      sale: true,
      imgSrc: 'https://via.placeholder.com/150', 
    },
    { 
      category: 'Tops', 
      name: 'Cropped cotton Top', 
      price: '$29.00', 
      imgSrc: 'https://via.placeholder.com/150', 
    },
    // New items added here
    { 
      category: 'Dresses', 
      name: 'Floral print midi Dress', 
      price: '$50.00', 
      sale: true,
      imgSrc: 'https://via.placeholder.com/150', 
    },
    { 
      category: 'Bags', 
      name: 'Suede cross body Bag', 
      price: '$79.00', 
      sale: true,
      imgSrc: 'https://via.placeholder.com/150', 
    },
    { 
      category: 'Skirts', 
      name: 'Printed A-line Skirt', 
      price: '$79.00', 
      new: true,
      imgSrc: 'https://via.placeholder.com/150', 
    },
    { 
      category: 'Shoes', 
      name: 'Heel strappy Sandals', 
      price: '$90.00', 
      imgSrc: 'https://via.placeholder.com/150', 
    },
  ];

  return (
    <div className="flex flex-wrap justify-center space-x-6 space-y-6 mt-10">
      {items.map((item, index) => (
        <div key={index} className="w-64 p-4 border rounded-lg shadow-lg flex flex-col items-center text-center">
          <img src={item.imgSrc} alt={item.name} className="w-full h-48 object-cover rounded-md" />
          <h2 className="text-lg font-semibold mt-2">{item.category}</h2>
          <h3 className="text-md mt-2">{item.name}</h3>
          <p className="text-sm mt-1 text-gray-500">{item.price}</p>
          {item.sale && <span className="text-red-500 mt-2">Sale</span>}
          {item.new && <span className="text-green-500 mt-2">New</span>}
        </div>
      ))}
    </div>
  );
};

export default CartItems;
