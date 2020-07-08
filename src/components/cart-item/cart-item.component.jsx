import React from 'react';

import {
    CartItemContainer,
    CartItemImage,
    ItemDetailsContainer,
    PriceContainer
} 
from './cart-item.styles';


const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <CartItemContainer>
        <CartItemImage src={imageUrl} alt="item"/>
        <ItemDetailsContainer>
            <PriceContainer>{name}</PriceContainer>
            <span className='price'>{quantity} x ${price}</span>    
        </ItemDetailsContainer>
    </CartItemContainer>
)

export default CartItem;