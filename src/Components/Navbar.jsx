import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import AuthContext from "../Providers/AuthContext";
import avatar from "../assets/default_avatar.jpg";
import Spinner from "./Spinner";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navMenu = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/find-partners"}>Find Partners</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to={"/create-partner-profile"}>Create Profile</NavLink>
          </li>
          <li>
            <NavLink to={"/my-connections"}>My Connections</NavLink>
          </li>
        </>
      )}
    </>
  );

  const handleLogout = () => {
    logOut()
      .then(() => console.log("User Logged Out"))
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="navbar bg-base-100 shadow-sm px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {navMenu}
          </ul>
        </div>
        <Link
          to={"/"}
          className=" text-2xl font-bold bg-linear-to-br from-primary to-accent text-transparent bg-clip-text"
        >
          StudyMate
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navMenu}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar "
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={user?.photoURL || avatar}
                />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to={"/my-profile"}>Profile</Link>
              </li>
              <li onClick={handleLogout}>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <Link
              to={"/auth/login"}
              className="btn btn-primary border-none mr-4"
            >
              Login
            </Link>
            <Link to={"/auth/register"} className="btn btn-outline">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
