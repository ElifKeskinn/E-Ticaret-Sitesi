import Link from 'next/link';

const ProductCard = ({ product }) => {
  return (
    <div>
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.price} USD</p>
      <Link href={`/products/${product.id}`}>Details</Link>
    </div>
  );
};

export default ProductCard;
