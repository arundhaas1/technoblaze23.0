import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Header.css";

function Header() {
  const history = useHistory();

  const [Click, setClick] = useState(false);

  const changeToogle = () => {
    setClick(!Click);
  };

  return (
    <div className="header">
      <div className="header__left">
        <img alt="" src="assets/techlogo.png" />
      </div>
      <div className="header__right">
        <p onClick={() => history.push("/")}>Home</p>
        <p onClick={() => history.push("/events")}>Events</p>
        <p onClick={() => history.push("/register")}>Register</p>
        <a
          href="https://gcesalem.edu.in/"
          style={{ textDecoration: "none", color: "white" }}
        >
          <p className="about">About Gce</p>
        </a>
        <p onClick={() => history.push("/memories")}>memories</p>
        <p onClick={() => history.push("/contact")}>Contact</p>
        <img
          alt=""
          src="assets/menu.png"
          className="nav__menu"
          style={{ marginRight: "10px" }}
          onClick={changeToogle}
        />
      </div>


      {Click ? (
        <div className="toggle">
          <Link style={{ textDecoration: "none" }} className="header__t" to="/">
            <p>Home</p>
          </Link>
          <Link style={{ textDecoration: "none" }} className="header__t" to="/events">
            <p>Events</p>
          </Link>
          <Link style={{ textDecoration: "none" }} className="header__t" to="/register">
            <p>Register</p>
          </Link>
          <a style={{ textDecoration: "none" }} className="header__t" href="https://gcesalem.edu.in/">
            <p>About GCE</p>
          </a>
          <Link style={{ textDecoration: "none" }} className="header__t" to="/memories">
            <p>Memories</p>
          </Link>
          <Link style={{ textDecoration: "none" }} className="header__t" to="/contact">
            <p>Contact</p>
          </Link>
        </div>
      ) : null}


    </div>
  );
}

export default Header;
