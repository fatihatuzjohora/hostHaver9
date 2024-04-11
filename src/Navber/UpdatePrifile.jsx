const UpdatePrifile = () => {
  return (
    <div>
      <section className="p-6 dark:bg-gray-100 dark:text-gray-900 mt-5 mb-5">
        <div className="">
          <p className="text-4xl font-bold text-center">Personal Inormation</p>
        </div>

        <div className="grid col-span-1 md:grid-cols-2 gap-5 items-center p-6">
          <div className="">
            <div className=" ">
              <img
                className="rounded-full  w-full h-full shadow-lg border  hover:shadow-red-300 "
                src="https://i.ibb.co/z73YK1F/images-10.jpg"
                //{user?.photoURL}
                alt="photp"
              />
            </div>

            <div className=" items-center mt-5">
              <button className="text-xl text-center btn bg-slate-400 font-semibold">
                Update Photo
              </button>
            </div>
          </div>

          <div className="font-semibold text-xl">
            <form
              noValidate=""
              action=""
              className="container flex flex-col  mx-auto space-y-12"
            >
              <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-zinc-200">
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                  <div className="col-span-full  sm:col-span-3">
                    <label htmlFor="firstname" className="">
                      First name
                    </label>
                    <input
                      id="firstname"
                      type="text"
                      placeholder="First name"
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label htmlFor="lastname" className="">
                      Last name
                    </label>
                    <input
                      id="lastname"
                      type="text"
                      placeholder="Last name"
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label htmlFor="email" className="">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Email"
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                    />
                  </div>
                  <div className="col-span-full">
                    <label htmlFor="address" className="">
                      Address
                    </label>
                    <input
                      id="address"
                      type="text"
                      placeholder=""
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-2">
                    <label htmlFor="city" className="">
                      City
                    </label>
                    <input
                      id="city"
                      type="text"
                      placeholder=""
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-2">
                    <label htmlFor="state" className="">
                      State
                    </label>
                    <input
                      id="state"
                      type="text"
                      placeholder=""
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-2">
                    <label htmlFor="zip" className="">
                      ZIP
                    </label>
                    <input
                      id="zip"
                      type="text"
                      placeholder=""
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                    />
                  </div>
                  <div className="w-full h-full col-span-full mt-3 mb-3">
                    <button className="text-xl w-full h-full font-semibold  btn bg-slate-400">
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
