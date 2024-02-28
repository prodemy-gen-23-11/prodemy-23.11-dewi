import { data } from "autoprefixer";
import { ADDTOCART, DECREMENT, INCREMENT, REMOVE, REMOVEONE } from "../Types";

const intialState = {
  cart: [],
  //count :0,
};

const cartReducer = (state = intialState, action) => {
  switch (action.type) {
    case ADDTOCART:
      
      const dataCart = state.cart.findIndex((i) => i.id === action.payload.id);
      if (dataCart >= 0) {
         // state.cart = state.cart.map(item=>item.id === action.payload.id && {...item, qty: qty + 1} )
        // state.cart = state.cart.map(item=>item.id === action.payload.id && {...item, qty: item.qty.count + 1} )
        state.cart[dataCart].qty.count += 1;
        return {
          ...state,
        };
        
      } else {
        let qty = { ...action.payload.qty, count: 1 };
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, qty }],
        };
      }

      case REMOVEONE:
            {
                const dataCart = state.cart.findIndex(i => i.id === action.payload.id)
                if (dataCart >= 0) {
                    state.cart[dataCart].qty.count -= 1
                }
                return {
                    ...state
                }
            }
      case REMOVE:
          {
              state.cart =  state.cart.filter(i => i.id === action.payload.id)     
              return {
               ...state
              }
          }

          
    // case INCREMENT:
    //      return { ...state, count: state.count + 1 };
    // case DECREMENT:
    //      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};
export default cartReducer;
