import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FILTER_PRODUCTS_BY_CATEGORY
} from '../actions/productActions';

const initialState = {
  loading: false,
  data: [],
  filteredData: [], 
  error: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, loading: false, data: action.payload, filteredData: action.payload }; 
    case FETCH_PRODUCTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case FILTER_PRODUCTS_BY_CATEGORY:
      return { ...state, filteredData: action.payload };
    default:
      return state;
  }
};

export default productReducer;
