import React from 'react'
import classes from './Header.module.css'
import Cart from '../Cart/Cart';
const Header = (props) => {
  return (
    <div className={classes.header}>
        <h2 className={classes['header-logo']}>BikeRental</h2>
        <Cart clearCart={props.clearCart} cartItems={props.cartItems}/>
    </div>
  )
}

export default Header