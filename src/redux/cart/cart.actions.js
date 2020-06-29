import CartActionTypes from './cart.types';
import CartActionsTypes from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});

export const clearItemFromCart = item => ({
    type: CartActionsTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})