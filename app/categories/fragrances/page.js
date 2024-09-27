import ProductCard from '../../components/ProductCard';

export default async function FragrancesPage() {
  const res = await fetch('https://dummyjson.com/products/category/fragrances');
  const data = await res.json();

  return (
    <div>
      <h2>Fragrances Products</h2>
      <div>
        {data.products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
