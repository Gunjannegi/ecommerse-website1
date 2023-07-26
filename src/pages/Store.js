import { Fragment } from "react";
import { ListGroup } from 'react-bootstrap';
import ProductList from "../components/ProductList";
import classes from './pages.module.css';
import { Link } from 'react-router-dom';

const Store = () => {
    const productsArr = [
        {
            title: "Colors",

            price: 100,

            imageUrl:
                "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
            productId:'p1'
        },

        {
            title: "Black and white Colors",

            price: 50,

            imageUrl:
                "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
            productId: 'p2'
        },

        {
            title: "Yellow and Black Colors",

            price: 70,

            imageUrl:
                "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
            productId: 'p3'
        },

        {
            title: "Blue Color",

            price: 100,

            imageUrl:
                "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
            productId: 'p4'
        },
    ];
    const productList =
        <ListGroup>
            {productsArr.map((product) => (

                <ProductList
                    key={Math.floor(Math.random() * 100)}
                    title=
                    {<Link to={`/Store/${product.productId}`}>{product.title}</Link>}
                    price={product.price}
                    imageUrl={product.imageUrl}
                    productId={product.productId}
                />
            ))}
        </ListGroup>

    return (
        <Fragment>
            <div className={classes.title}>MUSIC</div>
            {productList}
        </Fragment>
    )

};
export default Store;