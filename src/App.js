import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ServicesContainer from "./components/Services";
import AboutUs from "./components/AboutUs";
import styled from "styled-components";
import Carousel from "./components/OurWork";
import Footer from "./components/Footer";

const MainContainer = styled.div`
  width: 100%;
  height: 6080px; /* You can keep the height as it is */
  background: #111;
  overflow-x: hidden; /* Prevent horizontal scrolling */
  position: relative;
`;

function App() {
  return (
    <MainContainer>
      <Navbar />
      <ServicesContainer />
      <AboutUs />
      <Carousel />
      <Footer />
    </MainContainer>
  );
}

export default App;
