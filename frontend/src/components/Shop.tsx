import React from 'react';
import { useCookies } from '../context/CookieContext';
import '../styles/Shop.css';

const Shop: React.FC = () => {
  const { shopItems, buyItem, cookies } = useCookies();

  return (
    <div className="shop-container">
      <h2>Shop</h2>
      <ul>
        {shopItems.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price} cookies
            <button
              onClick={() => buyItem(item.name, item.price)}
              disabled={cookies < item.price}
            >
              Buy
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shop;
