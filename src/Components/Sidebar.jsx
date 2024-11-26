import React, { useState } from "react";

const categories = [
  "Category",
  "Season",
  "Size",
  "Color",
  "Brand",
  "Price"
];

const productCategories = [
  "All Products",
  "Blouses and Shirts",
  "Coats and Jackets",
  "Dresses",
  "Hoodies and Sweats",
  "Denim",
  "Jeans",
  "Jumpers and Cardigans",
  "Leggings"
];

const sizeOptions = [
  "3XS",
  "2XS",
  "XS",
  "S",
  "M",
  "L",
  "XL",
  "2XL",
  "3XL",
  "One Size"
];

const seasonOptions = [
  "Summer",
  "Winter",
  "Spring & Autumn"
];

const colorOptions = [
  "Black",
  "White",
  "Blue",
  "Red",
  "Brown",
  "Gray",
  "Cyan",
  "Pink"
];

const brandOptions = [
  "Dsquared2",
  "Alexander McQueen",
  "Balenciaga",
  "Adidas",
  "Balmain",
  "Burberry",
  "Chloé",
  "Kenzo",
  "Givenchy"
];

const priceOptions = [
  "$10.00 - $49.00",
  "$50.00 - $99.00",
  "$100.00 - $199.00",
  "$200.00 and Up"
];

