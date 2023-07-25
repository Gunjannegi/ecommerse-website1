import { useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import CartContext from '../store/cart-context';
const CartTotalAmount = () => {
    const cartCntxt = useContext(CartContext);
    let totalAmount = 0;
    cartCntxt.items.forEach((item) => {
        totalAmount = totalAmount + (item.quantity * item.price)
    })
    return (
        <Row>
            <Col>Total : </Col>
            <Col>{totalAmount}</Col>
        </Row>
    )
};
export default CartTotalAmount;