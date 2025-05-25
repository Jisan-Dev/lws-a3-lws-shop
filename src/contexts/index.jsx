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

  const value = {
    state,
    addToCart,
    removeFromCart,
    isInCart,
    getFilteredAndSortedProducts,
    setSortType,
    setSearchTerm,
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
