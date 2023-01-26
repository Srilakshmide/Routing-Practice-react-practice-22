import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="header">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="wave-img"
      />
      <h1 className="wave-text">Wave</h1>
    </div>
    <ul className="nav-menu">
      <li className="list-item">
        <Link to="/">Home</Link>
      </li>
      <li className="list-item">
        <Link to="/about">About</Link>
      </li>
      <li className="list-item">
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
)

export default Header
