import React from 'react';

const ProductImage = () => {
  return (
    <div className="p-6">
      <img
        src="https://i.pinimg.com/736x/0d/c4/0e/0dc40e6ba217849f722f350bdb7bda05.jpg"
        alt="Product"
        className="w-full rounded-lg"
       style={{height:'500px'}}/>
      <div className="flex space-x-3 mt-4">
        <img
          src="https://i.pinimg.com/736x/56/65/c1/5665c16db24e52c382302c4120fb74e2.jpg"
          alt="Thumbnail"
          className="w-16 h-16 rounded-lg border border-gray-300"
        />
        <img
          src="https://i.pinimg.com/736x/ac/3d/be/ac3dbeb2e23241e05c6452827043e9be.jpg"
          alt="Thumbnail"
          className="w-16 h-16 rounded-lg border border-gray-300"
        />
        <img
          src="https://i.pinimg.com/736x/85/ca/87/85ca87197e267f3f18cbe8bd39f4db03.jpg"
          alt="Thumbnail"
          className="w-16 h-16 rounded-lg border border-gray-300"
        />
      </div>
    </div>
  );
};

export default ProductImage;
