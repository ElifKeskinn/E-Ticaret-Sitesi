import ProductCard from '../../components/ProductCard';

export default async function FurniturePage() {
  const res = await fetch('https://dummyjson.com/products/category/furniture');
  const data = await res.json();

  return (
    <div>
      <h2>Furniture Products</h2>
      <div>
        {data.products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}