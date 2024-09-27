"use client";

import { useState } from 'react';
import styles from './AddToCartButton.module.css';

export default function AddToCartButton({ stock }) {
  const [quantity, setQuantity] = useState(1);

 
  return (
    <div className={styles.container}>
      <div className={styles.quantityControls}>
        <button onClick={() => setQuantity(prev=>prev - 1 )} >
          -
        </button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity(prev=> prev === stock ? prev : prev + 1 )} >
          +
        </button>
      </div>
      <button className={styles.addToCartButton}>Sepete Ekle</button>
    </div>
  );
}
