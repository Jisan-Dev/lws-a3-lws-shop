import { getAllProducts } from "../data/products";

const mainProducts = getAllProducts();

const initialState = {
  products: mainProducts,
  cart: [],
  sortBy: "popularity", // can be 'popularity', 'newest', 'price'
  searchTerm: "",
};

const ACTIONS = {
  // Cart operations
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  INCREASE_QUANTITY: "INCREASE_QUANTITY",
  DECREASE_QUANTITY: "DECREASE_QUANTITY",
  CLEAR_CART_ITEM: "CLEAR_CART_ITEM",

  // Search and sort operations
  SET_SEARCH_TERM: "SET_SEARCH_TERM",
  SET_SORT_TYPE: "SET_SORT_TYPE",
};

function shopReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TO_CART: {
      const { productId } = action.payload;
      const product = state.products.find((product) => product.id === productId);

      if (!product || product.stock <= 0) {
        return state;
      }

      return {
        ...state,
        cart: [...state.cart, { productId, quantity: 1 }],
        products: state.products.map((product) =>
          product.id === productId ? { ...product, stock: product.stock - 1 } : product
        ),
      };
    }
    case ACTIONS.REMOVE_FROM_CART: {
      const { productId } = action.payload;
      const cartItem = state.cart.find((item) => item.productId === productId);

      if (!cartItem) {
        return state;
      }

      return {
        ...state,
        cart: state.cart.filter((item) => item.productId !== productId),
        products: state.products.map((product) =>
          product.id === productId
            ? { ...product, stock: product.stock + cartItem.quantity }
            : product
        ),
      };
    }

    case ACTIONS.INCREASE_QUANTITY: {
      const { productId } = action.payload;
      const product = state.products.find((product) => product.id === productId);

      if (!product || product.stock <= 0) {
        return state;
      }

      return {
        ...state,
        cart: state.cart.map((item) =>
          item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item
        ),
        products: state.products.map((product) =>
          product.id === productId ? { ...product, stock: product.stock - 1 } : product
        ),
      };
    }
    case ACTIONS.DECREASE_QUANTITY: {
      const { productId } = action.payload;
      const product = state.products.find((product) => product.id === productId);

      if (!product) {
        return state;
      }

      return {
        ...state,
        cart: state.cart.map((item) =>
          item.productId === productId ? { ...item, quantity: item.quantity - 1 } : item
        ),
        products: state.products.map((product) =>
          product.id === productId ? { ...product, stock: product.stock + 1 } : product
        ),
      };
    }

    case ACTIONS.SET_SEARCH_TERM: {
      return {
        ...state,
        searchTerm: action.payload,
      };
    }

    case ACTIONS.SET_SORT_TYPE: {
      return {
        ...state,
        sortBy: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}

export { ACTIONS, initialState, shopReducer };
