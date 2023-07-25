import { useContext } from "react";
import CartContext from "./store/cart-context";

    const ProductList = (props) => {
        const cartCntxt = useContext(CartContext);
        const addingItem = (event) => {
            event.preventDefault();
            let quantity = 1;
            cartCntxt.addItem({ ...props, quantity: quantity })
        }
        return (
            <div>
                <div>
                    <h3>{props.title}</h3>
                </div>
                <div>
                    <img src={props.imageUrl} alt='img' thumbnail />
                </div>
                <div>
                    <span xs={2}>{`$${props.price}`}</span>
                    <span>
                        <button onClick={addingItem}>ADD TO CART</button>
                    </span>
                </div>

            </div>
        )
    };
    export default ProductList;

