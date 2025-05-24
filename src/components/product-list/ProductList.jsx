import ProductSort from "./ProductSort";

export default function ProductList() {
  return (
    <>
      {/* Products Section (2/3 width on large screens) */}
      <div className="lg:col-span-2">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Your Products</h2>
          <ProductSort />
        </div>
        {/* Products Grid */}
        <div className="product-grid">
          {/* Product 1 */}
          <div className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <img
                src="./assets/img/image 1.png"
                alt="Gradient Graphic T-shirt"
                className="h-full w-auto object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium">Gradient Graphic T-shirt </h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center my-1">
                  <div className="flex text-yellow-400">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span className="text-gray-300">★</span>
                  </div>
                  <span className="text-xs text-gray-500 ml-1">4/5</span>
                </div>
                <span className="text-xs text-gray-700">(212 pcs left)</span>
              </div>
              <p className="font-bold">$145 </p>
              <button className="w-full mt-2 bg-red-800 py-1 text-gray-100 rounded flex items-center justify-center">
                Remove from Cart
              </button>
            </div>
          </div>
          {/* Product 2 */}
          <div className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <img
                src="./assets/img/image 10-1.png"
                alt="Polo with Tipping Details"
                className="h-full w-auto object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium">Polo with Tipping Details</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center my-1">
                  <div className="flex text-yellow-400">
                    <span>★</span>
                    <span className="text-gray-300">★</span>
                    <span className="text-gray-300">★</span>
                    <span className="text-gray-300">★</span>
                    <span className="text-gray-300">★</span>
                  </div>
                  <span className="text-xs text-gray-500 ml-1">1/5</span>
                </div>
                <span className="text-xs text-gray-700">(320 pcs left)</span>
              </div>
              <p className="font-bold">$180</p>
              <button className="disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed w-full mt-2 bg-gray-800 py-1 text-gray-100 rounded flex items-center justify-center active:translate-y-1 transition-all active:bg-gray-900">
                Add to Cart
              </button>
            </div>
          </div>
          {/* Product 3 */}
          <div className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <img
                src="./assets/img/image 10-2.png"
                alt="Black Striped T-shirt"
                className="h-full w-auto object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium">Black Striped T-shirt</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center my-1">
                  <div className="flex text-yellow-400">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span className="text-gray-300">★</span>
                    <span className="text-gray-300">★</span>
                  </div>
                  <span className="text-xs text-gray-500 ml-1">3/5</span>
                </div>
                <span className="text-xs text-gray-700">(420 pcs left)</span>
              </div>
              <div className="flex items-center">
                <p className="font-bold">$120</p>
                <p className="text-gray-400 line-through ml-2">$160</p>
              </div>
              <button
                disabled=""
                className="disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed  w-full mt-2 bg-gray-800 py-1 text-gray-100 rounded flex items-center justify-center active:translate-y-1 transition-all active:bg-gray-900 ">
                Add to Cart
              </button>
            </div>
          </div>
          {/* Product 4 */}
          <div className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <img
                src="./assets/img/image 7-1.png"
                alt="Skinny Fit Jeans"
                className="h-full w-auto object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium">Skinny Fit Jeans</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center my-1">
                  <div className="flex text-yellow-400">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span className="text-gray-300">★</span>
                  </div>
                  <span className="text-xs text-gray-500 ml-1">4/5</span>
                </div>
                <span className="text-xs text-gray-700">(20 pcs left)</span>
              </div>
              <div className="flex items-center">
                <p className="font-bold">$240</p>
                <p className="text-gray-400 line-through ml-2">$260</p>
              </div>
              <button className="disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed w-full mt-2 bg-gray-800 py-1 text-gray-100 rounded flex items-center justify-center active:translate-y-1 transition-all active:bg-gray-900">
                Add to Cart
              </button>
            </div>
          </div>
          {/* Product 5 */}
          <div className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <img
                src="./assets/img/image 8-2.png"
                alt="Checkered Shirt"
                className="h-full w-auto object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium">Checkered Shirt</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center my-1">
                  <div className="flex text-yellow-400">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span className="text-gray-300">★</span>
                  </div>
                  <span className="text-xs text-gray-500 ml-1">4/5</span>
                </div>
                <span className="text-xs text-gray-700">(20 pcs left)</span>
              </div>
              <p className="font-bold">$180</p>
              <button className="disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed w-full mt-2 bg-gray-800 py-1 text-gray-100 rounded flex items-center justify-center active:translate-y-1 transition-all active:bg-gray-900">
                Add to Cart
              </button>
            </div>
          </div>
          {/* Product 6 */}
          <div className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <img
                src="./assets/img/image 8.png"
                alt="Sleeve Striped T-shirt"
                className="h-full w-auto object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium">Sleeve Striped T-shirt</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center my-1">
                  <div className="flex text-yellow-400">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span className="text-gray-300">★</span>
                  </div>
                  <span className="text-xs text-gray-500 ml-1">4/5</span>
                </div>
                <span className="text-xs text-gray-700">(20 pcs left)</span>
              </div>
              <div className="flex items-center">
                <p className="font-bold">$130</p>
                <p className="text-gray-400 line-through ml-2">$160</p>
              </div>
              <button className="disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed w-full mt-2 bg-gray-800 py-1 text-gray-100 rounded flex items-center justify-center active:translate-y-1 transition-all active:bg-gray-900">
                Add to Cart
              </button>
            </div>
          </div>
          {/* Product 7 */}
          <div className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <img
                src="./assets/img/image 9-1.png"
                alt="Vertical Striped Shirt"
                className="h-full w-auto object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium">Vertical Striped Shirt</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center my-1">
                  <div className="flex text-yellow-400">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span className="text-gray-300">★</span>
                  </div>
                  <span className="text-xs text-gray-500 ml-1">4/5</span>
                </div>
                <span className="text-xs text-gray-700">(20 pcs left)</span>
              </div>
              <div className="flex items-center">
                <p className="font-bold">$212</p>
                <p className="text-gray-400 line-through ml-2">$232</p>
              </div>
              <button className="disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed w-full mt-2 bg-gray-800 py-1 text-gray-100 rounded flex items-center justify-center active:translate-y-1 transition-all active:bg-gray-900">
                Add to Cart
              </button>
            </div>
          </div>
          {/* Product 8 */}
          <div className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <img
                src="./assets/img/image 9-2.png"
                alt="Courage Graphic T-shirt"
                className="h-full w-auto object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium">Courage Graphic T-shirt</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center my-1">
                  <div className="flex text-yellow-400">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span className="text-gray-300">★</span>
                  </div>
                  <span className="text-xs text-gray-500 ml-1">4/5</span>
                </div>
                <span className="text-xs text-gray-700">(20 pcs left)</span>
              </div>
              <p className="font-bold">$145</p>
              <button className="disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed w-full mt-2 bg-gray-800 py-1 text-gray-100 rounded flex items-center justify-center active:translate-y-1 transition-all active:bg-gray-900">
                Add to Cart
              </button>
            </div>
          </div>
          {/* Product 9 */}
          <div className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <img
                src="./assets/img/image 9.png"
                alt="Loose Fit Bermuda Shorts"
                className="h-full w-auto object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium">Loose Fit Bermuda Shorts</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center my-1">
                  <div className="flex text-yellow-400">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span className="text-gray-300">★</span>
                  </div>
                  <span className="text-xs text-gray-500 ml-1">4.5/5</span>
                </div>
                <span className="text-xs text-gray-700">(10 pcs left)</span>
              </div>
              <p className="font-bold">$80</p>
              <button className="disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed w-full mt-2 bg-gray-800 py-1 text-gray-100 rounded flex items-center justify-center active:translate-y-1 transition-all active:bg-gray-900">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
