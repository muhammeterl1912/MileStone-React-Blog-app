import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../NavBar";
import Register from "../pages/Register";
import Login from "../pages/Login";
import FooTer from "../FooTer";
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
import Detail from "../pages/Detail";
import Profile from "../pages/Profile";
import PrivateRouter from "./PrivateRouter";
import UpdateModal from "../blog/UpdateModal";
const AppRouter = () => {
  return (
    <Router>
      <NavBar />
 
      <Routes>
      <Route path="/dashboard" element={<Dashboard />}/>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About/>}/>
      <Route path="/detail/:id" element={<PrivateRouter />}>
          <Route path="" element={<Detail />} />
        </Route>
        <Route path="/profile" element={<PrivateRouter />}>
          <Route path="" element={<Profile />} />
        </Route>
        <Route path="/updateblog/:id" element={<PrivateRouter />}>
          <Route path="" element={<UpdateModal />} />
        </Route>
      
      </Routes>
      <FooTer />
    </Router>
  );
};

export default AppRouter;
