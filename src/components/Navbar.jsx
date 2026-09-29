import { Link } from 'react-router-dom'
import Search from './Search'

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
        <div className="logo">Coca-Cola</div>
      </Link>
      <div className="links">
        <Link to="/">Главная</Link>
        <Link to="/flavors">Вкусы</Link>
      </div>
      <Search />
    </nav>
  )
}

export default Navbar