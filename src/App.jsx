import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./components/main/Home";
import About from "./components/main/About";
import Doctors from "./components/main/Doctors";
import Hospitals from "./components/main/Hospitals";
import Pharmacy from "./components/main/Pharmacy";
import Blogs from "./components/main/Blogs";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Haqqımızda" element={<About />} />
          <Route path="/Həkimlərimiz" element={<Doctors />} />
          <Route path="/Klinikalarımız" element={<Hospitals />} />
          <Route path="/Apteklərimiz" element={<Pharmacy />} />
          <Route path="/Bloglar" element={<Blogs />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
