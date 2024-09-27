import ProductCard from '../../components/ProductCard';
import styles from '../CategoryPage.module.css'

export default async function BeautyPage() {
  const res = await fetch('https://dummyjson.com/products/category/beauty');
  const data = await res.json();

  return (
    <div className={styles['category-title']}>
      <h2>Beauty Products</h2>
      <div className={styles['category-products']}>
        {data.products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
