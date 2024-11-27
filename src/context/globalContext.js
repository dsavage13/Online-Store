import { createContext } from "react";

//It's a promise / interface
//A description of the data structure
//But not implementation

const GlobalContext = createContext({
    cart: [],
    user: {},

    addToCart: () => {},
    removeFromCart: () => {},
    clearCart: () => {}
});

export default GlobalContext;
