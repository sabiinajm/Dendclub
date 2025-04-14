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
import Queues from "./components/dashboards/Doctor/Queues";
import Patients from "./components/dashboards/Doctor/Patients";
import Payments from "./components/dashboards/Doctor/Payments";
import CreateBlogs from "./components/dashboards/Doctor/CreateBlogs";
import DashBlogs from "./components/dashboards/Doctor/DashBlogs";
import DrControlPanel from "./components/dashboards/Doctor/DrControlPanel";
import DrAccount from "./components/dashboards/Doctor/DrAccount";
import MedDetails from "./components/main/MedDetails";

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
          <Route path="Apteklərimiz/:id/:title" element={<MedDetails />} />
          <Route path="Bloglar" element={<Blogs />} />
          <Route path="Bloglar/:id" element={<BlogDetails />} />
          <Route path="Əlaqə" element={<Contact />} />
          <Route path="Çat" element={<OnlineChat />} />
          <Route path="Profil" element={<UserProfile />} />
        </Route>
        <Route path="Həkim-Dashboard" element={<DashLayout />}>
          <Route index element={<DrControlPanel />} />
          <Route path="İdarəpaneli" element={<DrControlPanel />} />
          <Route path="Növbələr" element={<Queues />} />
          <Route path="Xəstələr" element={<Patients />} />
          <Route path="Ödənişlər" element={<Payments />} />
          <Route path="Bloq" element={<DashBlogs />} />
          <Route path="Bloq/BloqYarat" element={<CreateBlogs />} />
          <Route path="Hesabın" element={<DrAccount />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
