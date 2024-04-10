import { Link } from "react-router-dom";
import Navber from "../Navber/Navber";
import Footer from "../Footer/Footer";

const Error = () => {
  return (
    <div className="mt-5">
    <div className="max-w-7xl mx-auto">
    <Navber></Navber>
      <section className="flex items-center h-full p-16 dark:bg-gray-50 dark:text-gray-800">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">
              Sorry, we couldnot find this page.
            </p>
            <p className="mt-4 mb-8 dark:text-gray-600">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>
            <p className="px-8 py-3 mb-5 font-semibold rounded dark:bg-gray-500 dark:text-gray-50">
              Back to homepage
            </p>
            <Link
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 font-bold text-xl rounded dark:bg-violet-600 dark:text-gray-50"
            >
              Home
            </Link>
          </div>
        </div>
      </section>
      
    </div>
    <Footer></Footer>
    </div>
  );
};

export default Error;
