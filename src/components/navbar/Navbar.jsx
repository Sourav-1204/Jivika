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
        <img src="/logo2.svg" alt="" />
      </NavLink>
      <div className="menu-on-big-screen">
        <div
          className="darkmode-container"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? (
            <MdDarkMode color="#00061B" />
          ) : (
            <CiLight color="#00061B" />
          )}
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
            style={{ fontSize: "27px", color: "#00061B" }}
          />
        </div>
        <NavLink to={"/login"}>
          <FaUserCircle
            style={{ fontSize: "25px", color: "#00061B", marginTop: "5px" }}
          />
        </NavLink>
        <NavLink to={"/cart"}>
          <div className="cart-icon-container">
            <LiaCartPlusSolid
              className=""
              style={{
                fontSize: "25px",
                marginTop: "5px",
                color: "#00061B",
              }}
            />
            {cartItem && cartItem.length > 0 ? <p>{cartItem.length}</p> : null}
          </div>
        </NavLink>
      </div>
      <IoMenuOutline
        className="menuIcon"
        style={{ fontSize: "35px", color: "#00061B" }}
        onClick={() => setSideMenu(!sideMenu)}
      />
      <div className={`${sideMenu ? "showMenu" : "hide"}`}>
        <ImCross
          style={{
            position: "static",
            fontSize: "30px",
            color: "black",
          }}
          onClick={() => setSideMenu(!sideMenu)}
        />
        {/* <div onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <MdDarkMode /> : <CiLight />}
        </div> */}
        <div className="sub-container">
          <div className="input-search">
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
              style={{ fontSize: "27px", color: "#00061B" }}
            />
          </div>
          <div className="navlink-container">
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
          </div>
        </div>
      </div>
    </div>
  );
}
