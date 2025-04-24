import "./Header.css";
import { Link } from "react-router";

function Header() {
  return (
    <nav>
      <Link to="/">Главное</Link>
      <Link to="/favourites">Избранное</Link>
      <Link to="/me">Профиль</Link>
    </nav>
  );
}

export default Header;
