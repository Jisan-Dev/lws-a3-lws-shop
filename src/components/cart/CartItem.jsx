import { useState } from "react";
import { useShop } from "../../contexts";
import { getImgUrl } from "../../utility/shop-utility";

export default function CartItem({ product }) {
  const [counter, setCounter] = useState(1);
  const { getProductById, increaseQuantity, decreaseQuantity, removeFromCart } = useShop();

  const mainProduct = getProductById(product.productId);
  // const mainProductStock = mainProduct
  const handleIncrement = () => {
    if (mainProduct.stock > 0) {
      setCounter(counter + 1);
      increaseQuantity(product.productId);
    }
  };
  const handleDecrement = () => {
    if (counter > 1) {
      setCounter(counter - 1);
      decreaseQuantity(product.productId);
    }
  };

  return (
    <div className="flex items-start space-x-4 pb-4 border-b border-gray-200 mb-4">
      <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center">
        <img
          src={getImgUrl(mainProduct.image)}
          alt="Gradient Graphic T-shirt"
          className="h-full w-auto object-cover"
        />
      </div>
      <div className="flex-grow">
        <div className="flex justify-between">
          <h3 className="font-medium">{mainProduct.name}</h3>
          <button onClick={() => removeFromCart(product.productId)}>
            <span className="text-red-500 text-sm">×</span>
          </button>
        </div>
        <p className="text-sm text-gray-500">Size: Large</p>
        <p className="text-sm text-gray-500">Color: White</p>
        <div className="flex justify-between items-center mt-2">
          <p className="font-bold">${mainProduct.price}</p>
          <div className="flex items-center space-x-2">
            <button
              onClick={handleDecrement}
              className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">
              −
            </button>
            <span className="text-sm">{counter}</span>
            <button
              onClick={handleIncrement}
              className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
