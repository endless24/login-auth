import React, { useState } from "react";
import bg from "../asset/img/nature.avif";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { userLoginStore } from "../app/feactures/userSlice";

const Login = () => {
  const users = useSelector((state) => state.registerReducer);

  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const loginFn = async (e) => {
    e.preventDefault();
    //checking if the matches
    const authUser = users.filter((user) => {
      return user.email === userEmail;
    });

    if (authUser.length > 0) {
      //checking if the password matches
      if (authUser[0].password === password) {
        dispatch(userLoginStore(authUser[0]));

        window.location.href = "/dashboard";
      } else {
        alert("Incorrect Password");
      }
    } else {
      alert("User email not found");
    }
  };

  //making sure the user that login have access to dashboard
  const userData = useSelector((state) => state.userReducer);
  if (Object.keys(userData?.value).length > 0) {
    return (window.location.href = "/dashboard");
  }
  return (
    <div
      className="bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex justify-center items-center h-screen bg-black bg-opacity-50">
        <form
          onSubmit={loginFn}
          className="bg-gray-800 w-96 bg-opacity-75 p-8 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-200">Login</h2>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-200"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={userEmail}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your username"
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-200"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="text-gray-200 text-sm pt-2">
              <Link to="/forgotpassword"> forgot password?</Link>
            </p>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Sign In
          </button>
          <p className="pt-3 text-gray-200 text-sm">
            Not a member?
            <Link to="/register" className="text-blue-500 pl-2">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
