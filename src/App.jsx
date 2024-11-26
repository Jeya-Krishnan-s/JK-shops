import React, { useEffect, useState } from "react";


import Cart from "./Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  // Fetch products from the Fake Store API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // Add product to cart
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  // Remove product from cart
  const removeFromCart = (product) => {
    setCartItems((prevItems) => {
      const index = prevItems.findIndex((item) => item.title === product.title);
      if (index > -1) {
        const updatedItems = [...prevItems];
        updatedItems.splice(index, 1);
        return updatedItems;
      }
      return prevItems;
    });
  };

  return (
    <div className="App">
     
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
      <Cart cartItems={cartItems} onRemoveItem={removeFromCart} />
    </div>
  );
}

export default App;
