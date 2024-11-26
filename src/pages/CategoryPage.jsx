import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CategoryPage = () => {
  const { category } = useParams(); // This will get the category (e.g., 'women', 'men', 'kids')
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data based on the category
  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [category]);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <h1 className="text-3xl text-center font-bold mb-4">{category.charAt(0).toUpperCase() + category.slice(1)} Collection</h1>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded shadow-md">
              <img src={product.image} alt={product.title} className="w-full h-64 object-cover mb-4" />
              <h3 className="font-semibold text-lg">{product.title}</h3>
              <p className="text-gray-500">${product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
