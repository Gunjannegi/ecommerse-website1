import { useContext } from "react";
import { Col, Row, Button, ListGroup } from "react-bootstrap";
import CartContext from "../store/cart-context";
import CartTotalAmount from "./CartTotalAmount";
import classes from './cartElement.module.css';
const CartElements = () => {
    const cartCntxt = useContext(CartContext);
    const deleteAnItem = (event) => {
        cartCntxt.removeItem(event.target.value)

    }

    return (
        <div className={classes.container}>
            <h3>Cart</h3>
            <Row>
                <Col>Item</Col>
                <Col>Price</Col>
                <Col>Quantity</Col>
                <Col>Delete</Col>
            </Row>
            <ListGroup>
                {
                    cartCntxt.items.map((element) => (
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    {element.title}</Col>
                                <Col>
                                    {element.price}</Col>
                                <Col>
                                    {element.quantity}</Col>
                            <Col>
                                    <Button variant="outline-primary"
                                        size="sm" value={element.productId}
                                        onClick={deleteAnItem}>-</Button></Col>
                            </Row>
                        </ListGroup.Item>
                    ))

                }
            </ListGroup>
            <CartTotalAmount></CartTotalAmount>
        </div>
    )
};
export default CartElements