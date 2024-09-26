export default async function ProductPage({ params }) {
    const res = await fetch(`https://dummyjson.com/products/${params.id}`);
    const product = await res.json();
  
    return (
      <div>
        <h2>{product.title}</h2>
        <img src={product.images[0]} alt={product.title} />
        <p>{product.description}</p>
        <p>Price: {product.price} USD</p>
        {/* Burada diğer ürün bilgilerini eklicem yarın pls */}
      </div>
    );
  }
