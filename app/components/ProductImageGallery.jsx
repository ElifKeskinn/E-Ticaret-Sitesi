"use client";

import { useState } from 'react';
import styles from './ProductImageGallery.module.css';

export default function ProductImageGallery({ images, title }) {
  const [mainImage, setMainImage] = useState(images[0]);

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.mainImage}>
        <img src={mainImage} alt={title} />
      </div>
      <div className={styles.thumbnailContainer}>
        {images?.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${title} ${index + 1}`}
            className={`${styles.thumbnail} ${
              image === mainImage ? styles.activeThumbnail : ''
            }`}
            onClick={() => handleThumbnailClick(image)}
          />
        ))}
      </div>
    </div>
  );
}