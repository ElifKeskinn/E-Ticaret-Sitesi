import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="logo">
          Eilfy 
        </Link>
        <div className="search-bar">
          <input type="text" placeholder="Search for product, category or brand" />
          <button type="submit">Search</button>
        </div>
        <ul className="nav-links">
          <li><Link href="/categories/beauty">Beauty</Link></li>
          <li><Link href="/categories/fragrances">Fragrances</Link></li>
          <li><Link href="/categories/furniture">Furniture</Link></li>
          <li><Link href="/categories/groceries">Groceries</Link></li>
        </ul>
        <div className="nav-icons">
          <Link href="/favorites" className="icon-link">
            <img src="/icons/heart.svg" alt="Favoriler" />
          </Link>
          <Link href="/cart" className="icon-link">
            <img src="/icons/cart.svg" alt="Sepet" />
          </Link>
          <Link href="/profile" className="icon-link">
            <img src="/icons/user.svg" alt="Profil" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;