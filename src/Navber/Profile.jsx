import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <div className="hero p-8 mx-auto bg-base-200 mt-5 mb-5 rounded-2xl">
        <div className="hero-content flex-col">
          <div className="card shrink-0  w-[900px] shadow-2xl bg-base-100">
            <form className="card-body">
              <h1 className="text-center text-3xl font-bold">
                Profile Information
              </h1>
              <div className=" grid col-span-1 md:grid-cols-2 gap-5 items-center p-6">
                <div className=" ">
                  <img
                    className="rounded-full w-full shadow-lg border  hover:shadow-red-300 "
                    src={user?.photoURL}
                    alt=""
                  />
                </div>

                <div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-xl font-semibold">
                        Name
                      </span>
                    </label>
                    <input
                      type="Name"
                      defaultValue={user?.displayName}
                      placeholder="Name"
                      name="Name"
                      className="input input-bordered"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-xl font-semibold">
                        Photo URL
                      </span>
                    </label>
                    <input
                      type="Photo url"
                      defaultValue={user?.photoURL}
                      name="Photo url"
                      placeholder="Photo url"
                      className=" input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-xl font-semibold">
                        Email
                      </span>
                    </label>
                    <input
                      type="email"
                      defaultValue={user?.email}
                      name="email"
                      placeholder="email"
                      className="input input-bordered"
                      required
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
