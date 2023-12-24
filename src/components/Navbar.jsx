import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navLinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      {
        user && (
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        )
      }
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );
  return (
    <div className="bg-base-100">
      <div className="navbar container mx-auto">
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/" className="text-xl font-bold">ProTaskManager</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end gap-2">
        {user ? (
            <>
              <div className="flex items-center gap-1">
                <p className="font-bold hidden md:block">{user.displayName}</p>
                <img className="w-12 h-12 rounded-full border-2 border-accent" src={user.photoURL} alt="user image" />
              </div>
              <Link to="/login" onClick={logout} className="btn btn-accent">
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-accent btn-outline">
                Login
              </Link>
              <Link to="/register" className="btn btn-accent hidden md:flex">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
