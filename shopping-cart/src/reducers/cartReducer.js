const initialState = {
    items: [],
    totalAmount: 0,
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            // Add item to cart
            return {
              ...state,
              items: [...state.items, action.payload],
              totalAmount: state.totalAmount + action.payload.price,
            };
          case 'REMOVE_FROM_CART':
            // Remove item from cart
            const updatedItems = state.items.filter(item => item.id !== action.payload.id);
            const updatedTotalAmount = state.totalAmount - action.payload.price;
            return {
              ...state,
              items: updatedItems,
              totalAmount: updatedTotalAmount,
            };
          case 'INCREMENT_QUANTITY':
            // Increment quantity of an item in cart
            const itemToIncrement = state.items.find(item => item.id === action.payload.id);
            itemToIncrement.quantity += 1;
            return {
              ...state,
              items: [...state.items],
              totalAmount: state.totalAmount + itemToIncrement.price,
            };
          case 'DECREMENT_QUANTITY':
            // Decrement quantity of an item in cart
            const itemToDecrement = state.items.find(item => item.id === action.payload.id);
            if (itemToDecrement.quantity > 1) {
              itemToDecrement.quantity -= 1;
              return {
                ...state,
                items: [...state.items],
                totalAmount: state.totalAmount - itemToDecrement.price,
              };
            }
            return state;
          case 'CLEAR_CART':
            // Clear entire cart
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
  