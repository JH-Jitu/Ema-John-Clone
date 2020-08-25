import React from 'react';
import './ShoppingCart.css'

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    const total = cart.reduce( (total, productInform) => total + productInform.price, 0)
    let shippingCost = 0;
    if(total > 50){
        shippingCost = 2;
    }
    else if(total > 30){
        shippingCost = 4;
    }
    return (
        <div>
            <div className="card" style={{width: "18 rem"}}>
                <div className="card-body">
                    <h5 className="card-title">Order Summary</h5>
                    <p className="card-text">Items Ordered: {cart.length}</p>
                    <p className="card-text">Total Amount: {total.toFixed(2)}</p>
                    <p className="card-text"><small> Items Ordered: ${shippingCost}</small> </p>
                </div>
            </div> 
        </div>
    
    );
};

export default Cart;