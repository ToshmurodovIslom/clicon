import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// import Home from "./pages/home";

// lazy
const Home = lazy(() => import("./pages/home"));

function App() {
  return (
    <div className="font-psans">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
