import { Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Haqqımızda" element={<About />} />
          <Route path="/Həkimlərimiz" element={<Doctors />} />
          <Route path="/Həkimlərimiz/:id" element={<DoctorsDetails />} />
          <Route path="/Klinikalarımız" element={<Hospitals />} />
          <Route path="/Klinikalarımız/:id" element={<HospitalDetails />} />
          <Route path="/Apteklərimiz" element={<Pharmacy />} />
          <Route path="/Apteklərimiz/:id" element={<PharmacyDetails />} />
          <Route path="/Bloglar" element={<Blogs />} />
          <Route path="/Əlaqə" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
