import styles from './ProductPage.module.css';
import AddToCartButton from '../../components/AddToCartButton';
import ProductImageGallery from '../../components/ProductImageGallery';
import Link from 'next/link';
export default async function ProductPage({ params }) {
  const res = await fetch(`https://dummyjson.com/products/${params.id}`);
  const product = await res.json();

  return <ProductDetail product={product} />;
}

function ProductDetail({ product }) {

  return (
    <>
      <Link href="/" className="logo" >
        🏡
      </Link>
      <div className={styles.container}>
        <div className={styles.productDetail}>
          <ProductImageGallery images={product.images} title={product.title} />

          <div className={styles.productInfo}>
            <h1 className={styles.title}>{product.title}</h1>
            <p className={styles.brand}>{product.brand}</p>
            <div className={styles.rating}>
              <span>⭐{product.rating} / 5</span>
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
              <div className={styles.reviewHeader}>
                <strong className={styles.reviewerName}>{review.reviewerName}</strong>
                <span className={styles.reviewDate}>
                  {new Date(review.date).toLocaleDateString()}
                </span>
              </div>
              <div className={styles.reviewRating}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < review.rating ? styles.starFilled : styles.starEmpty}>
                    ★
                  </span>
                ))}
              </div>
              <p className={styles.reviewComment}>{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
