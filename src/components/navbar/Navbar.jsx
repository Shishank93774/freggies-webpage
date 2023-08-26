import "./Navbar.css";
import Cookies from "js-cookie";
import { FiShoppingCart } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const account = Cookies.get("freggie-firstname") || "Account";
  return (
    <div className="navbar-container">
      <div className="title-container">Freggies</div>
      <div className="links-container">
        <ul className="links">
          <li className="link">
            {" "}
            <NavLink to="/"> Home </NavLink>{" "}
          </li>
          {account === "Account" && (
            <li className="link">
              {" "}
              <NavLink to="/login"> Login/SignUp </NavLink>{" "}
            </li>
          )}
          <li className="link">
            {" "}
            <NavLink to="/myaccount"> {account} </NavLink>{" "}
          </li>
          <li className="link">
            {" "}
            <NavLink to="/fruits"> Fruits </NavLink>{" "}
          </li>
          <li className="link">
            {" "}
            <NavLink to="/vegetables"> Vegetables </NavLink>{" "}
          </li>
          <li className="link">
            {" "}
            <NavLink to="/contact"> Contact </NavLink>{" "}
          </li>
          <li className="navbar-link cart-trolley--link">
            <NavLink to="/cart">
              {" "}
              <FiShoppingCart className="cart-trolley" />{" "}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
