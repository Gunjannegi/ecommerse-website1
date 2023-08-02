import { Fragment } from 'react';
import classes from './productDetails.module.css';
import { useParams } from 'react-router-dom';
import star from './filledStar.png'
import emptyStar from './emptyStar.png';
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
                                <h5>{product.title}</h5>
                                <h6 className={classes.highlight}>Special price</h6>
                                <h3>{`$${product.price}`}</h3>
                                <h5>Ratings and Reviews </h5>
                                <div className={classes.rating}>
                                    <div className={classes.stars}>
                                        <span >
                                            <img className={classes.star1} src={emptyStar} alt='star'></img></span>
                                        <span>
                                            <img className={classes.star2} src={star} alt='star'></img>
                                        </span>
                                        <span>
                                            <img className={classes.star3} src={star} alt='star'></img>
                                        </span>
                                        <span>
                                            <img className={classes.star4} src={star} alt='star'></img>
                                        </span>
                                        <span>
                                            <img className={classes.star5} src={star} alt='star'></img>
                                        </span>
                                    </div>
                                    <div className={classes.info}>
                                        <span className={classes.value}>4.0 </span>
                                        <span className={classes.of}>out of 5</span>
                                        <span className={classes.count}>(2458 reviews)</span>
                                    </div>
                                </div>
                                <form className="col-md-4">
                                    <label className={classes.highlight}>Delivery For</label>
                                    <input className={classes.input} type='pincode' placeholder='Enter Pincode'></input>
                                </form>
                                <h6 className={classes.highlight}>Seller</h6>
                                <h6>Album Shop
                                    <li style={{ color: 'grey', fontSize: '15px' }}>7 days return policy</li>
                                </h6>

                                <div>
                                    <h5 className={classes.highlight}>Available Offers
                                        <li style={{ color: 'grey', fontSize: '15px' }}>Get extra 10% off on your first purchase.</li>
                                        <li style={{ color: 'grey', fontSize: '15px' }}>Sign-up for Pay Later Service & get free Times Prime Benefits worth ₹10,000</li>
                                    </h5>
                                </div>

                                <div>
                                    <span>
                                        <button className={classes.button}>BUY NOW</button>
                                    </span>
                                    <span>
                                        <button className={classes.button}>ADD TO CART</button>
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>

                ))}
            </section>
        </Fragment>
    )
};
export default ProductDetails;