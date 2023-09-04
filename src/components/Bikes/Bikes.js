import React from 'react'
import classes from './Bikes.module.css'
import BikesDisplay from './BikesDisplay'

const Bikes = (props) => {
    return (
        <div className={classes['bikes-container']}>
            <p>Bikes</p>
            <BikesDisplay addBike={props.addBike}/>
        </div>
    )
}

export default Bikes