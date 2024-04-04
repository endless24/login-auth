import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

const AppLayout = () => {
  const navigate = useNavigate();
  // making sure the user that login have access to dashboard
  const userData = useSelector((state) => state.userReducer);

  useEffect(() => {
    if (Object.keys(userData.value).length > 0) {
      navigate("/dashboard");
    }
  }, [userData, navigate]);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AppLayout;
