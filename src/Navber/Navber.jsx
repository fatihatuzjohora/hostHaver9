import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import logo from "../../src/assets/logo.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

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
    <div className="text-xl flex md:flex-row flex-col font-semibold mt-5" >
      <NavLink className="mr-5" to="/">
        Home
      </NavLink>
      <NavLink className="mr-5" to="/gallary">
        Gallary
      </NavLink>
      <NavLink className="mr-5" to="/contact">
        Contact Us
      </NavLink>
      <NavLink className="mr-5" to="/about">
        About Us
      </NavLink>

      {/* <NavLink className="mr-5" to="/signin">
        Singin
      </NavLink>
      <NavLink className="mr-5" to="/signup">
        Signup
      </NavLink> */}

      {user && (
        <>
          <NavLink
            tabIndex={0}
            role="button"
            className="mr-5 dropdown m-1"
            to="/profile"
          >
            Profile
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow "
            >
              <li>
                <NavLink to="/updateprofile">Update Profile</NavLink>
              </li>
            </ul>
          </NavLink>
          <NavLink className="mr-5" to="/reservetion">
            Reservations
          </NavLink>
        </>
      )}
    </div>
  );
  console.log(user);
  return (
    <div className="sticky z-10">
      <div className="navbar bg-base-100">
        <div data-aos="zoom-in-left" data-aos-duration='1200' className="navbar-start">
          <div className="dropdown ">
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
              className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <a className=" md:text-4xl lg:text-4xl text-2xl font-bold">HostHaven</a>
        </div>
        <div data-aos="zoom-in-right" data-aos-duration='1300' className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div data-aos="zoom-in-left" data-aos-duration='1400' className="navbar-end">
          {user ? (
            <>
              <div
                className="tooltip tooltip-bottom"
                data-tip={user.displayName}
              >
                <div
                  tabIndex={0}
                  role="button"
                  className="btn mr-2 btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full ">
                    <img alt="logo" src={user.photoURL} />
                  </div>
                </div>
              </div>
              <a onClick={handleLogOut} className="btn text-2xl font-semibold">
                Sign Out
              </a>
            </>
          ) : (
            <>
              <div
                tabIndex={0}
                role="button"
                data-tip="hello"
                className="btn mr-2 btn-ghost btn-circle avatar  "
              >
                <div className="w-10 rounded-full ">
                  <img alt="logo" src={logo} />
                </div>
              </div>

              <Link to="/signin">
                <button className="btn text-2xl font-semibold">Sign In</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;
