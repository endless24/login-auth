import React, { useState } from "react";
import bg from "../asset/img/nature.avif";
import { Link } from "react-router-dom";
import { registerUsers } from "../app/feactures/registerSlice";
import { useDispatch, useSelector } from "react-redux";

const Register = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();

    dispatch(registerUsers(firstname, lastname, email, password));

    alert("Registered successfully!");
    window.location.href = "/";

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  const canRegister =
    Boolean(firstname) &&
    Boolean(lastname) &&
    Boolean(email) &&
    Boolean(password);
  //preventing registered user to have access to dashboard
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
          onSubmit={handleRegister}
          className="bg-gray-800 w-96 bg-opacity-75 p-8 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-200">
            Register
          </h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-200">
              First Name
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={firstname}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your firstname"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-200">
              Last Name
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={lastname}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your lastname"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-200">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-200">
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
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent 
            rounded-md shadow-sm text-sm font-medium text-white
             bg-blue-600 hover:bg-blue-700 focus:outline-none 
             focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            disabled={!canRegister}
          >
            Sign In
          </button>
          <p className="pt-3 text-gray-200 text-sm">
            If you are a member
            <Link to="/" className="text-blue-500 pl-2">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
