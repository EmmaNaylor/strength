import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  Router,
  Switch,
} from "react-router-dom";
import Navigation from "./components/nav2";
import HeaderBar from "./components/HeaderBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import "./app.css";
import styled from "styled-components";

import Sidebar from "./components/Sidebar";

const DesktopWrapper = styled.div`
  display: none;
  @media screen and (min-width: 960px) {
    display: inline-block;
  }
`;

const MobileWrapper = styled.div`
  display: none;
  @media screen and (max-width: 959px) {
    display: block;
  }
`;

function App() {
  return (
    <div className="App">
      <HeaderBar />
      <MobileWrapper>
        <Navigation />
      </MobileWrapper>
      <BrowserRouter>
        <DesktopWrapper>
          <Sidebar />
        </DesktopWrapper>
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
