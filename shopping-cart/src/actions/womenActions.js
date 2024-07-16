import axios from 'axios';

export const getWomenProducts = () => async (dispatch) => {
  dispatch({ type: 'GET_WOMEN_PRODUCTS_REQUEST' });

  try {
    const response = await axios.get('https://fakestoreapi.com/products/category/women');
    dispatch({ type: 'GET_WOMEN_PRODUCTS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'GET_WOMEN_PRODUCTS_FAIL', payload: error.message });
  }
};
