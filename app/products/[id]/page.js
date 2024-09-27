import styles from './ProductPage.module.css';
import AddToCartButton from '../../components/AddToCartButton';

export default async function ProductPage({ params }) {
  const res = await fetch(`https://dummyjson.com/products/${params.id}`);
  const product = await res.json();

  return <ProductDetail product={product} />;
}

function ProductDetail({ product }) {
  // Ana resim olarak ilk resmi koyalım şimdlk.
  const mainImage = product.images[0];

  return (
    <div className={styles.container}>
      <div className={styles.productDetail}>
        <div className={styles.imageGallery}>
          {product.images?.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${product.title} ${index + 1}`}
              className={styles.thumbnail}
            />
          ))}
        </div>

        <div className={styles.mainImage}>
          <img src={mainImage} alt={product.title} />
        </div>

        <div className={styles.productInfo}>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.brand}>{product.brand}</p>
          <div className={styles.rating}>
            <span>{product.rating} / 5</span>
            <span>({product.reviews?.length} comment)</span>
          </div>
          <p className={styles.price}>{product.price} USD</p>
          <p className={styles.description}>{product.description}</p>
          <AddToCartButton stock={product.stock} />        </div>
      </div>

      <div className={styles.reviews}>
        <h2>Product Reviews</h2>
        {product.reviews?.map((review, index) => (
          <div key={index} className={styles.review}>
            <p>
              <strong>{review.reviewerName}</strong> -{' '}
              {new Date(review.date).toLocaleDateString()}
            </p>
            <p>Rating: {review.rating}</p>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
