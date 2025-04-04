import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const Register = () => {
  const navigate = useNavigate();
  const {
    createUserWithEmailPass,
    updateUserData,
    signInWithGoogleAuth,
    error,
    setError,
  } = useContext(AuthContext);

  const formHandler = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    const isValid = passwordRegex.test(password);

    if (!isValid) {
      toast.error(
        "Password must contain at least one uppercase letter, one lowercase letter, one digit, and be at least 8 characters long!"
      );
      return;
    }

    createUserWithEmailPass(email, password)
      .then((userCredential) => {
        updateUserData(name, photo)
          .then(() => {
            Swal.fire({
              title: "Account Created Successfully!",
              icon: "success",
            });
            e.target.reset();
            navigate("/");
          })
          .catch((error) => {
            toast.error("Sorry! Something Went Wrong");
            setError(error.code);
          });
      })
      .catch((error) => {
        setError(error.code);
        toast.error("Sorry! Something Went Wrong");
      });
  };

  return (
    <div className="my-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-center">
          Join the Chill Gamer Community!
        </h2>
        <p className="text-base w-[90%] sm:w-[70%] mx-auto text-center">
          Join the Chill Gamer family and be a part of our thriving community by
          writing reviews, rating your favorite games, and discovering new
          gaming experiences with like-minded players.
        </p>
      </div>

      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow border border-indigo-200 my-8 mx-auto">
        <form className="card-body space-y-6" onSubmit={formHandler}>
          <div className="form-control space-y-2">
            <label className="label text-base-content">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control space-y-2">
            <label className="label">
              <span className="label-text text-base-content">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="photo url"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control space-y-2">
            <label className="label">
              <span className="label-text text-base-content">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control space-y-2">
            <label className="label">
              <span className="label-text text-base-content">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <button className="btn btn-primary w-full">Register</button>
          </div>
          <div>
            <p className="text-base text-center">
              Already have an account? Please{" "}
              <Link
                to="/login"
                className="btn-link text-primary hover:text-blue-600"
              >
                Login
              </Link>
            </p>
            <div className="divider">OR</div>
            <button
              onClick={() => {
                signInWithGoogleAuth()
                  .then(() => {
                    toast.success("Login Successful!");
                    navigate("/");
                  })
                  .catch((error) => {
                    toast.error("Sorry! Something Went Wrong");
                  });
              }}
              type="button"
              className="btn btn-outline w-full text-base"
            >
              <FaGoogle className="text-sm" /> Continue with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
