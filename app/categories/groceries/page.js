import ProductCard from '../../components/ProductCard';
import styles from '../CategoryPage.module.css'
import Navbar from '../../components/Navbar';


export default async function GroceriesPage() {
  const res = await fetch('https://dummyjson.com/products/category/groceries');
  const data = await res.json();

  return (
    <>
      <Navbar />

      <div className={styles['category-title']}>
        <h2>Groceries Products</h2>
        <div className={styles['category-products']}>
          {data.products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}

