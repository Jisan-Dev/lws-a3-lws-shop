import { useShop } from "../../contexts";
import ProductCard from "./ProductCard";
import ProductSort from "./ProductSort";

export default function ProductList() {
  const { getFilteredAndSortedProducts } = useShop();
  const products = getFilteredAndSortedProducts();
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
          {products.length > 0 ? (
            products.map((product) => <ProductCard product={product} key={product.id} />)
          ) : (
            <div>
              <span className="font-semibold text-amber-700">
                No Products found with the search term
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
