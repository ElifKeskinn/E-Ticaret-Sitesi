import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";


export default async function Home() {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();
  const products = data.products;
  const sortedProducts = products.slice().sort((a, b) => b.rating - a.rating);//sıralama kodu

  return (
    <>
      <Navbar />
      <div className="home-container">
        {/* Banner */}
        <div className="banner">
          <img src="/images/banner.jpg" alt="Banner" />
        </div>
        {/* Ürün Listesi */}
        <h2 className="section-title">Featured Products</h2>
        <div className="product-list">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
