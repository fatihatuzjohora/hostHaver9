import { useLoaderData, useParams } from "react-router-dom";

const CatagoriDetils = () => {
  const detils = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const ditel = detils.find((ditel) => ditel.id == idInt);
  //console.log(detils, id);
  //console.log(idInt, id);
  //console.log(ditel);

  return (
    <div className="mt-5 mb-5">
      <h1 className="font-extrabold text-5xl mx-auto items-center text-center mt-10 mb-10">
        Catagoris Detiles
      </h1>

      <div className=" card bg-base-100 shadow-xl p-6 border ">
        <div className="">
          <div>
            <figure>
              <img className="rounded-xl" src={ditel.image} alt="image" />
            </figure>
          </div>
          <div className="">
            <h2 className="">Catagories: {ditel.estate_title}</h2>

            <p>{ditel.description}</p>

            <p className="badge badge-secondary"> {ditel.segment_name}</p>

            <h1>price: {ditel.price}</h1>
            <h1>status: {ditel.status}</h1>
            <h1>area: {ditel.area}</h1>
            <h1>location: {ditel.location}</h1>
            <h1>facilities: {ditel.facilities}</h1>

            <button className="btn">View Property</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatagoriDetils;
