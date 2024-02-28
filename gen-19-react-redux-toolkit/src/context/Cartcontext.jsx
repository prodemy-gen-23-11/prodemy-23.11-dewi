import { createContext, useState } from 'react'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([])
  const [ qty, setQty ] = useState(1);
  const incrementQty = () => setQty(qty + 1);
  const decrementQty = () => {
    if (qty > 1) setQty(qty - 1);
  };
  
  const deleteItem = (id) =>
    setItems((items) => items.filter((item) => item.id !== id));
    const allObj ={
      items,setItems, qty, setQty, deleteItem, incrementQty,decrementQty
    }
  return (
      <CartContext.Provider value = {allObj} >
           {children}
      </CartContext.Provider>  
  );
};
export default CartContext;