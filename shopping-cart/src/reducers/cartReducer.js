import { ADD_TO_CART, REMOVE_FROM_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY, CLEAR_CART } from '../actions/cartActions';

const initialState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedItem = action.payload;
      const existingItem = state.items.find(item => item.id === addedItem.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === addedItem.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
          totalAmount: state.totalAmount + addedItem.price,
        };
      }
      return {
        ...state,
        items: [...state.items, { ...addedItem, quantity: 1 }],
        totalAmount: state.totalAmount + addedItem.price,
      };

    case REMOVE_FROM_CART:
      const removedItem = action.payload;
      return {
        ...state,
        items: state.items.filter(item => item.id !== removedItem.id),
        totalAmount: state.totalAmount - (removedItem.price * removedItem.quantity),
      };

    case INCREMENT_QUANTITY:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
        totalAmount: state.totalAmount + action.payload.price,
      };

    case DECREMENT_QUANTITY:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
            : item
        ),
        totalAmount: state.totalAmount - action.payload.price,
      };

    case CLEAR_CART:
      return {
        ...state,
        items: [],
        totalAmount: 0,
      };

    default:
      return state;
  }
};

export default cartReducer;