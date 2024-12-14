import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./components/main/Home";
import About from "./components/main/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
