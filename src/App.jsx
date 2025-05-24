import Cart from "./components/cart/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Newsletter from "./components/Newsletter";
import ProductList from "./components/product-list/ProductList";

function App() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Products Section (2/3 width on large screens) */}
          <ProductList />
          {/* Cart Section (1/3 width on large screens) */}
          <Cart />
        </div>
      </main>
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
