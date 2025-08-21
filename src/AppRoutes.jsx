import { Route, Routes } from "react-router-dom";
import Home from "./user/Home";
import BeginnerClasses from "./user/BeginnerClasses";
import AdvancedCoaching from "./user/AdvancedCoaching";
import KidsPrograms from "./user/KidsPrograms";
import PrivateLessons from "./user/PrivateLessons";
import Contactus from "./user/Contactus";
import Login from "./user/Login";
import NotFound from "./user/NotFound";
import Signup from "./user/Signup";
import Data from "./user/Data";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/beginner-classes" element={<BeginnerClasses />} />
      <Route path="/advanced-coaching" element={<AdvancedCoaching />} />
      <Route path="/kids-programs" element={<KidsPrograms />} />
      <Route path="/private-lessons" element={<PrivateLessons />} />
      <Route path="/Contactus" element={<Contactus />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/data" element={<Data />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
