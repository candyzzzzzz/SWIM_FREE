import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BeginnerClasses from "./pages/BeginnerClasses";
import AdvancedCoaching from "./pages/AdvancedCoaching";
import KidsPrograms from "./pages/KidsPrograms";
import PrivateLessons from "./pages/PrivateLessons";
import Contactus from "./pages/Contactus";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Signup from "./pages/Signup";

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
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
