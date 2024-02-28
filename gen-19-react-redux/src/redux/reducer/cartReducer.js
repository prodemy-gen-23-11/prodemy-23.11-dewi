import { data } from "autoprefixer";
import { ADDTOCART, DECREMENT, INCREMENT, REMOVE, REMOVEONE } from "../Types";

const intialState = {
  cart: [],
  //count :0,
};

const cartReducer = (state = intialState, action) => {
  switch (action.type) {
    case ADDTOCART:
      
    const { qty } = action.payload;
    const dataCart = state.cart.findIndex((i) => i.id === action.payload.id);
    if (dataCart >= 0) {
      state.cart[dataCart].qty += qty;
        return {
          ...state,
        };
        
      } else {
        const newData = { ...action.payload, qty: qty };
        state.cart.push(newData)
        return {
          ...state,
        };
      }

      case REMOVEONE:
            {
                const dataCart = state.cart.findIndex(i => i.id === action.payload.id)
                if (dataCart >= 0) {
                    state.cart[dataCart].qty -= 1
                }
                return {
                    ...state
                }
            }
      case REMOVE:
          {
              state.cart =  state.cart.filter(i => i.id !== action.payload)     
              return {
               ...state
              }
          }

    default:
      return state;
  }
};
export default cartReducer;
