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
import Book from "./pages/Book";
import Terms from "./pages/Terms";
import "./app.css";
import styled from "styled-components";

import Sidebar from "./components/Sidebar";

const MobileWrapper = styled.div`
  display: none;
  @media screen and (max-width: 1199px) {
    display: block;
  }
`;

const DesktopWrapper = styled.div`
  display: none;
  @media screen and (min-width: 1200px) {
    display: block;
  }
`;

function App() {
  return (
    <div className="App">
      <MobileWrapper>
        <Navigation />
      </MobileWrapper>
      <BrowserRouter>
        <DesktopWrapper>
        <HeaderBar />
          <Sidebar />
        </DesktopWrapper>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:service" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/book" element={<Book />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
