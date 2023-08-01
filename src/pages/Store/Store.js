import { Fragment } from "react";
import classes from './store.module.css';
import ProductList from "../../components/ProductList";

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
        <ul className={classes.ul}>
            {productsArr.map((product) => (
                <li className={classes.li}>
                    <ProductList
                        key={product.productId}
                        title={product.title}
                    price={product.price}
                    imageUrl={product.imageUrl}
                    productId={product.productId}
                    />
                </li>
            ))}
        </ul >

    return (
        <Fragment>
            <div className={classes.heading}>MUSIC</div>
            {productList}
        </Fragment>
    )

};
export default Store;