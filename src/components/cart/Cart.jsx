import { useShop } from "../../contexts";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";

export default function Cart() {
  const { state } = useShop();
  return (
    <>
      {/* Cart Section (1/3 width on large screens) */}
      <div className="lg:col-span-1">
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h2 className="text-2xl font-bold mb-6">YOUR CART</h2>
          {state.cart.length > 0 ? (
            state.cart.map((p) => <CartItem key={p.productId} product={p} />)
          ) : (
            <p> Cart is empty</p>
          )}
          {/* Order Summary */}
          <OrderSummary />
        </div>
      </div>
    </>
  );
}
