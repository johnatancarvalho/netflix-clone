import "./Header.css";

import NetflixLogo from "../../assets/img/netflix_logo.svg";
import NetflixAvatar from "../../assets/img/netflix_avatar.png";

const Header = ({ black }) => {
  return (
    <header className={black && "header--black"}>
      <div className="header--logo">
        <a href="/">
          <img src={NetflixLogo} alt="Netflix" className="" />
        </a>
      </div>
      <a href="/">
        <div className="header--user">
          <img src={NetflixAvatar} alt="User" className="" />
        </div>
      </a>
    </header>
  );
};

export default Header;
