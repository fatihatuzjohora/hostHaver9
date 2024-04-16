import { CiCircleCheck } from "react-icons/ci";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Packeg = () => {
  return (
    <div className="mt-10 mb-5">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 rounded-lg dark:bg-gray-100 dark:text-gray-800">
        <div data-aos="zoom-in-left"  className=" mb-10">
          <h1 className="font-extrabold text-5xl mx-auto items-center text-center mb-3 ">
            See Our Packages
          </h1>
          <p className="mx-auto items-center text-center max-w-3xl">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          <div data-aos="flip-down" data-aos-duration='1500' className=" card bg-base-100 shadow-xl p-4 border ">
            <div className="">
              <div className="bg-green-200 h-[200px] rounded-xl text-center items-center md:p-8 ">
                <p className="mt-5 font-bold text-sky-400 ">
                  <span className="text-3xl">$</span>
                  <span className="text-6xl font-extrabold">199</span>
                </p>
                <p className="mt-3 text-2xl text-slate-700 font-bold">
                  STANDARD PACKAGE
                </p>
              </div>
              <div className="mt-8 mb-4 text-xl font-semibold text-slate-700">
                <li className="flex items-center space-x-2 ">
                  <CiCircleCheck className="w-6 h-6 fill-current text-violet-800" />
                  <span>50 Listings</span>
                </li>
                <li className="mt-2 flex items-center space-x-2">
                  <CiCircleCheck className="w-6 h-6 fill-current text-violet-800" />
                  <span>Contact With Agent</span>
                </li>
                <li className="mt-2 flex items-center space-x-2">
                  <CiCircleCheck className="w-6 h-6 fill-current text-violet-800" />
                  <span>One Year Validity</span>
                </li>
                <li className="mt-2 flex items-center space-x-2">
                  <CiCircleCheck className="w-6 h-6 fill-current text-violet-800" />
                  <span>7×24 Fully Support</span>
                </li>
              </div>
            </div>
          </div>

          <div data-aos="flip-down" data-aos-delay='1500' className=" card bg-base-100 shadow-xl p-4 border ">
            <div className="">
              <div className="bg-green-100 h-[200px] rounded-xl text-center items-center md:p-8">
                <p className="mt-5 font-bold text-green-500 ">
                  <span className="text-3xl">$</span>
                  <span className="text-6xl font-extrabold">99</span>
                </p>
                <p className="mt-3 text-2xl text-slate-700 font-bold">
                  PLATINUM PACKAGE
                </p>
              </div>
              <div className="mt-8 text-xl font-semibold text-slate-700">
                <li className="flex items-center space-x-2 ">
                  <CiCircleCheck className="w-6 h-6 fill-current text-violet-800" />
                  <span>30 Listings</span>
                </li>
                <li className="mt-2 flex items-center space-x-2">
                  <CiCircleCheck className="w-6 h-6 fill-current text-violet-800" />
                  <span>Contact With Agent</span>
                </li>
                <li className="mt-2 flex items-center space-x-2">
                  <CiCircleCheck className="w-6 h-6 fill-current text-violet-800" />
                  <span>One Year Validity</span>
                </li>
                <li className="mt-2 flex items-center space-x-2">
                  <CiCircleCheck className="w-6 h-6 fill-current text-violet-800" />
                  <span>7×24 Fully Support</span>
                </li>
              </div>
            </div>
          </div>

          <div data-aos="flip-down" data-aos-delay='2000' className=" card bg-base-100 shadow-xl p-4 border ">
            <div className="">
              <div className="bg-pink-100 h-[200px] rounded-xl text-center items-center md:p-8">
                <p className="mt-5 font-bold text-pink-500 ">
                  <span className="text-3xl">$</span>
                  <span className="text-6xl font-extrabold">49</span>
                </p>
                <p className="mt-3 text-2xl text-slate-700 font-bold">
                  BASIC PACKAGE
                </p>
              </div>
              <div className="mt-8 text-xl font-semibold text-slate-700">
                <li className="flex items-center space-x-2 ">
                  <CiCircleCheck className="w-6 h-6 fill-current text-violet-800" />
                  <span>15 Listings</span>
                </li>
                <li className="mt-2 flex items-center space-x-2">
                  <CiCircleCheck className="w-6 h-6 fill-current text-violet-800" />
                  <span>Contact With Agent</span>
                </li>
                <li className="mt-2 flex items-center space-x-2">
                  <CiCircleCheck className="w-6 h-6 fill-current text-violet-800" />
                  <span>One Year Validity</span>
                </li>
                <li className="mt-2 flex items-center space-x-2">
                  <CiCircleCheck className="w-6 h-6 fill-current text-violet-800" />
                  <span>7×24 Fully Support</span>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packeg;
