const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
              ...state,
              cart: [...state.cart, action.payload],
            };
            case 'REMOVE_FROM_CART':
              return {
                ...state,
                cart: state.cart.filter((item)=> item.id !== action.payload.id),
              };
              case 'CLEAR_CART':
                // Implement logic to clear the cart
                return {
                  ...state,
                  cart: [],
                };
      
    
      default:
        return state;
    }
  };
  export default cartReducer;