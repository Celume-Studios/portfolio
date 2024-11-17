import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ServicesContainer from "./components/Services";
import AboutUs from "./components/AboutUs";
import styled from "styled-components";
import Carousel from "./components/OurWork";
import Footer from "./components/Footer";
import VirtualTour from "./components/VirtualTour";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

// Styled MainContainer component
const MainContainer = styled.div`
  width: 100%;
  height: 6080px;
  background: #111;
  overflow-x: hidden;
  position: relative;
`;

// Separate component to use useLocation hook
const MainLayout = () => {
  const location = useLocation(); // Now it's within the Router context

  return (
    <>
      {/* Conditionally render MainContainer if not on /virtual-tour */}
      {location.pathname !== "/virtual-tour" && (
        <MainContainer>
          <Navbar />
          <ServicesContainer />
          <AboutUs />
          <Carousel />
          <Footer />
        </MainContainer>
      )}
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/virtual-tour" element={<VirtualTour />} />
        <Route path="/nile-valley/2bhk" element={<VirtualTour iframeSrc="https://kuula.co/share/collection/7Znxf?logo=1&card=1&info=0&logosize=40&fs=1&vr=1&zoom=1&thumbs=-1&margin=2&keys=0" />} />
        <Route path="/nile-valley/3bhk" element={<VirtualTour iframeSrc="https://kuula.co/share/collection/7Z6G5?logo=1&card=1&info=0&logosize=40&fs=1&vr=1&zoom=1&thumbs=3&keys=0" />} />
        <Route path="/nile-valley/club-house" element={<VirtualTour iframeSrc="https://kuula.co/share/collection/7Z6YM?logo=1&card=1&info=0&logosize=40&fs=1&vr=1&zoom=1&thumbs=3&keys=0" />} />
        <Route path="*" element={<MainLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
