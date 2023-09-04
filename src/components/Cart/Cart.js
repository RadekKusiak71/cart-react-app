import React, { useEffect, useState } from 'react';
import cartIcon from '../../assets/icons/cart.svg';
import classes from '../Header/Header.module.css';
import CartDisplay from './CartDisplay';
const Cart = (props) => {
    const [cart, setCart] = useState(false)
    const [price, setPrice] = useState(0);

    useEffect(() => {
        const calculatePrice = () => {
            let totalPrice = 0;
            props.cartItems.forEach(element => {
                totalPrice += element.price
            })
            return +totalPrice
        }
        let totalPrice = calculatePrice()
        setPrice(totalPrice)
    }, [props.cartItems])

    const displayCart = () => {
        setCart(true)
    }
    const hideCart = () =>{
        setCart(false)
    }
    return (
        <React.Fragment>
            {cart && <CartDisplay clearCart={props.clearCart} price={price} hideCart={hideCart} cartItems={props.cartItems} />}
            <div className={classes['header-menu']}>
                <span>${price}</span>
                <span onClick={() => displayCart()} className={classes['cart-icon']}>
                    <img src={cartIcon} alt="Cart Icon" />
                </span>
            </div>
        </React.Fragment>
    );
};

export default Cart;
