import axios from 'axios';

export const getKidsProducts = () => async (dispatch) => {
  dispatch({ type: 'GET_KIDS_PRODUCTS_REQUEST' });

  try {
    const response = await axios.get('https://fakestoreapi.com/products/category/kids');
    dispatch({ type: 'GET_KIDS_PRODUCTS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'GET_KIDS_PRODUCTS_FAIL', payload: error.message });
  }
};
