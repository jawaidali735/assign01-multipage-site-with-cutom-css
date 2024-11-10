import Link from "next/link";
import '../styles/header.css'


const Header = ()=> {
    return (
        <header className="header">
        
        <div className="logo">
          <h2>Travel<span>Spot</span> </h2>
        </div>
  
        
        <nav className="nav-links">
          <Link href="/">
            <div className="nav-item">Home</div>
          </Link>
          <Link href="/about">
            <div className="nav-item">About</div>
          </Link>
          <Link href="/destinations">
            <div className="nav-item">Destinations</div>
          </Link>
          <Link href="/contact">
            <div className="nav-item">Contact</div>
          </Link>
        </nav>
      </header>
    )
}

export default Header;