import HeartIcon from "@assets/icons/heartIcon.svg?react";
import CartIcon from "@assets/icons/cartIcon.svg?react";
import ProfileIcon from "@assets/icons/proflie.svg?react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <section className="relative mx-auto">
        {/* navbar */}
        <nav className="flex justify-between bg-white text-black w-full shadow-md">
          <div className="px-5 xl:px-12 py-6 flex w-full items-center">
            <Link className="text-3xl font-bold font-heading" to="/">
              {/* <img className="h-9" src="logo.png" alt="logo" /> */}
              Logo Here.
            </Link>
            {/* Nav Links */}
            <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
              <li>
                <NavLink className={({ isActive }) =>
              `text-white px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-gray-900 text-white'
                  : 'text-red-900 hover:bg-gray-700 hover:text-white'
              }`
            } to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className={({ isActive }) =>
              `text-white px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-gray-900 text-white'
                  : 'text-red-900 hover:bg-gray-700 hover:text-white'
              }`
            } to="/categories">
                  Category
                </NavLink>
              </li>
              <li>
                <NavLink className={({ isActive }) =>
              `text-white px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-gray-900 text-white'
                  : 'text-red-900 hover:bg-gray-700 hover:text-white'
              }`
            } to="/products/hh">
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink className={({ isActive }) =>
              `text-white px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-gray-900 text-white'
                  : 'text-red-900 hover:bg-gray-700 hover:text-white'
              }`
            } to="/about-us">
                  About Us
                </NavLink>
              </li>
            </ul>
            {/* Header Icons */}
            <div className="hidden xl:flex items-center space-x-5">
              <Link className="hover:text-gray-600" to="/">
                <HeartIcon />
              </Link>
              <Link className="flex items-center hover:text-gray-600" to="/">
                <CartIcon />
                <span className="flex absolute -mt-5 ml-4">
                  <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                </span>
              </Link>
              {/* Sign In / Register */}
              <Link className="flex items-center hover:text-gray-600" to="/">
                <ProfileIcon />
              </Link>
            </div>
          </div>
          {/* Responsive navbar */}
          <Link className="xl:hidden flex mr-6 items-center" to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hover:text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="flex absolute -mt-5 ml-4">
              <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
            </span>
          </Link>
          <Link className="navbar-burger self-center mr-12 xl:hidden" to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hover:text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Link>
        </nav>
      </section>
      {/* Does this resource worth a follow? */}
    </div>
  );
};

export default Navbar;
