import { Button, Overlay } from "react-bootstrap";
import { useContext, useRef, useState } from "react";
import CartElements from "./CartElements";
import CartContext from "../store/cart-context";
const Cart = () => {
    const cartCntxt = useContext(CartContext);
    let totalQuantity = 0;
    cartCntxt.items.forEach(item => {
        totalQuantity = totalQuantity + item.quantity;
    })
    const [show, setShow] = useState(false);
    const target = useRef(null)
    const showOnScreen = () => {
        setShow(!show)
    }
    return (
        <>
            <Button variamt="Dark" onClick={showOnScreen} ref={target}>Cart
                <span className='badge bg-secondary'>{totalQuantity}</span></Button>
            <Overlay target={target.current} show={show} placement='left'>
                {({ placement, arrowProps, show: _show, popper, ...props }) => (

                    <div
                        {...props}
                        style={{
                            backgroundColor: "white",
                            padding: '2px 10px',
                            color: 'black',
                            borderRadius: 3,
                            ...props.style
                        }}
                    >
                        <CartElements />
                    </div>
                )}
            </Overlay>
        </>
    )
};
export default Cart;