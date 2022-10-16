import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} =props;
    let total = 0;
    let shipping = 0;
    for(const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax =(total * 0.1).toFixed(2);
    return (
        <div className='cart'>
            <h4 className='cartTitle'>Order Summary</h4>
            <p>Selected Items: {props?.cart.length}</p>
            <p>Selected item</p>
            <p>Total price {total}</p>
            <p>Total shipping charge ${shipping}</p>
            <p>Tax {tax}</p>
            <p>Grand total</p>
            <button className='clear-cart'>Clear cart</button>
            <button className='order-review'>Review order</button>
        </div>
    );
};

export default Cart;