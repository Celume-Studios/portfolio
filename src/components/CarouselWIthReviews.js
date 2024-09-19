import React from "react";
import styled from "styled-components";

import UserImage from "../images/UserImage.png";
import Stars from "../images/stars.png";

const userReviews = [
  {
    id: 1,
    name: "Joy Nancheri",
    image: UserImage,
    review: "Amazing service! Got my PR hassle-free.",
  },
  {
    id: 2,
    name: "John Doe",
    image: UserImage,
    review: "Excellent customer support. Highly recommend.",
  },
  {
    id: 3,
    name: "Jane Smith",
    image: UserImage,
    review: "A seamless experience, very professional.",
  },
  {
    id: 4,
    name: "Alex Johnson",
    image: UserImage,
    review: "Couldn't be more satisfied with the service.",
  },
  // More reviews...
];

const CarouselWithReviews = () => {
  const scrollRight = () => {
    document.getElementById("review-scroll-wrapper").scrollBy({
      left: 500,
      behavior: "smooth",
    });
  };

  const scrollLeft = () => {
    document.getElementById("review-scroll-wrapper").scrollBy({
      left: -500,
      behavior: "smooth",
    });
  };

  return (
    <CarouselContainer id="reviews">
      <TopTextContainer>
        <LargeText>
          Trusted by <HighlightText>12,500+</HighlightText> happy users
        </LargeText>
        <SubtitleText>
          Use and re-use tons of responsive sections to create the perfect
          layout. Sections are firmly organized into the perfect start.
        </SubtitleText>
      </TopTextContainer>

      <CarouselWrapper>
        <ScrollArrowLeft onClick={scrollLeft}>{"<"}</ScrollArrowLeft>
        <ScrollWrapper id="review-scroll-wrapper">
          {userReviews.map((review) => (
            <ReviewContainer key={review.id}>
              <TopSection>
                <UserInfo>
                  <UserName>{review.name}</UserName>
                  <StarsImage src={Stars} alt="5 stars" /> {/* Stars image */}
                </UserInfo>
                <UserImageContainer src={review.image} alt={review.name} />
              </TopSection>

              <DividerLine />

              <ReviewText>{review.review}</ReviewText>
            </ReviewContainer>
          ))}
        </ScrollWrapper>
        <ScrollArrowRight onClick={scrollRight}>{">"}</ScrollArrowRight>
      </CarouselWrapper>
    </CarouselContainer>
  );
};

const CarouselContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
`;

const TopTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  margin-bottom: 44px;
`;

const LargeText = styled.h1`
  width: 100%;
  text-align: center;
  font-family: "Open Sans Hebrew";
  font-size: 36px; /* Adjusted to match the provided image */
  font-weight: 400;
  color: #f0f0f0;
  margin-bottom: 10px;
`;

const HighlightText = styled.span`
  color: #f14300;
`;

const SubtitleText = styled.p`
  width: 100%;
  max-width: 676px;
  text-align: center;
  font-family: "Open Sans Hebrew";
  font-size: 16px;
  color: rgba(240, 240, 240, 0.8);
  line-height: 1.5;
`;

const CarouselWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  max-width: 1200px; /* Adjusted to constrain the carousel */
  align-items: center;
  overflow: hidden;
`;

const ScrollWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 14px;
  padding: 10px 0;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none; /* Hide scrollbar */
  }
`;

const ReviewContainer = styled.div`
  min-width: 382px;
  height: 180px;
  border-radius: 14px;
  background: #171717;
  border: 0.512px solid rgba(74, 87, 94, 0.1);
  box-shadow: 0px 2.048px 2.048px rgba(0, 0, 0, 0.02);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const UserName = styled.h3`
  color: #f0f0f0;
  font-family: "Open Sans Hebrew";
  font-size: 18px;
  font-weight: 600;
`;

const StarsImage = styled.img`
  width: 83px;
  height: 13px;
  object-fit: cover;
`;

const UserImageContainer = styled.img`
  width: 51px;
  height: 50px;
  border-radius: 4.096px;
  background: lightgray 50% / cover no-repeat, #f6f6f7;
`;

const DividerLine = styled.div`
  width: 342px;
  height: 0.256px; /* Line thickness */
  background: #4f4f4f;
  margin: 8px 0; /* Adjust margin to create spacing between sections */
`;

const ReviewText = styled.p`
  color: rgba(240, 240, 240, 0.8);
  font-family: "Open Sans Hebrew";
  font-size: 14px; /* Reduced size for better fit */
  font-weight: 400;
  line-height: 1.5;
`;

const ScrollArrowLeft = styled.button`
  position: absolute;
  left: 0;
  background: transparent;
  border: none;
  color: white;
  font-size: 32px;
  cursor: pointer;
  z-index: 10;

  &:hover {
    color: #ff5733;
  }

  &:disabled {
    visibility: hidden;
  }
`;

const ScrollArrowRight = styled.button`
  position: absolute;
  right: 0;
  background: transparent;
  border: none;
  color: white;
  font-size: 32px;
  cursor: pointer;
  z-index: 10;

  &:hover {
    color: #ff5733;
  }

  &:disabled {
    visibility: hidden;
  }
`;

export default CarouselWithReviews;
