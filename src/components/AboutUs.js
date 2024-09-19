import React from "react";
import styled from "styled-components";
import RadialLayout from "./StepsComponent";
import DiamondImage2 from "../images/DiamondImage2.png";
import StartYourJourney from "../images/StartYourJourney.png";

const Container = styled.div`
  width: 90%;
  max-width: 996px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  margin: 0 auto;
`;

const HowCelumeWorksContainer = styled.div`
  width: 100%;
  max-width: 517px;
  flex-direction: column;
  justify-content: center;
  color: #f0f0f0;
  margin-top: 40px;
  font-family: Inter, sans-serif;
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.05em;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const DescriptionContainer = styled.div`
  width: 100%;
  max-width: 781px;
  flex-direction: column;
  justify-content: center;
  color: rgba(240, 240, 240, 0.8);
  margin-top: 28px;
  font-family: Inter, sans-serif;
  font-size: 1.25rem;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const GradientTextContainer = styled.div`
  width: auto;
  padding: 10px 20px;
  border-radius: 75px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

const GradientText = styled.span`
  font-family: Inter, sans-serif;
  font-size: 1.25rem;
  font-weight: 500;
  text-transform: uppercase;
  background: linear-gradient(90deg, #ffbec1 0%, #f14300 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const AboutUs = () => (
  <>
    <Container>
      <Image src={StartYourJourney} alt="Start Your Journey" />
    </Container>

    <TextContainer>
      <GradientTextContainer>
        <GradientText>Steps We Follow</GradientText>
      </GradientTextContainer>
      <HowCelumeWorksContainer>How Celume Works</HowCelumeWorksContainer>
      <DescriptionContainer>
        Use and re-use tons of responsive sections to create the perfect layout.
        Sections are firmly organized into the perfect start.
      </DescriptionContainer>
    </TextContainer>
    <RadialLayout />
  </>
);

export default AboutUs;
