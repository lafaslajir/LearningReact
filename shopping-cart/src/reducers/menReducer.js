const initialState = {
    loading: false,
    data: [],
    error: null,
  };
  
  const menReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_MEN_PRODUCTS_REQUEST':
        return { ...state, loading: true };
      case 'GET_MEN_PRODUCTS_SUCCESS':
        return { ...state, loading: false, data: action.payload };
      case 'GET_MEN_PRODUCTS_FAIL':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default menReducer;
  