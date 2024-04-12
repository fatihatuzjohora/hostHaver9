import { Helmet } from "react-helmet-async";
import AllCatagoris from "../Component/AllCatagoris";
import Banar from "../Component/Banar";
import Packeg from "../Component/Packeg";
import Reviews from "../Component/Reviews";


const Home = () => {
  return (
    <div>
      <Helmet>
<title>Home</title>
      </Helmet>
      <Banar></Banar>
      <AllCatagoris></AllCatagoris>
      <Packeg></Packeg>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
