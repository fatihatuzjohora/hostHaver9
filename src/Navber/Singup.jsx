import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { FiEye } from "react-icons/fi";
import { GoEyeClosed } from "react-icons/go";
import { updateProfile } from "firebase/auth";
const Singup = () => {
  const [newError,setNewErrot] =useState("")
  const [signupError, setSignupError] = useState("");
  const [singupSuccesfull, setSingupSuccesfull] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  //-------------------------------
  const { createUser,auth,signInWithGoogle,signInWithGithub } = useContext(AuthContext);
  const navigate = useNavigate();
  //---------------------------------
  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoURL = e.target.photoURL.value;
    const accepted = e.target.terms.checked;
    console.log(name, email, photoURL, password);
//------------------------
if (!name.length) {
  setNewErrot('please type your Name')
  return;
}
if (!email.length) {
  setNewErrot('please type your email')
  return;
}

    //-------------------------
    setSignupError("");
    setSingupSuccesfull("");

    //--------------------------------
    if (!/^(?=.*[A-Z])(?=.*[a-z]).{6,}$/.test(password)
    ) {
      setSignupError("your password should have at least one upper, one lower case and must be 6 caractors ");
      
      return;
    } else if (!accepted) {
      setSignupError("please accept our conditions");
      return;
    }

    //-------------------------
    createUser(email, password)
      .then((result) => {

        updateProfile(auth.currentUser, {
          displayName: name, photoURL: photoURL
        }).then(() => {
          // Profile updated!
          // ...
        }).catch(() => {
          // An error occurred
          // ...
        });


        console.log(result.user);
        e.target.reset();
        navigate("/");
        setSingupSuccesfull("Created Succesfully SignUp ");
      })
      .catch((error) => {
        console.error(error.message);
        setSignupError(error.message);
      });
  };
//----------------------------
  const handleGooglrSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        navigate(location?.state ? location.state : "/"); 
        console.log(result.user);
        
        
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  //-----------------------------------
  const handleGitHubSignIn = () => {
    signInWithGithub()
      .then((result) => {
        navigate(location?.state ? location.state : "/"); 
        console.log(result.user);
        
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div>
      <div className="hero min-h-[700px] w-[800px] mx-auto bg-base-200 mt-5 mb-5 rounded-2xl">
        <div className="hero-content flex-col">
          <div className="card shrink-0  w-[600px] shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body">
              <h1 className="text-center text-3xl font-bold ">Sing Up!</h1>

              <div className="form-control font-semibold">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="Name"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                />
                  <p className="text-red-500">{newError}</p>
                <h1>{signupError}</h1>
              </div>

              <div className="form-control font-semibold">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                
                />
                 <p className="text-red-500">{newError}</p>
              </div>

              <div className="form-control font-semibold">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="photoURL"
                  name="photoURL"
                  placeholder="photoURL"
                  className="input input-bordered"
                
                />
                
              </div>

              <div className="form-control font-semibold relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered "
                
                />
                
                <span
                  className="absolute top-3 right-8 mt-10"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <GoEyeClosed /> : <FiEye />}
                </span>
              </div>
              <br />

              <div className="pl-4 font-semibold">
                <input type="checkbox" name="terms" id="" />
                <label className="ml-2" htmlFor="terms">
                  Accept Our Terms & Conditions
                </label>
              </div>
              <br />
              <div className="form-control text-2xl font-semibold mt-6">
                <button className="btn text-2xl font-semibold btn-primary">
                  Register
                </button>
              </div>

              <div className="flex justify-center space-x-4">
                <button
                 onClick={handleGooglrSignIn}
                  aria-label="Log in with Google"
                  className="p-3 rounded-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                  </svg>
                </button>

                <button
                 onClick={handleGitHubSignIn}
                  aria-label="Log in with GitHub"
                  className="p-3 rounded-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                  </svg>
                </button>
              </div>
            </form>
            {signupError && (
              <p className="text-red-700 text-xl p-4 text-center font-semibold">
                {signupError}
              </p>
            )}
            {singupSuccesfull && (
              <p className="text-green-700 text-xl p-4 text-center font-semibold">
                {singupSuccesfull}
              </p>
            )}

            <p className="text-center text-xl mb-3">
              Already Have Account? Please
              <Link to="/signin">
                <button className="btn text-xl btn-link">Sign In</button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singup;
