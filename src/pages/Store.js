 import { Fragment } from "react";
import { ListGroup } from 'react-bootstrap';
import ProductList from "../components/ProductList";
import classes from './pages.module.css';
    const Store = () => {
        const productsArr = [
            {
                title: "Colors",

                price: 100,

                imageUrl:
                    "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
            },

            {
                title: "Black and white Colors",

                price: 50,

                imageUrl:
                    "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
            },

            {
                title: "Yellow and Black Colors",

                price: 70,

                imageUrl:
                    "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
            },

            {
                title: "Blue Color",

                price: 100,

                imageUrl:
                    "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
            },
        ];
        const productList =
            <ListGroup>
                {productsArr.map((product) => (
                    <ProductList
                        key={Math.floor(Math.random() * 100)}
                        title={product.title}
                        price={product.price}
                        imageUrl={product.imageUrl}
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