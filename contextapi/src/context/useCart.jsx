import { useContext } from "react";
import { createContext } from "react";

const ContextCart = createContext(null);

export const useCart = () =>{
    const cart = useContext(ContextCart);
    return cart;
}

