/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react";
import { ACTIONS, initialState, shopReducer } from "../reducers/shopReducer";

export const ShopContext = createContext("");

export default function ShopProvider({ children }) {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  // Helper functions for common operations
  const addToCart = (productId) => {
    dispatch({ type: ACTIONS.ADD_TO_CART, payload: { productId } });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: ACTIONS.REMOVE_FROM_CART, payload: { productId } });
  };

  const isInCart = (productId) => state.cart.some((item) => item.productId === productId);

  const getFilteredAndSortedProducts = () => {
    let filtered = state.products;

    if (state.searchTerm.trim()) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
    }

    // Apply sorting
    const sorted = [...filtered].sort((a, b) => {
      switch (state.sortBy) {
        case "popularity":
          return b.rating - a.rating;
        case "newest":
          return new Date(b.dateAdded) - new Date(a.dateAdded);
        case "price_descending":
          return b.price - a.price;
        case "price_ascending":
          return a.price - b.price;
        default:
          return 0;
      }
    });
    console.log("first", sorted);
    return sorted;
  };

  const setSortType = (sortType) => {
    dispatch({ type: ACTIONS.SET_SORT_TYPE, payload: sortType });
  };

  const setSearchTerm = (searchTerm) => {
    dispatch({ type: ACTIONS.SET_SEARCH_TERM, payload: searchTerm });
  };

  const getProductById = (id) => state.products.find((p) => p.id === id);

  const increaseQuantity = (productId) => {
    dispatch({ type: ACTIONS.INCREASE_QUANTITY, payload: { productId } });
  };

  const decreaseQuantity = (productId) => {
    dispatch({ type: ACTIONS.DECREASE_QUANTITY, payload: { productId } });
  };

  const getCartItemQuantity = (productId) => {
    const item = state.cart.find((item) => item.productId === productId);
    return item ? item.quantity : 0;
  };

  const getOrderSummary = () => {
    const subtotal = state.cart.reduce((total, item) => {
      const product = getProductById(item.productId);
      return total + (product ? product.price * item.quantity : 0);
    }, 0);

    const discount = subtotal * 0.2; // 20% discount
    const deliveryFee = 5.99; // Fixed delivery fee
    const total = subtotal - discount + deliveryFee;

    return {
      subtotal: subtotal.toFixed(2),
      discount: discount.toFixed(2),
      deliveryFee: deliveryFee.toFixed(2),
      total: total.toFixed(2),
    };
  };

  const value = {
    state,
    addToCart,
    removeFromCart,
    isInCart,
    getFilteredAndSortedProducts,
    setSortType,
    setSearchTerm,
    getProductById,
    decreaseQuantity,
    increaseQuantity,
    getCartItemQuantity,
    getOrderSummary,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

// CUSTOM HOOK FOR USING CONTEXT
export function useShop() {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useShop must be used within an EcommerceProvider");
  }
  return context;
}
