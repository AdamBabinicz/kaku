import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/1.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  const toggle = () => setMenuOpened(!menuOpened);

  return (
    <div className="header">
      <img src={Logo} alt="..." className="logo" />
      {menuOpened === false && mobile === true ? (
        <FaBars
          style={{ width: "1.5rem", height: "1.5rem", color: "#fff" }}
          onClick={() => setMenuOpened(!menuOpened)}
        />
      ) : (
        <ul className="header-menu" onClick={toggle}>
          {!menuOpened ? <FaBars /> : <FaTimes />}
          <li>
            <Link to="start" span={true} activeClass="active" onClick={toggle}>
              Start
            </Link>
          </li>
          <li>
            <Link to="wiadomości" span={true} onClick={toggle}>
              Wiadomości
            </Link>
          </li>
          <li>
            <Link to="unifikacja" span={true} onClick={toggle}>
              Unifikacja
            </Link>
          </li>
          <li>
            <Link to="autor" span={true} onClick={toggle}>
              Autor
            </Link>
          </li>
          <li>
            <Link to="myśli" span={true} onClick={toggle}>
              Myśli
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;

// https://www.17bankow.com/poradniki/876/odrzucenie-spadku-najwazniejsze-informacje-kto-i-kiedy-moze-z-niego-zrezygnowac-skutki-koszty
