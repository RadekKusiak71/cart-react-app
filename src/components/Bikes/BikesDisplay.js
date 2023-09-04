import React, { useState } from 'react'
import classes from './BikesDisplay.module.css'
import bikeImage1 from '../../assets/products/bike1.jpg'
import bikeImage2 from '../../assets/products/bike2.jpg'

const BIKES_DATA = [
    {
        id:1,
        name: 'bike1',
        price: 20.00,
        image: bikeImage1,
    },
    {
        id:2,
        name: 'bike2',
        price: 20.00,
        image: bikeImage2,
    },
    {
        id:3,
        name: 'bike3',
        price: 20.00,
        image: bikeImage1,
    },
    {
        id:4,
        name: 'bike4',
        price: 20.00,
        image: bikeImage2,
    },
    {
        id:5,
        name: 'bike4',
        price: 20.00,
        image: bikeImage1,
    },
    {
        id:6,
        name: 'bike4',
        price: 20.00,
        image: bikeImage2,
    },
]

const BikesDisplay = (props) => {

    const checkBikeList = () => {
        if (BIKES_DATA) {
            return true
        }
        return false
    }

    const addBikeHandler = (bike) => {
        props.addBike(bike)
    }

    return (
        <div className={classes.bikes}>
            {checkBikeList &&
                BIKES_DATA.map((bike) => (
                    <div key={bike.id} className={classes['bike-data']}>
                        <img src={bike.image} />
                        <div className={classes['bike-data-description']}>
                            <p>{bike.name}</p>
                            <p>${bike.price}</p>
                            <button type='button' onClick={() => addBikeHandler(bike)}>Add to cart</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default BikesDisplay