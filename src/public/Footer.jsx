import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Newsletter Section */}
        <div className="text-center mb-8">
          <h2 className="text-white text-xl font-semibold mb-4">
            Want style Ideas and Treats?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <input
              type="email"
              placeholder="Enter Email *"
              className="px-4 py-2 w-full sm:w-auto rounded-md bg-gray-800 text-gray-300 border border-gray-700 focus:outline-none focus:border-gray-500"
            />
            <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition w-full sm:w-auto">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8 text-center md:text-left">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Shopper.</h3>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="#" className="hover:text-white">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="hover:text-white">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-white">
                <i className="fab fa-medium"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Support</h3>
            <ul>
              <li>
                <a href="#" className="hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Shipping & Returns
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Shop</h3>
            <ul>
              <li>
                <a href="#" className="hover:text-white">
                  Men's Shopping
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Women's Shopping
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Kids' Shopping
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Discounts
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
            <ul>
              <li>
                <a href="#" className="hover:text-white">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy & Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center md:text-left mb-4">
          <p className="text-sm">
            9789487068 | 1-202-555-0106 |{" "}
            <a href="mailto:help@shopper.com" className="hover:text-white">
              jk@shopper.com
            </a>
          </p>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-4">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-center sm:text-left">
              &copy; 2024 Jeya Krishnan
            </p>
            <div className="flex items-center gap-4 mt-4 sm:mt-0">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/800px-Mastercard_2019_logo.svg.png"
                alt="MasterCard"
                className="h-6"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1280px-Visa_Inc._logo.svg.png"
                alt="Visa"
                className="h-6"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png"
                alt="PayPal"
                className="h-6"
              />
              <img
                src="https://images.ctfassets.net/y6oq7udscnj8/7pGYJSsSu8IjvuscnxPcng/ae9dc800b649640406b5bfa1ae9b02d6/PayPal.png?w=592&h=368&q=50&fm=png"
                alt="AmEx"
                className="h-6"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
