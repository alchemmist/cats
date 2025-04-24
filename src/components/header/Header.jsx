import "./Header.css";
import { Link } from "react-router";
import * as auth from "../../stores/auth";

function Header() {
  return (
    <nav>
      <div className="main-side">
        <Link to="/">Главная</Link>
        <Link to="/favorites">Избранное</Link>
      </div>
      <div className="profile-side">
        <Link to="/profile">
          <img alt="Аватарка" src="/src/assets/user.png" />
          {auth.isAuthorized() && "Профиль"}
        </Link>
      </div>
    </nav>
  );
}

export default Header;
