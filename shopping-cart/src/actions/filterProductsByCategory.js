export const FILTER_PRODUCTS_BY_CATEGORY = 'FILTER_PRODUCTS_BY_CATEGORY';


export const filterProductsByCategory = (category) => (dispatch, getState) => {
    const { data } = getState().products;
    const filteredData = category ? data.filter((product) => product.category === category) : data;
    dispatch({ type: FILTER_PRODUCTS_BY_CATEGORY, payload: filteredData });
  };
  