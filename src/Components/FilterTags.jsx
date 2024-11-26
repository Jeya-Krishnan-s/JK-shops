import React from "react";

const tags = [
  "Shift dresses",
  "Summer",
  "M",
  "White",
  "Red",
  "Adidas",
  "$10.00 - $49.00",
  "$50.00 - $99.00",
];

const FilterTags = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Womens' Clothing</h2>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-200 px-3 py-1 rounded-md text-sm text-gray-800 cursor-pointer hover:bg-gray-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default FilterTags;
