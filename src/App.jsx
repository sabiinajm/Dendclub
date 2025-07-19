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
import PhControlPanel from "./components/dashboards/Pharmacy/PhControlPanel";
import Orders from "./components/dashboards/Pharmacy/Orders";
import Medicines from "./components/dashboards/Pharmacy/Medicines";
import Customers from "./components/dashboards/Pharmacy/Customers";
import PhAccount from "./components/dashboards/Pharmacy/PhAccount";
import HsControlPanel from "./components/dashboards/Hospital/HsControlPanel";
import HsPatients from "./components/dashboards/Hospital/HsPatients";
import HsDoctors from "./components/dashboards/Hospital/HsDoctors";
import HsReports from "./components/dashboards/Hospital/HsReports";
import HsAccount from "./components/dashboards/Hospital/HsAccount";
import Register from "./components/main/Register";
import Login from "./components/main/Login";
import AdminControlPanel from "./components/dashboards/Admin/AdminControlPanel";
import AdminHospitals from "./components/dashboards/Admin/AdminHospitals";
import AdminPharmacy from "./components/dashboards/Admin/AdminPharmacy";
import AdminRandevu from "./components/dashboards/Admin/AdminRandevu";
import AdminUsers from "./components/dashboards/Admin/AdminUsers";
import AdminFinancialReports from "./components/dashboards/Admin/AdminFinancialReports";
import AdminDrPerformance from "./components/dashboards/Admin/AdminDrPerformance";
import QueueCreatePage from "./components/main/QueueCreatePage";

function App() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Register />} />
          <Route path="Ana-Səhifə" element={<Home />} />
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
          <Route path="Login" element={<Login />} />
          <Route path="NövbəYarat" element={<QueueCreatePage />} />
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
        <Route path="Aptek-Dashboard" element={<DashLayout />}>
          <Route index element={<PhControlPanel />} />
          <Route path="İdarəpaneli" element={<PhControlPanel />} />
          <Route path="Sifarişlər" element={<Orders />} />
          <Route path="Dərmanlar" element={<Medicines />} />
          <Route path="Müştərilər" element={<Customers />} />
          <Route path="Hesabın" element={<PhAccount />} />
        </Route>
        <Route path="Klinika-Dashboard" element={<DashLayout />}>
          <Route index element={<HsControlPanel />} />
          <Route path="İdarəpaneli" element={<HsControlPanel />} />
          <Route path="Pasientlər" element={<HsPatients />} />
          <Route path="Həkimlər" element={<HsDoctors />} />
          <Route path="Hesabat" element={<HsReports />} />
          <Route path="Hesabın" element={<HsAccount />} />
        </Route>
        <Route path="Ümumi-Admin-Panel" element={<DashLayout />}>
          <Route index element={<AdminControlPanel/>} />
          <Route path="İdarəpaneli" element={<AdminControlPanel />} />
          <Route path="Klinikalar" element={<AdminHospitals />} />
          <Route path="Apteklər" element={<AdminPharmacy />} />
          <Route path="Randevular" element={<AdminRandevu />} />
          <Route path="İstifadəçilər" element={<AdminUsers />} />
          <Route path="MaliyyeHesabatlari" element={<AdminFinancialReports />} />
          <Route path="HekimPerformansi" element={<AdminDrPerformance />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
