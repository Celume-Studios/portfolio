import React from "react";
import styled from "styled-components";
import BackgroundImage from "../images/BackgroundImage.png";
import ContactUsArrow from "../images/ContactUsArrow";
import AILogo from "../images/AILogo.png";
import CloudIntegrationLogo from "../images/CloudIntegrationLogo.png";
import GamingLogo from "../images/GamingLogo.png";
import MarketingLogo from "../images/MarketingLogo.png";
import SEOLogo from "../images/SEOLogo.png";
import AppDevLogo from "../images/AppDevLogo.png";
import CelumeAi from "../images/CelumeAiCircle.png";
import vector from "../images/CelumeAiVector.png";
import VirtualTour from "./VirtualTour";
import { useNavigate } from "react-router-dom";

const MainContainer = styled.div`
  background: radial-gradient(
      238.75% 238.65% at 45.58% -181.49%,
      rgba(241, 67, 0, 0.6) 0%,
      rgba(17, 17, 17, 0.82) 100%
    ),
    url(${BackgroundImage}) no-repeat center top;
  background-size: cover;
  background-attachment: scroll;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  color: #fff;
  padding: 10px;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
`;

const ExploreCelumeAiButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 50px;
  border: 1.256px solid rgba(255, 254, 254, 0.04);
  background: rgba(255, 255, 255, 0.02);
  box-shadow: 0px 1px 0px 0px rgba(255, 255, 255, 0.08) inset;
  width: 90%;
  max-width: 359px;
  height: 80px;
  margin-top: 140px;
  color: #e6e6e6;
  font-family: "Open Sans", sans-serif;
  font-size: 24px;
  font-weight: 500;
  text-transform: capitalize;
  transition: background 0.3s ease, transform 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: 18px;
    height: 60px;
    width: 267px;
  }
`;

const IconWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const CelumeIcon = styled.img`
  width: 51px;
  height: 50px;
  margin-top: 10px;
`;

const CelumeIconVector = styled.img`
  width: 22px;
  height: 30px;
  position: absolute;
  top: 4px;
  left: 14px;
  margin-top: 10px;
`;

const ShapingYourVisionDiv = styled.div`
  width: 90%;
  max-width: 606px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin: 0 auto;
  flex-shrink: 0;
`;

const ShapingYourVisionText = styled.h1`
  color: rgba(255, 255, 255, 0.72);
  font-family: "Open Sans Hebrew", sans-serif;
  font-size: 80px;
  font-weight: 400;
  text-transform: capitalize;
  line-height: 1.2;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

const StyledContainer = styled.div`
  width: 100%;
  max-width: 652px;
  padding: 20px;
  text-align: center;
  color: rgba(215, 214, 214, 0.81);
  font-family: "Open Sans Hebrew", sans-serif;
  font-size: 20px;
  line-height: 1.4;
  letter-spacing: -0.147px;
  text-transform: lowercase;

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 10px;
  }
`;

const StyledButton = styled.div`
  display: flex;
  width: 100%;
  max-width: 211px;
  height: 60px;
  margin-top: 40px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 40px;
  background: #cf3a00;
  box-shadow: 0px 4px 128px 0px rgba(255, 10, 10, 0.32),
    0px 4px 64px 0px rgba(255, 10, 10, 0.32);
  transition: background 0.3s ease, transform 0.3s ease;

  &:hover {
    background: rgba(255, 58, 0, 0.8);
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    max-width: 180px;
    height: 50px;
  }
`;
const ArrowIcon = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 25px;
    height: 25px;
    fill: #cdcdcd;
  }
`;

const GradientTextContainer = styled.div`
  width: 100%;
  max-width: 266px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 75.756px;
  border: 0.758px solid rgba(255, 255, 255, 0.12);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  @media (max-width: 768px) {
    width: 90%;
    margin-top: 40px;
  }
`;

const GradientText = styled.span`
  font-family: Inter;
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
  background: linear-gradient(90deg, #ffbec1 0%, #f14300 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex-basis: 45%;
  margin: 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (min-width: 768px) {
    flex-basis: 30%;
  }

  @media (max-width: 768px) {
    flex-basis: 45%;
  }

  @media (max-width: 480px) {
    flex-basis: 90%;
  }
`;

const Icon = styled.img`
  width: 100px;
  height: 100px;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

const Label = styled.div`
  color: #f4f0ff;
  font-family: "Open Sans Hebrew", sans-serif;
  font-size: 24px;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Description = styled.div`
  color: rgba(239, 237, 253, 0.6);
  font-family: "Inter", sans-serif;
  font-size: 20px;
  margin-top: 5px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const IconsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;

  @media (min-width: 1024px) {
    justify-content: space-between;
  }
`;

const ServicesContainer = () => {
  const navigate = useNavigate();

  const handleItemClick = () => {
    navigate("/virtual-tour");
  };

  return (
    <MainContainer>
      <ExploreCelumeAiButton id="about-us">
        <IconWrapper>
          <CelumeIcon src={CelumeAi} alt="Icon" />
          <CelumeIconVector src={vector} alt="Vector" />
        </IconWrapper>
        Explore Celume Ai
      </ExploreCelumeAiButton>
      <ShapingYourVisionDiv>
        <ShapingYourVisionText> Shaping Your Vision </ShapingYourVisionText>
      </ShapingYourVisionDiv>
      <StyledContainer>
        We at Celume, build custom software that fits your needs, carve your
        niche online or as an established enterprise striving for digital
        evolution, we are here to empower you every step of the way..
      </StyledContainer>
      <StyledButton
        onClick={() => scrollToSection("contact-us")}
        style={{ cursor: "pointer" }}
      >
        <ButtonText>Contact Us</ButtonText>
        <ArrowIcon>
          <ContactUsArrow />
        </ArrowIcon>
      </StyledButton>
      <GradientTextContainer id="services">
        <GradientText>services we provide</GradientText>
      </GradientTextContainer>
      <IconsGrid>
        <ItemContainer>
          <Icon src={CloudIntegrationLogo} alt="Cloud Integration" />
          <Label>Cloud Integration</Label>
          <Description>Instantly sync your notes across devices</Description>
        </ItemContainer>
        <ItemContainer>
          <Icon src={AILogo} alt="AI Integration" />
          <Label>AI Integration</Label>
          <Description>Only you can access your notes</Description>
        </ItemContainer>
        <ItemContainer>
          <Icon src={SEOLogo} alt="SEO" />
          <Label>SEO</Label>
          <Description>Keep track of meetings and agendas</Description>
        </ItemContainer>
        <ItemContainer onClick={handleItemClick} style={{ cursor: "pointer" }}>
          <Icon src={GamingLogo} alt="Game Making" />
          <Label>3D Applications</Label>
          <Description>
            We cover everything AR and VR applications to virtual interactive
            tours tailor made for customer experience
          </Description>
        </ItemContainer>
        <ItemContainer>
          <Icon src={AppDevLogo} alt="App Development" />
          <Label>App Development</Label>
          <Description>Capture ideas on the go, online or offline</Description>
        </ItemContainer>
        <ItemContainer>
          <Icon src={MarketingLogo} alt="Marketing" />
          <Label>Marketing</Label>
          <Description>Share anything you write with one click</Description>
        </ItemContainer>
      </IconsGrid>
    </MainContainer>
  );
};

export default ServicesContainer;

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const ButtonText = styled.span`
  color: rgba(237, 237, 237, 0.81);
  font-family: "Random Grotesque Standard Semibold";
  font-size: 16px;
  font-weight: 600;
  text-transform: capitalize;
`;
