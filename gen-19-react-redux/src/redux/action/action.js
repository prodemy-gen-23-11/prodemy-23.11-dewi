import { ADDTOCART, REMOVE, REMOVEONE } from "../Types"

export const addToCart = (product) => {
     return {
          type: ADDTOCART,
          payload: product
     }
}
export const removeOne = (product) => {
     return {
          type:REMOVEONE,
          payload:product,
     }
}

export const remove = (product) =>{
     return{
          type: REMOVE,
          payload:product,
     }
}