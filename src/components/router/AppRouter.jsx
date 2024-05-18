import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../NavBar";
import Register from "../pages/Register";
import Login from "../pages/Login";
import FooTer from "../FooTer";
const AppRouter = () => {
  return (
    <Router>
      <NavBar />
 
      <Routes>
      <Route path="register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      </Routes>
      <FooTer />
    </Router>
  );
};

export default AppRouter;
