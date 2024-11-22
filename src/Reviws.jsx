import React from "react";

const reviews = [
  {
    category: "Shoes",
    title: "Low top Sneakers",
    rating: 3,
    review:
      "From creepeth said moved given divide make multiply of him shall itself also above second doesn’t unto created saying land herb sea midst night wherein.",
    reviewer: "Logan Edwards",
    date: "01 Jun 2019",
    image: "https://redtape.com/cdn/shop/products/8-800x800_22c88bd9-f9c2-4c61-ab55-71edce92bf57.jpg?v=1728477061", // Replace with actual image path or URL
  },
  {
    category: "Dresses",
    title: "Cotton print Dress",
    rating: 5,
    review:
      "God every fill great replenish darkness unto. Very open. Likeness their that light. Given under image to. Subdue of shall cattle day fish form saw spirit and given stars, us you whales may, land, saw fill unto.",
    reviewer: "Jane Jefferson",
    date: "29 May 2019",
    image: "https://www.lavanyathelabel.com/cdn/shop/files/3_50261e02-4d7f-4428-8c29-6e3e30851358_1200x.jpg?v=1690951406", // Replace with actual image path or URL
  },
  {
    category: "T-shirts",
    title: "Oversized print T-shirt",
    rating: 4,
    review:
      "Fill his waters wherein signs likeness waters. Second light gathered appear sixth fourth, seasons behold creeping female.",
    reviewer: "Darrell Baker",
    date: "18 May 2019",
    image: "https://zinklondon.in/cdn/shop/products/t-zz-00069_2.jpg?v=1685917777&width=1080", // Replace with actual image path or URL
  },
];

const ReviewCard = ({ category, title, rating, review, reviewer, date, image }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-5 w-full max-w-sm">
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={title}
          className="w-16 h-16 object-cover rounded-md mr-4"
        />
        <div>
          <h4 className="text-gray-700 text-sm uppercase">{category}</h4>
          <h3 className="text-lg font-semibold">{title}</h3>
          <div className="flex items-center mt-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <span
                key={index}
                className={`h-4 w-4 inline-block ${
                  index < rating ? "text-yellow-500" : "text-gray-300"
                }`}
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-600 mb-4">{review}</p>
      <div className="text-gray-500 text-xs">
        {reviewer}, {date}
      </div>
    </div>
  );
};

const Reviws = () => {
  return (
    <div className="bg-gray-50 py-10 px-4">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Latest Buyers Reviews
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((item, index) => (
          <ReviewCard key={index} {...item} />
        ))}
      </div>
    </div>
  </div>
  );
};

export default Reviws;
