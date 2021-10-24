import React from "react";
import logo from "../Footer/logo.png"
import { Link } from "react-router-dom"
import './footer.css'
const Footer = () => (
  <footer>
    <Link to ="/">
      <img id="logo"
          src={logo}
          alt="Husky Q Up logo"
      />
    </Link>
    <p>&copy; Husky Q Up 2021</p>
  </footer>
);

export default Footer;