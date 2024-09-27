import Link from 'next/link';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link href={`/products/${product.id}`} className="product-link">
        <div className="product-image">
          <img src={product.thumbnail} alt={product.title} />
        </div>
        <div className="product-info">
          <h3 className="product-title">{product.title}</h3>
          <div className="product-rating-price">
            <span className="product-rating">
              ⭐ {product.rating.toFixed(1)}
            </span>
            <span className="product-price">{product.price} USD</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;