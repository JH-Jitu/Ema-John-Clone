import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Product = (props) => {
    console.log(props)
    const {name, img, seller, stock, price} = props.product;
    return (
        <div className="d-flex justify-content-around product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h6>{name}</h6>
                <br/>
                <p><small>by: {seller}</small></p>
                <br/>
                <h4>${price}</h4>
                <p><small>Only {stock} left in stock - Order Now</small></p>
                <button onClick={() => props.handleAddProduct(props.product)} type="button" className="btn btn-warning"><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;