import React from "react";
import styled from "styled-components";
import DiamondImage2 from "../images/DiamondImage2.png";

const Container = styled.div`
  margin-top: 24vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 80vh;
  width: 100vw;
  background: rgba(17, 17, 17, 0.8);
  z-index: 10;

  @media (min-width: 1200px) {
    margin-top: 320px;
  }

  @media (max-width: 768px) {
    height: 60vh;
  }

  @media (max-width: 480px) {
    height: 25vh;
  }
`;

const CentralImage = styled.img`
  width: 25vw;
  height: 25vw;
  max-width: 350px;
  max-height: 350px;
  flex-shrink: 0;
  position: absolute;
  z-index: 2;
  transition: all 0.5s ease;

  @media (min-width: 1200px) {
    width: 350px;
    height: 350px;
  }

  @media (max-width: 768px) {
    width: 30vw;
    height: 30vw;
  }

  @media (max-width: 480px) {
    width: 25vw;
    height: 25vw;
  }
`;

const NumberCircle = styled.div`
  width: 8vw;
  height: 8vw;
  max-width: 80px;
  max-height: 80px;
  flex-shrink: 0;
  border-radius: 50%;
  background: #1e1e1e;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2vw;
  position: absolute;
  z-index: 1;
  transition: all 0.5s ease;

  ${({ degree, radius }) => `
    transform: rotate(${degree}deg) translate(${radius}vw) rotate(-${degree}deg);
  `}

  @media (min-width: 1200px) {
    width: 80px;
    height: 80px;
    font-size: 24px;
  }

  @media (max-width: 768px) {
    width: 10vw;
    height: 10vw;
    font-size: 3vw;
  }

  @media (max-width: 480px) {
    width: 8vw;
    height: 8vw;
    font-size: 2vw;
  }
`;

const PositionedElement = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 22vw;
  height: 8vw;
  max-width: 300px;
  max-height: 80px;
  flex-shrink: 0;
  color: #f0f0f0;
  font-family: Inter, sans-serif;
  font-size: 1.5vw;
  font-weight: 400;
  text-align: center;
  line-height: 1.2em;
  transition: all 0.5s ease;
  z-index: 1;

  ${({ degree, radius }) => `
    transform: rotate(${degree}deg) translate(${radius}vw) rotate(-${degree}deg);
  `}

  @media (min-width: 1200px) {
    width: 300px;
    height: 80px;
    font-size: 18px;
  }

  @media (max-width: 768px) {
    font-size: 2.5vw;
    width: 30vw;
    height: 10vw;
  }

  @media (max-width: 480px) {
    font-size: 2.5vw;
    width: 30vw;
    height: 7vw;
  }
`;

const RadialLayout = () => {
  const radiusText = 40;
  const radiusNumber = 30;

  const centralImageUrl = DiamondImage2;

  const elements = [
    {
      text: "Idea based strategy\ndevelopment",
      degree: 190,
      number: 1,
      numberdergree: 180,
    },
    {
      text: "Analysis and\nPlanning",
      degree: 225,
      number: 2,
      numberdergree: 225,
    },
    { text: "UI/UX Design", degree: 270, number: 3, numberdergree: 270 },
    {
      text: "Development\nand Testing",
      degree: 315,
      number: 4,
      numberdergree: 315,
    },
    {
      text: "Deployment and\nperformance monitoring",
      degree: 350,
      number: 5,
      numberdergree: 360,
    },
  ];

  return (
    <Container>
      <CentralImage src={centralImageUrl} alt="Central Image" />

      {elements.map((el, index) => (
        <React.Fragment key={index}>
          <NumberCircle degree={el.numberdergree} radius={radiusNumber}>
            {el.number}
          </NumberCircle>

          <PositionedElement degree={el.degree} radius={radiusText}>
            {el.text}
          </PositionedElement>
        </React.Fragment>
      ))}
    </Container>
  );
};

export default RadialLayout;
