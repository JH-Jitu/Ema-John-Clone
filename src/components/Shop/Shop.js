import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css'
import Product from '../Product/Product';
import ShoppingCart from './../ShoppingCart/ShoppingCart'

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        // console.log("Product Added", product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className="d-flex justify-content-around">
           <div className="product-container col-md-9 mx-auto">
                <ul>
                    {
                        products.map(productValue => <Product 
                            handleAddProduct = {handleAddProduct}
                            product = {productValue}></Product>)
                    }
                </ul>
           </div>
           <div className="cart-container col-md-3 mx-auto">
                        <ShoppingCart cart = {cart}></ShoppingCart>
            </div> 
        </div>
    );
};

export default Shop;