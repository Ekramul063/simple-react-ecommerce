
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faTrash } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import'./ReviewCart.css'

const ReviewCart = ({cartItem,handleReviewItem}) => {
    const {id,name,quantity,price,img}=cartItem

    return (
        <div className='cartItem'>
            <div className='shape'>
            <div className="ordered-item">
                <div className='products-thumnail'>
                    <img src={img} alt="" />
                </div>
          
            </div>
                <div className='review-details'>
                <h4>{name}</h4>
                <p><span className='price'> Price:{price} $</span> Quantity:{quantity} $</p>
                </div>
            </div>
           
            <div>
                <button className='delete' onClick={()=>handleReviewItem(id)}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon> Delete</button>
            </div>           
        </div>
    );
};

export default ReviewCart;