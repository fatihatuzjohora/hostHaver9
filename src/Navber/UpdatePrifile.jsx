import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";

const UpdatePrifile = () => {
  const { user, updateUserProfile, setUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const name = data.name;
    const image = data.photo;
    console.log(name, image);
    try {
      await updateUserProfile(name, image);
      setUser({
        ...user,
        displayName: name,
        photoURL: image,
      });
    } catch (error) {
      console.error("Failed to update profile:", error.message);
    }
  };
  // console.log(user);

  return (
    <div>
      <Helmet>
        <title>Update profile</title>
      </Helmet>
      <section className="p-6 dark:bg-gray-100 dark:text-gray-900 mt-5 mb-5">
        <div className="">
          <p className="text-4xl font-bold text-center">
            Personal Inormation :{user.displayName}
          </p>
        </div>

        <div className="grid col-span-1 md:grid-cols-2 gap-5 items-center p-6">
          <div className="">
            <div className=" ">
              <img
                className="rounded-full  w-full h-full shadow-lg border  hover:shadow-red-300 "
                src={user.photoURL}
                alt="photp"
              />
            </div>
            <div className=" items-center mt-5">
            </div>
          </div>
          <div className="font-semibold text-xl">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="container flex flex-col  mx-auto space-y-12"
            >
              <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-zinc-200">
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                  <div className="form-control col-span-full">
                    <label className="label ">
                      <span className="label-text text-xl font-semibold">
                        Name
                      </span>
                    </label>
                    <input
                      {...register("name")}
                      // defaultValue={user.displayName}
                      className=" w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300"
                    />
                  </div>
                  <div className="col-span-full">
                    <label htmlFor="email" className="">
                      Photo URL
                    </label>
                    <input
                      {...register("photo")}
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300"
                    />
                  </div>
                  <div className="w-full h-full col-span-full mt-3 mb-3">
                    <button
                      type="submit"
                      className="text-xl w-full h-full font-semibold  btn bg-slate-400"
                    >
                      Update Information{" "}
                    </button>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UpdatePrifile;
