import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { LiaCartPlusSolid } from "react-icons/lia";
import { RiMenu3Line } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { ShopContext } from "../../context/context";
import Search from "../searchProducts/search";
import { useSelector } from "react-redux";

export default function Navbar() {
  const { count } = useSelector((state) => state.cart);
  const { cartItem } = useContext(ShopContext);
  const { darkMode, setDarkMode } = useContext(ShopContext);
  const [sideMenu, setSideMenu] = useState(false);

  return (
    <div className="navbar-container">
      <div className="flex items-center justify-between gap-5">
        <NavLink to={"/"}>
          <img src="/logo2.svg" alt="" className="md:mr-5" />
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
          </ul>
          <NavLink to={"/login"}>
            <FaUserCircle style={{ fontSize: "25px", color: "#00061B" }} />
          </NavLink>
          <NavLink to={"/cart"}>
            <div className="cart-icon-container">
              <LiaCartPlusSolid
                className=""
                style={{
                  fontSize: "25px",
                  color: "#00061B",
                }}
              />
              {count > 0 ? <p>{count}</p> : null}
            </div>
          </NavLink>
        </div>
        <RiMenu3Line
          className="menuIcon"
          style={{ fontSize: "25px", color: "#00061B" }}
          onClick={() => setSideMenu(true)}
        />
      </div>
      <div className="md:w-[40%] w-full flex justify-center items-center">
        <Search className="" />
      </div>
      <div className={`sidebar ${sideMenu ? "activeMenu" : ""}`}>
        <ImCross
          className="size-6 m-6 mt-10"
          onClick={() => setSideMenu(false)}
        />
        {/* <div onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <MdDarkMode /> : <CiLight />}
        </div> */}
        <div className="sub-container">
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
