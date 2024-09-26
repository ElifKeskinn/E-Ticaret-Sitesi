import Link from "next/link";

const Navbar = () => {
    return (
      <nav>
        <h1>Products</h1>
        <ul>
          <li><Link href="/categories/beauty">Beauty</Link></li>
          <li><Link href="/categories/fragrances">Fragrances</Link></li>
          <li><Link href="/categories/furniture">Furnitures</Link></li>
          <li><Link href="/categories/groceries">Groceries</Link></li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;