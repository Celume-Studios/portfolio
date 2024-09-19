import React from "react";
import styled from "styled-components";
import DiamondImage2 from "../images/DiamondImage2.png";

// Container for the entire layout
const Container = styled.div`
  margin-top: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 500px;
  width: 100vw;
  background: #111;
`;

// Central image
const CentralImage = styled.img`
  width: 400px;
  height: 400px;
  flex-shrink: 0;
  position: absolute;
  z-index: 1;
`;

// Number circle element
const NumberCircle = styled.div`
  width: 60px;
  height: 61px;
  flex-shrink: 0;
  border-radius: 60px;
  background: #1e1e1e;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  position: absolute;

  ${({ degree, radius }) => `
    transform: rotate(${degree}deg) translate(${radius}px) rotate(-${degree}deg);
  `}
`;

const PositionedElement = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 338px;
  height: 33px;
  flex-shrink: 0;
  color: #f0f0f0;
  font-family: Inter, sans-serif;
  font-size: 23px;
  font-weight: 400;
  text-align: center;
  line-height: 20px;

  ${({ degree, radius }) => `
    transform: rotate(${degree}deg) translate(${radius}px) rotate(-${degree}deg);
  `}
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
`;

const RadialLayout = () => {
  const radiusText = 430;
  const radiusNumber = 320;

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
