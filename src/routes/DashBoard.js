import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userAction } from "../app/feactures/userSlice";
import { useNavigate } from "react-router-dom";

const DashBoard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.userReducer);

  //preventing user that didn't login not to have access to dashboard but login page
  useEffect(() => {
    if (Object.keys(userData?.value).length <= 0) {
      navigate("/");
    }
  }, [userData, navigate]);

  return (
    <div className=" text-center mt-52">
      <p className="text-xl mb-2 font-extrabold"> DashBoard</p>
      <button
        onClick={() => dispatch(userAction.logout({}))}
        className="block mx-auto bg-indigo-500 outline-none py-1 px-3 text-white rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default DashBoard;
