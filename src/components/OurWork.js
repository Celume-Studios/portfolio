import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import AoneVisa from "../images/AoneVisa.png";
import Turf from "../images/Turf.png";
import CarouselWithReviews from "./CarouselWIthReviews";

// Sample project data array with different images, titles, and descriptions
const projectData = [
  {
    id: 1,
    title: "Aone Visa",
    description:
      "Lorem nisi, auctor vitae vestibulum aenean ipsum, arcu commodo, blandit. Ligula sed nulla sit adipiscing facilisis tortor cras. Donec venenati.Lorem nisi, auctor vitae vestibulum aenean ipsum, arcu commodo, blandit. Ligula sed nulla sit adipiscing facilisis tortor cras. Donec venenatiLorem nisi, auctor vitae vestibulum aenean ipsum, arcu commodo, blandit. Ligula sed nulla sit adipiscing facilisis tortor cras. Donec venenati",
    image: AoneVisa,
  },
  {
    id: 2,
    title: "Turf",
    description:
      "Lorem nisi, auctor vitae vestibulum aenean ipsum, arcu commodo, blandit. Ligula sed nulla sit adipiscing facilisis tortor cras. Donec venenati.Lorem nisi, auctor vitae vestibulum aenean ipsum, arcu commodo, blandit. Ligula sed nulla sit adipiscing facilisis tortor cras. Donec venenatiLorem nisi, auctor vitae vestibulum aenean ipsum, arcu commodo, blandit. Ligula sed nulla sit adipiscing facilisis tortor cras. Donec venenati",
    image: Turf,
  },

  // Add more projects as needed
];

const Carousel = () => {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollWrapperRef = useRef(null);

  // Check if we can scroll left or right
  const checkScrollPosition = () => {
    const scrollWrapper = scrollWrapperRef.current;
    if (scrollWrapper) {
      setCanScrollLeft(scrollWrapper.scrollLeft > 0);
      setCanScrollRight(
        scrollWrapper.scrollLeft + scrollWrapper.clientWidth <
          scrollWrapper.scrollWidth
      );
    }
  };

  const scrollRight = () => {
    document.getElementById("scroll-wrapper").scrollBy({
      left: 514, // Adjusted for container width
      behavior: "smooth",
    });
  };

  const scrollLeft = () => {
    document.getElementById("scroll-wrapper").scrollBy({
      left: -514, // Adjusted for container width
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Run on component mount and on every scroll
    checkScrollPosition();
    const scrollWrapper = scrollWrapperRef.current;
    scrollWrapper.addEventListener("scroll", checkScrollPosition);

    return () => {
      scrollWrapper.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  return (
    <>
      <CarouselContainer>
        <CurrentProjectsText id="our-work">
          Our Current Projects
        </CurrentProjectsText>
        <CarouselWrapper>
          {canScrollLeft && (
            <ScrollArrowLeft onClick={scrollLeft}>{"<"}</ScrollArrowLeft>
          )}
          <ScrollWrapper id="scroll-wrapper" ref={scrollWrapperRef}>
            {projectData.map((project) => (
              <ProjectsContainer key={project.id}>
                <ImageContainer>
                  <Image src={project.image} alt={project.title} />
                </ImageContainer>
                <TextWrapper>
                  <GradientTextContainer>
                    <GradientText>{project.title}</GradientText>
                  </GradientTextContainer>
                  <ProjectDescription>{project.description}</ProjectDescription>
                </TextWrapper>
              </ProjectsContainer>
            ))}
          </ScrollWrapper>
          {canScrollRight && (
            <ScrollArrowRight onClick={scrollRight}>{">"}</ScrollArrowRight>
          )}
        </CarouselWrapper>
      </CarouselContainer>
      <CarouselWithReviews />
    </>
  );
};

// Main Carousel Container
const CarouselContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
`;

const CurrentProjectsText = styled.div`
  text-align: center;
  font-family: Inter, sans-serif;
  font-size: 40px;
  font-weight: 400;
  color: #f0f0f0;
  margin-bottom: 44px; /* Ensure 44px distance from the carousel */
`;

const CarouselWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1440px; /* Ensures it stays centered */
  overflow: hidden; /* Ensures content doesn't overflow horizontally */
`;

const ScrollWrapper = styled.div`
  display: flex;
  gap: 44px;
  overflow-x: auto;
  padding: 0 20px;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none; /* Hide scrollbar */
  }
`;

const ProjectsContainer = styled.div`
  width: 470px;
  height: auto;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #111;
  border-radius: 10px;
  padding: 15px;

  @media (max-width: 768px) {
    width: 300px;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 231px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #111;
  border-radius: 10px;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 10px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
`;

const GradientTextContainer = styled.div`
  display: inline-block;
  padding: 5px 15px;
  border-radius: 25px;
  background-color: rgba(255, 255, 255, 0.05);
`;

const GradientText = styled.span`
  font-family: Inter, sans-serif;
  font-size: 24px;
  font-weight: 500;
  background: linear-gradient(90deg, #ffbec1 0%, #f14300 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ProjectDescription = styled.p`
  font-size: 18px;
  color: rgba(240, 240, 240, 0.8);
  line-height: 1.4;
  width: 425px;

  @media (max-width: 768px) {
    width: 300px;
  }
`;

const ScrollArrowLeft = styled.button`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: white;
  font-size: 32px;
  cursor: pointer;

  &:hover {
    color: #ff5733;
  }
`;

const ScrollArrowRight = styled(ScrollArrowLeft)`
  left: unset;
  right: 10px;
`;

export default Carousel;
