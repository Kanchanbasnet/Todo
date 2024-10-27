import { createContext, useContext, useState } from "react";


export const ContextCart = createContext(null);

export const useCart = () =>{
    const cart = useContext(ContextCart);
    return cart;
}

export const CartContext = (props)=>{
    const [items, setItems] = useState([])


    return (
        <ContextCart.Provider value={{items, setItems}}>{props.children}</ContextCart.Provider>
    )


}