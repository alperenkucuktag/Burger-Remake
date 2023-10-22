import React from "react";

import Logo from "../Assets/Logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      
        <div className="leftside" data-aos="fade-right"data-aos-duration="1500">
          <img src={Logo} alt=""/>
        </div>
        <div className="rightside"data-aos="fade-left"data-aos-duration="1500">
          <Link to="/">Anasayfa</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">Hakkında</Link>
          <Link to="/contact">İletişim</Link>
        </div>
      
    </div>
  );
};

export default Navbar;
