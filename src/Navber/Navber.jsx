import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import logo from "../../src/assets/logo.jpg";

const Navber = () => {
  //--------------------
  const { user, logOut } = useContext(AuthContext);

  //--------------------
  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("user log Out succefully");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  //------------------------
  const links = (
    <div className="text-3xl font-semibold">
      <NavLink className="mr-5" to="/">
        {" "}
        Home
      </NavLink>
      {/* <NavLink className="mr-5" to="/signin">
        Singin
      </NavLink>
      <NavLink className="mr-5" to="/signup">
        Signup
      </NavLink> */}

      {user && (
        <>
          <NavLink className="mr-5" to="/profile">
            Profile
          </NavLink>
          <NavLink className="mr-5" to="/reservetion">
            Reservations
          </NavLink>
        </>
      )}
    </div>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
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
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">HostHaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <span>{user.email}</span>
              <div
                tabIndex={0}
                role="button"
                className="btn mr-2 btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt="logo" src={user.image} />
                </div>
              </div>
              <a onClick={handleLogOut} className="btn">
                Sign Out
              </a>
            </>
          ) : (
            <>
              <div
                tabIndex={0}
                role="button"
                className="btn mr-2 btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt="logo" src={logo} />
                </div>
              </div>
              <Link to="/signin">
                <button className="btn">Sign In</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;
