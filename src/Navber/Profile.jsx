import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const Profile = () => {
  const { user } = useContext(AuthContext);
console.log(user);
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
                  <img  data-aos='zoom-in' data-aos-duration='1700' 
                    className="rounded-full w-full shadow-lg border  hover:shadow-red-300 "
                    src={user?.photoURL}
                    alt=""
                  />
                </div>

                <div>
                  <div  className="form-control">
                    <label className="label">
                      <span data-aos="fade-left" data-aos-delay='1500'className="label-text text-xl font-semibold">
                        Name
                      </span>
                    </label>
                    <input data-aos="fade-left" data-aos-delay='2000'
                      type="Name"
                      defaultValue={user?.displayName}
                      placeholder="Name"
                      name="Name"
                      className="input input-bordered "
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span data-aos="fade-left" data-aos-delay='2200'className="label-text text-xl font-semibold">
                        Photo URL
                      </span>
                    </label>
                    <input data-aos="fade-left" data-aos-delay='2300'
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
                      <span data-aos="fade-left" data-aos-delay='2500'className="label-text text-xl font-semibold">
                        Email
                      </span>
                    </label>
                    <input data-aos="fade-left" data-aos-delay='2600'
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
