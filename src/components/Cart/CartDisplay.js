import React, { useEffect, useState } from 'react'
import classes from './CartDisplay.module.css'

const CartDisplay = (props) => {
    const [items, setItems] = useState([])
    useEffect(() => {
        let itemsArr = []
        props.cartItems.forEach(element => {
            itemsArr.push(element)
        });
        setItems(itemsArr)
    }, [props.cartItems])


    return (
        <div className={classes['cart-display-container']}>
            <div className={classes['cart-content']}>
                <div className={classes['cart-close']}>
                    <p>Your Items: (price:${props.price})</p>
                    <p onClick={props.clearCart}>Clear Cart</p>
                    <p onClick={props.hideCart}>X</p>
                </div>
                <div className={classes['cart-items-cont']}>
                    {items.map((bike,index) => (
                        <div key={index} className={classes['cart-item']}>
                            <img src={bike.image} />
                            <p>Name: {bike.name}</p>
                            <p>Price: ${bike.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CartDisplay