import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewCart from '../ReviewCart/ReviewCart';
import'./Orders.css';

const Orders = () => {
    const {products,initialCart} = useLoaderData();
    const [cart,setCart] = useState(initialCart);
    const handleReviewItem = (id)=>{
       const remaingItem = cart.filter(product=> product.id !== id);
       setCart(remaingItem);
       removeFromDb(id);
    }
    return (
        <div className='shop-container'>
        <div className="ordered-item-container">
           {
            cart.map(cartItem =><ReviewCart cartItem={cartItem} key={cartItem.id} handleReviewItem={handleReviewItem}></ReviewCart>)
           }
        </div>
        <div className="cart-container">
           <Cart cart={cart}></Cart>
        </div>
    </div>
    );
};

export default Orders;