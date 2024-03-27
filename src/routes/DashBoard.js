import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { userLoginStore } from "../app/feactures/userSlice";

const DashBoard = () => {
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.userReducer);
  //preventing user that didn't login not to have access to dashboard but login page
  if (Object.keys(userData?.value).length <= 0) {
    return (window.location.href = "/");
  }

  return (
    <div className=" text-center mt-52">
      <p className="text-xl mb-2 font-extrabold"> DashBoard</p>
      <button
        onClick={() => dispatch(userLoginStore({}))}
        className="block mx-auto bg-indigo-500 outline-none py-1 px-3 text-white rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default DashBoard;
