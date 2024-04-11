import { Link } from "react-router-dom";

const SingleData = ({ data }) => {
  const { id, image, estate_title, segment_name, status, price, description } =
    data;

  return (
    <div className=" card bg-base-100 shadow-xl p-6 border ">
      <div className="">
        <div className="">
          <figure>
            <img className="rounded-xl w-full" src={image} alt="image" />
          </figure>
        </div>
        <div className="">
          <h2 className="mt-3 text-3xl font-bold"> {estate_title}</h2>

          <p className="mt-3 text-xl text-slate-600 font-semibold">
            {description}
          </p>

          <div className="flex gap-14 mt-3">
            <p className="badge bg-green-500 text-xl p-4">{segment_name}</p>

            <h1 className="badge bg-green-500 p-4 text-xl">{status}</h1>
          </div>
          <h1 className="text-2xl mt-3 font-semibold">price:{price}</h1>

         
         <Link to={`/ditels/${id}`}>
            <button className="btn bg-slate-600 mt-5 text-2xl text-white">
              View Property
            </button>
          </Link>
       
         </div>
        
      </div>
    </div>
  );
};

export default SingleData;
