import { useEffect, useState } from "react";
import SingleData from "./SingleData";

const AllCatagoris = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("Data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="mt-5 mb-5">
      <div className=" mb-10">
        <h1 className="font-extrabold text-5xl mx-auto items-center text-center mb-3 ">
          Explore Good Places
        </h1>
        <p className="mx-auto items-center text-center max-w-3xl font-semibold text-slate-600 mt-5">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        </p>
      </div>
      <div className=" mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
        {data.map((data) => (
          <SingleData key={data.id} data={data}></SingleData>
        ))}
      </div>
    </div>
  );
};

export default AllCatagoris;
