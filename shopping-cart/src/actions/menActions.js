import axios from 'axios';

export const getMenProducts = () => async (dispatch) => {
  dispatch({ type: 'GET_MEN_PRODUCTS_REQUEST' });

  try {
    const response = await axios.get('https://fakestoreapi.com/products/category/men');
    dispatch({ type: 'GET_MEN_PRODUCTS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'GET_MEN_PRODUCTS_FAIL', payload: error.message });
  }
};
