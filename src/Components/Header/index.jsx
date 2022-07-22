import { Link } from "react-router-dom";
import Logo from "../../images/Coca-Cola_logo.png";

import "./style.scss";

const Header = () => {
  return (
    <header>
      <figure>
        <img src={Logo} alt="logo Coca-Cola" />
      </figure>

      <nav className="Menu-Navegation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/whatsnew">Whats'new</Link>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
