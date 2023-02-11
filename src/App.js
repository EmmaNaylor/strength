import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navigation from "./components/nav";
import HeaderBar from "./components/HeaderBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import "./app.css";
function App() {
  return (
    <div className="App">
      <HeaderBar />
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:service" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
