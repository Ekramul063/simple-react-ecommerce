import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { addToDb,getStoreCart } from '../../utilities/fakedb';
import { useLoaderData } from 'react-router-dom';


const Shop = () => {
   const products = useLoaderData();
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        const savedCart =[];
       const storeCart= getStoreCart();
       for(const id in storeCart){
        const addedProduct = products.find(product => product.id === id);
       if(addedProduct){
        const quantity =storeCart[id];//if id in storeCart...get quantity//
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
       }
       }
       setCart(savedCart);
    },[products]);

    const handleAddToCart = (product) =>{
        // do not do this: cart.push(product);
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product=><Product 
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart ={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;