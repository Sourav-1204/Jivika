import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { IoIosSearch } from "react-icons/io";
import { LiaCartPlusSolid } from "react-icons/lia";
import { IoMenuOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { ShopContext } from "../context/context";

export default function Navbar() {
  const { handleSearch, search, setSearch, cartItem } = useContext(ShopContext);
  const { darkMode, setDarkMode } = useContext(ShopContext);
  // const [toggleSearch, setToggleSearch] = useState(false);
  const [sideMenu, setSideMenu] = useState(false);

  return (
    <div className="navbar-container">
      <NavLink to={"/"}>
        <img src="/logo1.svg" alt="" />
      </NavLink>
      <div className="menu-on-big-screen">
        <div
          className="darkmode-container"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <MdDarkMode /> : <CiLight />}
        </div>
        <ul className="router-container">
          <NavLink to={"/"}>
            <p>Home</p>
          </NavLink>
          <NavLink to={"/collection"}>
            <p>Collections</p>
          </NavLink>
          <NavLink to={"/about"}>
            <p>About</p>
          </NavLink>
          <NavLink to={"/contact"}>
            <p>Contact</p>
          </NavLink>
        </ul>
        <div className="search-container">
          <input
            className="show"
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <IoIosSearch
            onClick={() => {
              search ? handleSearch(search) : "";
            }}
            style={{ fontSize: "27px", color: "#0c4ea0" }}
          />
        </div>
        <NavLink to={"/login"}>
          <FaUserCircle
            style={{ fontSize: "25px", color: "#0c4ea0", marginTop: "5px" }}
          />
        </NavLink>
        <NavLink to={"/cart"}>
          <div className="cart-icon-container">
            <LiaCartPlusSolid
              className=""
              style={{
                fontSize: "30px",
                marginTop: "5px",
                color: "#0c4ea0",
              }}
            />
            {cartItem && cartItem.length > 0 ? <p>{cartItem.length}</p> : null}
          </div>
        </NavLink>
      </div>
      <IoMenuOutline
        className="menuIcon"
        style={{ fontSize: "35px", color: "#0c4ea0" }}
        onClick={() => setSideMenu(!sideMenu)}
      />
      <div className={`${sideMenu ? "showMenu" : "hide"}`}>
        <ImCross
          style={{
            position: "relative",
            top: "50",
            left: "30",
            fontSize: "25px",
            color: "white",
          }}
          onClick={() => setSideMenu(!sideMenu)}
        />
        {/* <div onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <MdDarkMode /> : <CiLight />}
        </div> */}
        <ul>
          <li>
            <input
              className="show"
              type="text"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
            <IoIosSearch
              onClick={() => {
                search ? handleSearch(search) : "";
              }}
              style={{ fontSize: "27px", color: "#0c4ea0" }}
            />
          </li>
          <NavLink to="/" onClick={() => setSideMenu(false)}>
            <p>Home</p>
          </NavLink>
          <NavLink to="/collection" onClick={() => setSideMenu(false)}>
            <p>Collections</p>
          </NavLink>
          <NavLink to="/about" onClick={() => setSideMenu(false)}>
            <p>About</p>
          </NavLink>
          <NavLink to="/contact" onClick={() => setSideMenu(false)}>
            <p>Contact</p>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}
