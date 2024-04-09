import { Link } from "react-router-dom";

const SingleData = ({ data }) => {
  const { id, image, estate_title, segment_name, price, description } = data;

  return (
    <div className=" card bg-base-100 shadow-xl p-6 border ">
      <div className="">
        <div>
          <figure>
            <img className="rounded-xl" src={image} alt="image" />
          </figure>
        </div>
        <div className="">
          <h2 className="">Catagories: {estate_title}</h2>

          <p>{description}</p>

          <p className="badge badge-secondary"> {segment_name}</p>

          <h1>price: {price}</h1>

          <Link to={`/ditels/${id}`}>
            <button className="btn">View Property</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleData;
