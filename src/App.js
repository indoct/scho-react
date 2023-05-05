import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackTopButton from "./components/BackTopButton";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BeyondBitesize from "./pages/work/BeyondBitesize";
import Scho from "./pages/work/Scho";
import GrowBuddy from "./pages/work/GrowBuddy";
import TheOddDystrict from "./pages/work/TheOddDystrict";
import Juno from "./pages/work/Juno";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work/beyondbitesize" element={<BeyondBitesize />} />
          <Route path="/work/scho" element={<Scho />} />
          <Route path="/work/growbuddy" element={<GrowBuddy />} />
          <Route path="/work/theodddystrict" element={<TheOddDystrict />} />
          <Route path="/work/juno" element={<Juno />} />
          {/* default redirect to home page */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
        <BackTopButton />
      </BrowserRouter>
    </div>
  );
}

export default App;
