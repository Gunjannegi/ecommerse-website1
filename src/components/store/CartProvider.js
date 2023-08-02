import axios from 'axios';
import { useContext } from 'react';
import { useState } from "react";
import AuthContext from './auth-context';
import CartContext from "./cart-context";

const CartProvider = (props) => {
    const [items, setItems] = useState([]);
    const email = localStorage.getItem('email')
    const authCntxt = useContext(AuthContext);
    if (email) {
        var emailStr = email.replace(/[^a-zA-Z0-9 ]/g, '');

    }


    const savingItemsInCart = async () => {
        const response = await axios.get(`https://crudcrud.com/api/908d9a6d31ff42018724190ebd4481d6/cart${emailStr}`)
        console.log('successful', response.data)
        if (items.length === 0 && response.data.length !== 0) {
            setItems(response.data)
        }
    }
    if (authCntxt.isLoggedIn && items.length === 0) {
        savingItemsInCart()
    }


    const addingItemToCart = async (item) => {

        let flag = false;
        items.forEach(i => {
            if (i.title === item.title) {
                i.quantity = i.quantity + 1;
                flag = true;
                setItems([...items])
            }
        })
        if (flag === false) {
            setItems(prevItems => {
                return ([...prevItems, item])
            })
        }
        try {
            const response = await axios.get(`https://crudcrud.com/api/908d9a6d31ff42018724190ebd4481d6/cart${emailStr}`)
            const existingCartItems = response.data;
            const data = existingCartItems.find((i) => {
                return i.productId === item.productId;
            })

            if (!data) {
                const response = await axios.post(`https://crudcrud.com/api/908d9a6d31ff42018724190ebd4481d6/cart${emailStr}`, item)
                console.log('successful', response.data)
            }
            else {               
                const response = await axios.put(`https://crudcrud.com/api/908d9a6d31ff42018724190ebd4481d6/cart${emailStr}/${data._id}`, {
                    quantity: data.quantity + 1,
                    price: data.price,
                    title: data.title,
                    productId: data.productId,   
                })
                
                console.log('successful', response.data)
            }
        } catch (error) {
            console.log('failed', error)
        }
    };

    const removingItemFromCart = async (id) => {
        
        try {
            const response = await axios.get(`https://crudcrud.com/api/908d9a6d31ff42018724190ebd4481d6/cart${emailStr}`)
            const existingCartItems = response.data;
            console.log(existingCartItems)
            const data = existingCartItems.find((i) => {
                return i.productId === id;
            })
            if (data) {
                const response = await axios.delete(`https://crudcrud.com/api/908d9a6d31ff42018724190ebd4481d6/cart${emailStr}/${data._id}`)
                console.log(response.data)
            }
        } catch (error) {
            console.log(error)
        }
        setItems(() => {
            const restItem = items.filter((item) => item.productId !== id);
            return restItem;
        })
        
    };

      
    const cartContext = {
        email: email,
        items: items,
        totalAmount: 0,
        addItem: addingItemToCart,
        removeItem: removingItemFromCart
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}</CartContext.Provider>

};
export default CartProvider;