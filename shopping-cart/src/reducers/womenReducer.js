const initialState = {
    loading: false,
    data: [],
    error: null,
  };
  
  const womenReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_WOMEN_PRODUCTS_REQUEST':
        return { ...state, loading: true };
      case 'GET_WOMEN_PRODUCTS_SUCCESS':
        return { ...state, loading: false, data: action.payload };
      case 'GET_WOMEN_PRODUCTS_FAIL':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default womenReducer;
  