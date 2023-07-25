import { useContext } from "react";
import { Col, Row, Button, ListGroup } from "react-bootstrap";
import CartContext from "../store/cart-context";
import CartTotalAmount from "./CartTotalAmount";
const CartElements = () => {
    const cartCntxt = useContext(CartContext);

    return (
        <>
            <h3>Cart</h3>
            <Row>
                <Col>Item</Col>
                <Col>Price</Col>
                <Col>Quantity</Col>

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
                            </Row>
                            <Button variant="outline-primary" size="sm">-</Button>
                        </ListGroup.Item>
                    ))

                }
            </ListGroup>
            <CartTotalAmount></CartTotalAmount>
        </>
    )
};
export default CartElements