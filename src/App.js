import { useState } from 'react';
import './App.css';
import Bikes from './components/Bikes/Bikes';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';

function App() {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart((prevState) => {
      return [...prevState, product]
    })
  }
  const clearCart = () =>{
    setCart([])
  }

  return (
    <div className="App">
      <Header clearCart={clearCart} cartItems={cart} />
      <HeroSection />
      <Bikes addBike={addToCart} />
    </div>
  );
}

export default App;
