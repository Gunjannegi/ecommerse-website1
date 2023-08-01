import { useContext } from "react";
import CartContext from "./store/cart-context";
import classes from './productList.module.css'
import { NavLink } from 'react-router-dom';

const ProductList = (props) => {
        const cartCntxt = useContext(CartContext);
    const addingItem = (event) => {
        event.preventDefault();
        let quantity = 1;
        cartCntxt.addItem({ ...props, quantity: quantity, })
    }

        return (
            <div>
                <div className={classes.title1}>
                    <NavLink to={`/Store/${props.productId}`} className={classes.title1}>{props.title}</NavLink>   
                </div>
                <div>
                    <img src={props.imageUrl} alt='img' thumbnail='true' />
                </div>
                <div className={classes.price}>
                    <span xs={2}>{`$${props.price}`}</span>
                    <span>
                        <button className={classes.button} onClick={addingItem}>ADD TO CART</button>
                    </span>
                </div>

            </div>
        )
    };
    export default ProductList;

