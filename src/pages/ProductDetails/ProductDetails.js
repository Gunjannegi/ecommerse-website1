import { Fragment } from 'react';
import classes from './productDetails.module.css';
import { useParams } from 'react-router-dom';
const ProductDetails = () => {
    const { productId } = useParams();
    const productsArr = [
        {
            title: "Colors",

            price: 100,

            imageUrl:
                "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
            productId: 'p1'
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

    const selectedProduct = productsArr.filter(product => (
        product.productId === productId
    ))
    return (
        <Fragment>
            <div className={classes.title}>Product Details</div>
            <section>
                {selectedProduct.map(product => (
                    <div className='container'>
                        <div className='row'>
                            <div className="col-md-4">
                                <img src={product.imageUrl} alt={'product'}></img></div>
                            <div className="col-md-4">
                                <h4>{product.title}</h4>
                                <h3>{`$${product.price}`}</h3>
                            </div>
                        </div>
                    </div>

                ))}
            </section>
        </Fragment>
    )
};
export default ProductDetails;