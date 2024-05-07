import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackTopButton from "./components/BackTopButton";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import BG3SetCreator from "./pages/work/BG3SetCreator";
import Scho from "./pages/work/Scho";
import TheOddDystrict from "./pages/work/TheOddDystrict";
import Quizzical from "./pages/work/Quizzical";
import "./App.css";
import ESFJoinUs from "./pages/work/ESFJoinUs";
import GetSetSports from "./pages/work/GetSetSports";

function App() {
  const location = useLocation();

  const [isDarkMode, setIsDarkMode] = useState(
    JSON.parse(localStorage.getItem("isDarkMode"))
  );

  const toggleDarkMode = (checked) => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("isDarkMode", JSON.stringify(checked));
  };

  return (
    <div className="App">
      <main className={isDarkMode ? "dark-mode" : "light-mode"}>
        <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/work/esfjoinus" element={<ESFJoinUs />} />
            <Route path="/work/bg3setcreator" element={<BG3SetCreator />} />
            <Route path="/work/scho" element={<Scho />} />
            <Route path="/work/getsetsports" element={<GetSetSports />} />
            <Route path="/work/theodddystrict" element={<TheOddDystrict />} />
            <Route path="/work/quizzical" element={<Quizzical />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
        <Footer />
        <BackTopButton />
      </main>
    </div>
  );
}

export default App;
