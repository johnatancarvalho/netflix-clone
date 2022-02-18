import "./Header.css";

import NetflixLogo from "../../assets/img/netflix_logo.svg";

const Header = () => {
  return (
    <header>
      <div>
        <img src={NetflixLogo} alt="Netflix" className="" />
      </div>
    </header>
  );
};

export default Header;
