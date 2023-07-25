import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
    const [items, setItems] = useState([]);

    const addingItemToCart = (item) => {
        let flag = false;
        items.forEach(i => {
            if (i.title === item.title) {
                i.quantity = i.quantity + 1;
                flag = true;
                setItems([...items])
            }
        })
        if (flag === false) {
            setItems((prevItems) => {
                return ([...prevItems, item])
            })
        }
    };

    const removingItemFromCart = (id) => {

    };
    const cartContext = {
        items: items,
        totalAmount: 0,
        addItem: addingItemToCart,
        removeItemm: removingItemFromCart
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}</CartContext.Provider>

};
export default CartProvider;