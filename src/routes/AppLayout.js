import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { userSelectors } from "../app/feactures/userSlice";

const AppLayout = () => {
  const navigate = useNavigate();
  // making sure the user that login have access to dashboard
  const loggedIn = useSelector(userSelectors.loggedIn);
  console.log(loggedIn);
  useEffect(() => {
    // !loggedIn && navigate("/");
    if (!loggedIn) {
      navigate("/");
    } else if (loggedIn) {
      navigate("/dashboard");
    }
  }, [loggedIn, navigate]);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AppLayout;
