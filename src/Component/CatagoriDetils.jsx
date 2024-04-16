import { useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData, useParams } from "react-router-dom";

const CatagoriDetils = () => {
  let ref=useRef(0)

  const detils = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const ditel = detils.find((ditel) => ditel.id == idInt);
  //console.log(detils, id);
  //console.log(idInt, id);
  //console.log(ditel);

const handleReserve=()=>{
  ref.current=ref.current +1
  alert("Reserved Added" +ref.current)
}




  return (
    <div className="mt-5 mb-5">
      <Helmet>
<title>{ditel?.estate_title}</title>
      </Helmet>
      <h1 className="font-extrabold text-3xl md:text-5xl lg:text-5xl mx-auto items-center text-center mt-10 mb-10">
        Catagoris Detiles
      </h1>

      <div className=" card bg-base-100 shadow-xl p-6 border ">
        <div className="">
          <div>
            <figure>
              <img className="rounded-xl w-full" src={ditel?.image} alt="image" />
            </figure>
          </div>
          <div className="ml-24">
            <h2 className=" md:text-4xl font-bold mt-5">Catagories: {ditel?.estate_title}</h2>

            <p className="mt-3 md:text-2xl font-semibold  ">{ditel?.description}</p>

            <p className="badge badge-secondary md:text-2xl p-4 mt-3 "> {ditel?.segment_name}</p>

            <h1 className="mt-2 md:text-2xl font-semibold ">price: {ditel?.price}</h1>
            <h1 className="mt-2 md:text-2xl font-semibold ">status: {ditel?.status}</h1>
            <h1 className="mt-2 md:text-2xl font-semibold ">area: {ditel?.area}</h1>
            <h1 className="mt-2 md:text-2xl font-semibold ">location: {ditel?.location}</h1>
            <h1 className="mt-2 md:text-2xl font-semibold ">facilities: {ditel?.facilities}</h1>

            <Link to={`/reservetion`}>
            <button onClick={handleReserve} className="btn bg-slate-600 mt-5 text-2xl text-white">
              Add To Reservetion
            </button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatagoriDetils;
