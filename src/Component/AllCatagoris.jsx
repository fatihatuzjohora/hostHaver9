import { useEffect, useState } from "react";
import SingleData from "./SingleData";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const AllCatagoris = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("Data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="mt-5 mb-5">
      <div  className=" mb-10">
        <h1 data-aos="zoom-in-left" className="font-extrabold text-5xl mx-auto items-center text-center mb-3 ">
          Explore Good Places
        </h1>
        <p data-aos="zoom-in-right" data-aos-duration='1700' className="mx-auto items-center text-center max-w-3xl font-semibold text-slate-600 mt-5">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        </p>
      </div>
      <div data-aos="zoom-in" data-aos-duration='1700' className=" mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
        {data.map((data) => (
          <SingleData key={data.id} data={data}></SingleData>
        ))}
      </div>
    </div>
  );
};

export default AllCatagoris;
