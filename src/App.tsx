import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Work from "./pages/Work";
import Navbar from "./Navbar";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/cvrec" element={<Work />} />
      </Routes>
    </>
  );
}
export default App;
