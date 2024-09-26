import ProductCard from '../../components/ProductCard';

export default async function BeautyPage() {
  const res = await fetch('https://dummyjson.com/products/category/beauty');
  const data = await res.json();

  return (
    <div>
      <h2>Beauty Products</h2>
      <div>
        {data.products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