const Sidebar = ({ onCategorySelect }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedBlouseOptions, setSelectedBlouseOptions] = useState([]);
  const [selectedSeasonOptions, setSelectedSeasonOptions] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [sizeDropdownVisible, setSizeDropdownVisible] = useState(false);
  const [seasonDropdownVisible, setSeasonDropdownVisible] = useState(false);
  const [colorDropdownVisible, setColorDropdownVisible] = useState(false);
  const [brandDropdownVisible, setBrandDropdownVisible] = useState(false); // State for brand dropdown visibility
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedBrandOptions, setSelectedBrandOptions] = useState([]); // Track selected brands
  const [brandSearch, setBrandSearch] = useState(""); // State for brand search input
  const [priceDropdownVisible, setPriceDropdownVisible] = useState(false); // State for price dropdown visibility
  const [selectedPriceOptions, setSelectedPriceOptions] = useState([]); // Track selected price ranges

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onCategorySelect(category);
    setDropdownVisible(false);
    setSelectedBlouseOptions([]);
    setSelectedSeasonOptions([]);
    setSizeDropdownVisible(false);
    setColorDropdownVisible(false);
    setBrandDropdownVisible(false);
    setPriceDropdownVisible(false);
  };

  const handleBlouseOptionChange = (event) => {
    const option = event.target.value;
    setSelectedBlouseOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const handleSeasonOptionChange = (event) => {
    const option = event.target.value;
    setSelectedSeasonOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const toggleSizeDropdown = () => {
    setSizeDropdownVisible(!sizeDropdownVisible);
  };

  const toggleSeasonDropdown = () => {
    setSeasonDropdownVisible(!seasonDropdownVisible);
  };

  const toggleColorDropdown = () => {
    setColorDropdownVisible(!colorDropdownVisible);
  };

  const toggleBrandDropdown = () => {
    setBrandDropdownVisible(!brandDropdownVisible);
  };

  const togglePriceDropdown = () => {
    setPriceDropdownVisible(!priceDropdownVisible); // Toggle visibility of price dropdown
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleBrandSelect = (event) => {
    const brand = event.target.value;
    setSelectedBrandOptions((prev) =>
      prev.includes(brand)
        ? prev.filter((item) => item !== brand)
        : [...prev, brand]
    );
  };

  const handleBrandSearch = (event) => {
    setBrandSearch(event.target.value.toLowerCase()); // Filter brands based on search
  };

  const handlePriceOptionChange = (event) => {
    const option = event.target.value;
    setSelectedPriceOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  // Filter brands based on search input
  const filteredBrandOptions = brandOptions.filter((brand) =>
    brand.toLowerCase().includes(brandSearch)
  );

  return (
    <div>
      {categories.map((category, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{category}</h3>
          {category === "Category" ? (
            <div>
              <button
                onClick={() => setDropdownVisible(!dropdownVisible)}
                className="w-full text-left px-4 py-2 border rounded-md"
              >
                {selectedCategory || "Select a category"}
              </button>
              {dropdownVisible && (
                <ul className="space-y-2 mt-2">
                  {productCategories.map((productCategory, index) => (
                    <li key={index} className="text-gray-600 cursor-pointer hover:text-black">
                      <button
                        onClick={() => handleCategoryChange(productCategory)}
                        className="w-full text-left py-2 px-4 hover:bg-gray-100"
                      >
                        {productCategory}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ) : category === "Price" ? (
            <div>
              <button
                onClick={togglePriceDropdown}
                className="w-full text-left px-4 py-2 border rounded-md"
              >
                {selectedCategory === "Price" ? "Price Selected" : "Select Price"}
              </button>
              {priceDropdownVisible && (
                <div className="mt-4 space-y-2">
                  <h4 className="font-semibold text-gray-800 mb-2">Select Price Range:</h4>
                  {priceOptions.map((priceOption, index) => (
                    <label key={index} className="inline-flex items-center">
                      <input
                        type="checkbox"
                        value={priceOption}
                        checked={selectedPriceOptions.includes(priceOption)}
                        onChange={handlePriceOptionChange}
                        className="form-checkbox h-4 w-4 text-blue-600"
                      />
                      <span className="ml-2 text-gray-600">{priceOption}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          ) : category === "Season" ? (
            <div>
              <button
                onClick={toggleSeasonDropdown}
                className="w-full text-left px-4 py-2 border rounded-md"
              >
                {selectedCategory === "Season" ? "Season Selected" : "Select Season"}
              </button>
              {seasonDropdownVisible && (
                <div className="mt-4 space-y-2">
                  <h4 className="font-semibold text-gray-800 mb-2">Select Season:</h4>
                  {seasonOptions.map((option, index) => (
                    <label key={index} className="inline-flex items-center">
                      <input
                        type="checkbox"
                        value={option}
                        checked={selectedSeasonOptions.includes(option)}
                        onChange={handleSeasonOptionChange}
                        className="form-checkbox h-4 w-4 text-blue-600"
                      />
                      <span className="ml-2 text-gray-600">{option}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          ) : category === "Size" ? (
            <div>
              <button
                onClick={toggleSizeDropdown}
                className="w-full text-left px-4 py-2 border rounded-md"
              >
                {selectedCategory === "Size" ? "Size Selected" : "Select Size"}
              </button>
              {sizeDropdownVisible && (
                <div className="mt-4 space-y-2">
                  <h4 className="font-semibold text-gray-800 mb-2">Select Size:</h4>
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    {sizeOptions.map((size, index) => (
                      <button
                        key={index}
                        onClick={() => handleSizeSelect(size)}
                        className={`w-full p-2 text-center border rounded-md ${
                          selectedSize === size ? "border-black" : "border-gray-300"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : category === "Color" ? (
            <div>
              <button
                onClick={toggleColorDropdown}
                className="w-full text-left px-4 py-2 border rounded-md"
              >
                {selectedCategory === "Color" ? "Color Selected" : "Select Color"}
              </button>
              {colorDropdownVisible && (
                <div className="mt-4 space-y-2">
                  <h4 className="font-semibold text-gray-800 mb-2">Select Color:</h4>
                  <div className="grid grid-cols-4 gap-2">
                    {colorOptions.map((color, index) => (
                      <button
                        key={index}
                        onClick={() => handleColorSelect(color)}
                        className="w-8 h-8 rounded-full"
                        style={{ backgroundColor: color.toLowerCase() }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : category === "Brand" ? (
            <div>
              <button
                onClick={toggleBrandDropdown}
                className="w-full text-left px-4 py-2 border rounded-md"
              >
                {selectedCategory === "Brand" ? "Brand Selected" : "Select Brand"}
              </button>
              {brandDropdownVisible && (
                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="Search brands..."
                    value={brandSearch}
                    onChange={handleBrandSearch}
                    className="w-full px-4 py-2 border rounded-md"
                  />
                  <div className="mt-2">
                    {filteredBrandOptions.map((brand, index) => (
                      <label key={index} className="inline-flex items-center">
                        <input
                          type="checkbox"
                          value={brand}
                          checked={selectedBrandOptions.includes(brand)}
                          onChange={handleBrandSelect}
                          className="form-checkbox h-4 w-4 text-blue-600"
                        />
                        <span className="ml-2 text-gray-600">{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
