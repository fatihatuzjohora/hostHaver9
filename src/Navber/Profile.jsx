import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const Profile = () => {
    const { user} = useContext(AuthContext);


    return (
        <div>
           <div className="hero min-h-[700px] p-8 win-h-[800px] mx-auto bg-base-200 mt-5 mb-5 rounded-2xl">
        <div className="hero-content flex-col">
          <div className="card shrink-0  w-[600px] shadow-2xl bg-base-100">
            <form className="card-body">
              <h1 className="text-center text-3xl font-bold">Profile Information</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-semibold">Name</span>
                </label>
                <input
                  type="Name"
                  defaultValue={user?.displayName
                  }
                  placeholder="Name"
                  name="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-semibold">Photo</span>
                </label>
                <img className="rounded-2xl" src={user?.photoURL} alt="" />
             
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  defaultValue={user?.email
                  }
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
             
              

            </form>


           
          </div>
        </div>
      </div>
        </div>
    );
};

export default Profile;