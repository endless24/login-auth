import ForgotPassword from "./routes/ForgotPassword";
import "./index.css";
import Login from "./routes/Login";
import Register from "./routes/Register";
import DashBoard from "./routes/DashBoard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./routes/AppLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route exact path="/" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="dashboard" element={<DashBoard />} />
        </Route>

        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
