import React from "react";

function Cart({ cartItems }) {
  // Group cart items by title
  const groupedItems = {};
  cartItems.forEach((item) => {
    if (!groupedItems[item.title]) {
      groupedItems[item.title] = {
        ...item,
        quantity: 1,
      };
    } else {
      groupedItems[item.title].quantity += 1;
    }
  });

  // Convert grouped items back to array
  const uniqueItems = Object.values(groupedItems);

  return (
    <div
      className="absolute right-0  w-72 pb-2 bg-gradient-to-r from-green-400 to-yellow-400 shadow-lg rounded-lg p-6 border border-gray-300 opacity-1 z-8"
    >
      {uniqueItems.length > 0 ? (
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Cart Items</h2>
          {uniqueItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b py-2 text-gray-800"
            >
              {/* Product Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-10 h-10 object-cover rounded-md mr-2"
              />
              <div className="flex-1 ml-2">
                <span className="font-medium">{item.title}</span>
                <div className="flex justify-between">
                  <span className="font-medium">${item.price.toFixed(2)}</span>
                  <span>Qty: {item.quantity}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center">Your cart is empty</p>
      )}
    </div>
  );
}

export default Cart;