import React from 'react';
import './Herosection.css';

export default function Herosection() {
  return (
    <div className='header'>
      <div className="header-contents">
        <div className="text-container">
          <h2>Secure your Finances now</h2>
          <div className="button-container">
            <button>View more</button>
          </div>
        </div>
        <img src="https://i.pinimg.com/736x/07/41/99/074199fa1ecb58dbe651e58f67133cfb.jpg" alt="Financial Planning" />
      </div>
    </div>
  );
}

