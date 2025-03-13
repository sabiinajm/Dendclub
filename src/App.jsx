import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./components/main/Home";
import About from "./components/main/About";
import Doctors from "./components/main/Doctors";
import Hospitals from "./components/main/Hospitals";
import Pharmacy from "./components/main/Pharmacy";
import Blogs from "./components/main/Blogs";
import Contact from "./components/main/Contact";
import HospitalDetails from "./components/main/HospitalDetails";
import PharmacyDetails from "./components/main/PharmacyDetails";
import DoctorsDetails from "./components/main/DoctorsDetails";
import BlogDetails from "./components/main/BlogDetails";
import OnlineChat from "./components/main/OnlineChat";
import UserProfile from "./components/main/UserProfile";
import { useEffect } from "react";
import DashLayout from "./layout/DashLayout";
import ControlPanel from "./components/dashboards/Doctor/ControlPanel";
import Queues from "./components/dashboards/Doctor/Queues";
import Patients from "./components/dashboards/Doctor/Patients";

function App() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Haqqımızda" element={<About />} />
          <Route path="Həkimlərimiz" element={<Doctors />} />
          <Route path="Həkimlərimiz/:id" element={<DoctorsDetails />} />
          <Route path="Klinikalarımız" element={<Hospitals />} />
          <Route path="Klinikalarımız/:id" element={<HospitalDetails />} />
          <Route path="Apteklərimiz" element={<Pharmacy />} />
          <Route path="Apteklərimiz/:id" element={<PharmacyDetails />} />
          <Route path="Bloglar" element={<Blogs />} />
          <Route path="Bloglar/:id" element={<BlogDetails />} />
          <Route path="Əlaqə" element={<Contact />} />
          <Route path="Çat" element={<OnlineChat />} />
          <Route path="Profil" element={<UserProfile />} />
        </Route>
        <Route path="Həkim-Dashboard" element={<DashLayout />}>
          <Route index element={<ControlPanel />} />
          <Route path="İdarəpaneli" element={<ControlPanel />} />
          <Route path="Növbələr" element={<Queues />} />
          <Route path="Xəstələr" element={<Patients />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
