import React, { useContext } from "react";
import Button from "./Button";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { MyContext } from "../App";
const Navbar = () => {
  const context = useContext(MyContext);
  return (
    <div className="navbar" style={context.theme}>
      <div className="left">
        <h2>Geekster</h2>
      </div>
      <div className="middle" >
        <Link to="/" className="link" >
          <h3 style={{color:context.theme.color}}>Home</h3>
        </Link>
        <Link to="/contact" className="link">
          <h3 style={{color:context.theme.color}}>Contact</h3>
        </Link>
        <Link to="/service" className="link">
          <h3 style={{color:context.theme.color}}>Service</h3>
        </Link>
      </div>
      <div className="right">
        <Button />
      </div>
    </div>
  );
};

export default Navbar;
