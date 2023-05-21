import React, { useContext } from "react";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../assets/car_logo.jpg";
import { AuthContext } from "../../../providers/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/toys">All Toys</Link>
      </li>
      {user?.email ? (
        <li>
          <Link to="/add_toys">Add A Toys</Link>
        </li>
      ) : (
        ""
      )}
      {user?.email ? (
        <li>
          <Link to="/my_toys">My Toys</Link>
        </li>
      ) : (
        ""
      )}
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
      {user?.email ? (
        <li>
          <Link>
            <button onClick={handleLogOut}> Log out </button>
          </Link>
        </li>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 h-24">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
          >
            {navItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img className="h-12 w-12 " src={logo} alt="#" />
          <h1 className="text-4xl font-bold">
            Toy <span className="text-orange-400"> Cars</span>
          </h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold ">{navItems}</ul>
      </div>
      <div className="navbar-end">
        {user?.photoURL ? (
          <>
            <h3 style={{ color: "orange" }} className="text-xl font-bold">
              {user?.displayName}
            </h3>
            <div className="tooltip tooltip-left" data-tip={user?.displayName}>
              <div className="avatar">
                <div className="w-12 m-4 rounded-full ring ring-gray-600 ring-offset-base-100 ring-offset-2">
                  <img src={user?.photoURL} />
                </div>
              </div>
            </div>
          </>
        ) : (
          <FaUserAlt style={{ fontSize: "2rem" }} />
        )}
      </div>
    </div>
  );
};

export default NavBar;
