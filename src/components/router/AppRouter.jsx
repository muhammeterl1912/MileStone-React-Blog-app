import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../NavBar";
import Register from "../pages/Register";
import FooTer from "../FooTer";
const AppRouter = () => {
  return (
    <Router>
      <NavBar />
      <Register />
      <Routes>
    
      </Routes>
      <FooTer />
    </Router>
  );
};

export default AppRouter;
