import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../NavBar";
import Register from "../pages/Register";
import Login from "../pages/Login";
import FooTer from "../FooTer";
import Dashboard from "../pages/Dashboard";
const AppRouter = () => {
  return (
    <Router>
      <NavBar />
 
      <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Dashboard />}>

      </Route>
      </Routes>
      <FooTer />
    </Router>
  );
};

export default AppRouter;
