// Action Types
export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
export const FILTER_PRODUCTS_BY_CATEGORY = 'FILTER_PRODUCTS_BY_CATEGORY';

export const ADD_TO_CART = 'ADD_TO_CART';
export const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY';
export const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';

// Action Creators
export const fetchProducts = () => async (dispatch) => {
  dispatch({ type: FETCH_PRODUCTS_REQUEST });
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: error.message });
  }
};

export const filterProductsByCategory = (category) => (dispatch, getState) => {
  const { data } = getState().products;
  const filteredData = category ? data.filter((product) => product.category === category) : data;
  dispatch({ type: FILTER_PRODUCTS_BY_CATEGORY, payload: filteredData });
};

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (product) => ({
  type: REMOVE_FROM_CART,
  payload: product,
});

export const incrementQuantity = (product) => ({
  type: INCREMENT_QUANTITY,
  payload: product,
});

export const decrementQuantity = (product) => ({
  type: DECREMENT_QUANTITY,
  payload: product,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});
