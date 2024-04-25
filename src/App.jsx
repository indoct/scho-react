import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackTopButton from "./components/BackTopButton";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import BeyondBitesize from "./pages/work/BeyondBitesize";
import Scho from "./pages/work/Scho";
import GrowBuddy from "./pages/work/GrowBuddy";
import TheOddDystrict from "./pages/work/TheOddDystrict";
import Juno from "./pages/work/Juno";
import "./App.css";
import ESFJoinUs from "./pages/work/ESFJoinUs";

function App() {
  const location = useLocation();

  const [isDarkMode, setIsDarkMode] = useState(
    true
    // JSON.parse(localStorage.getItem("isDarkMode"))
  );

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // localStorage.setItem("isDarkMode", JSON.stringify(checked));
  };

  return (
    <div className="App">
      <main className={isDarkMode ? "dark-mode" : "light-mode"}>
        <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        {/* <AnimatePresence mode="wait" initial={false}> */}
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work/esfjoinus" element={<ESFJoinUs />} />
          <Route path="/work/beyondbitesize" element={<BeyondBitesize />} />
          <Route path="/work/scho" element={<Scho />} />
          <Route path="/work/growbuddy" element={<GrowBuddy />} />
          <Route path="/work/theodddystrict" element={<TheOddDystrict />} />
          <Route path="/work/juno" element={<Juno />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
        {/* </AnimatePresence> */}
        <BackTopButton />
      </main>
    </div>
  );
}

export default App;
