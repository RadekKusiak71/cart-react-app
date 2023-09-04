import React from 'react'
import classes from './HeroSection.module.css'
import bikePhoto from '../../assets/photos/bikes.jpg'
const HeroSection = () => {
  return (
    <div className={classes['hero-container']}>
        <div className={classes['hero-text']}>
            <p>BikeRental</p>
            <p>We will help you to choose</p>
            <p>A perfect bike for you</p>
        </div>
        <img src={bikePhoto}/>
    </div>
  )
}

export default HeroSection