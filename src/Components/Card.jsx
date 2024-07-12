import React, { useState } from 'react';
import Food from '../Assets/Images/banana-leaf-food-Photoroom.png'

export const FlippingCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
        <div className="card-inner">
          <div className="card-front">

          </div>
          <div className="card-back">
            <button className='buy-button'>Buy Here</button>
          </div>
        </div>
      </div>
      <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
        <div className="card-inner">
          <div className="card-front">

          </div>
          <div className="card-back">
            <button className='buy-button'>Buy Here</button>
          </div>
        </div>
      </div>

      <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
        <div className="card-inner">
          <div className="card-front">

          </div>
          <div className="card-back">
            <button className='buy-button'>Buy Here</button>
          </div>
        </div>
      </div>
    </>
  );
};

export const StylishCard = () => {
  return (
    <>
      <div className='StylishCard'>

        <div className="StylishCard-img">
          <img src={Food} />
        </div>


        <div className='StylishCard-text'>
          <h1>Advantages of Eating in Leaf</h1>
          <ul>
            <li>Healthy Food</li>
            <li>Healthy Food</li>
            <li>Healthy Food</li>
            <li>Healthy Food</li>
          </ul>
        </div>


      </div>
    </>
  )
}
