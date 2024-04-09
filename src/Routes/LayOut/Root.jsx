import { Outlet } from "react-router-dom";
import Navber from "../../Navber/Navber";
import Footer from "../../Footer/Footer";

const Root = () => {
  return (
    <div>
      <div className="min-h-[100vh] max-w-7xl mx-auto">
        <Navber></Navber>
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
