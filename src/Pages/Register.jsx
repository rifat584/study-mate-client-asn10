import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router";
import AuthContext from "../Providers/AuthContext";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";

const Register = () => {
  const { user, setUser, setLoading, emailRegister, googleLogin } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [pwdError, setPwdError] = useState("");
  const [pwdVisibility, setPwdVisibility] = useState(false);
  if (user) {
    return <Navigate to={"/"}></Navigate>;
  }

  const handlePwdValidate = (e) => {
    const password = e.target.value;
    setPassword(password);
    const regEx = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!regEx.test(password)) {
       setPwdError(
        "Password must contain uppercase, lowercase, and be at least 6 characters."
      );
    } else {
      setPwdError("");
    }
  };

  const handleEmailRegister = async (e) => {
    e.preventDefault();
    setLoading(true)
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoURL = e.target.photourl.value;
    emailRegister(email, password)
      .then((res) => {
        const user = res.user;
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoURL,
        })
          .then((res) => {
            setUser(user);
            navigate("/");
            setLoading(false)
          })
          .catch((err) => {
            Swal.fire({
              icon: "error",
              title: err.code,
            });
          });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: err.code,
        });
      });
  };

  const handleGoogleRegister = () => {
    googleLogin()
      .then((res) => {
        setUser(res.user);
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: err.code,
        });
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold mb-8">Register now!</h1>
        </div>
        <div className="card bg-base-100 w-full shadow-2xl">
          <div className="card-body w-md">
            <p className="text-center mb-2">
              Already have an Account?{" "}
              <Link to={"/auth/login"} className="text-secondary">
                Login
              </Link>
            </p>
            <form onSubmit={handleEmailRegister}>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input w-full"
                  placeholder="Enter your Name"
                />

                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input w-full"
                  placeholder="Enter your Email"
                />

                <label className="label">Photo URL</label>
                <input
                  type="text"
                  name="photourl"
                  className="input w-full"
                  placeholder="Enter your Photo URL"
                />
                <div className="relative">
                  <label className="label">Password</label>
                  <span
                    className="absolute bottom-3 right-5 z-2 text-base"
                    onClick={() => setPwdVisibility(!pwdVisibility)}
                  >
                    {pwdVisibility ? <FaRegEye /> : <FaEyeSlash />}
                  </span>
                  <input
                    type={pwdVisibility ? "text" : "password"}
                    name="password"
                    className="input w-full"
                    placeholder="Enter your Password"
                    value={password}
                    onChange={handlePwdValidate}
                  />
                </div>
                {<p className="text-red-500">{pwdError}</p>}

                <button
                  className="btn btn-accent mt-4 border-none text-white"
                  type="submit"
                >
                  Register
                </button>
              </fieldset>
            </form>
            <div className="divider my-1"></div>
            <button
              className="btn bg-white text-accent border-[#e5e5e5]"
              onClick={handleGoogleRegister}
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
