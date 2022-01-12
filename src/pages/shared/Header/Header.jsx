import React from "react";
import Navigation from "../Navigation";
import "./Header.css";
import HeaderTop from './../../Header/HeaderTop';
import HederMeddle from './../../Header/HederMeddle';

const Header = () => {
  return (
    <div>
      <HeaderTop />
      <HederMeddle />
      <Navigation />
    </div>
  );
};

export default Header;
