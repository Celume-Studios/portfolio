import React from "react";
import styled from "styled-components";
import BottomContainer from "./BottomContainer";

// Styled components for the footer container and elements
const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #111; /* Change this to your desired background color */
  padding: 30px 0;
  margin-left: 30px;
  margin-top: 100px;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px; /* 80px gap between each text vertically */
`;

const FooterHeading = styled.h3`
  width: 180px;
  height: 24px;
  color: var(--WhiteBlack-White, #fff);
  font-family: "Open Sans Hebrew";
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 10%;
`;

const FooterLink = styled.p`
  color: var(--white-black-70, #b3b3b3);
  font-family: Roboto;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 30%; /* 48px */
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  const handleLinkClick = (link) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <FooterContainer>
        <FooterColumn>
          <FooterHeading>Support</FooterHeading>
          <FooterLink onClick={() => handleLinkClick("/faq")}>FAQ</FooterLink>
          <FooterLink onClick={() => handleLinkClick("/support")}>
            Support
          </FooterLink>
          <FooterLink onClick={() => handleLinkClick("/billing")}>
            Billing
          </FooterLink>
          <FooterLink onClick={() => handleLinkClick("/feedback")}>
            Feedback
          </FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterHeading>Company</FooterHeading>
          <FooterLink onClick={() => handleLinkClick("/shop")}>Shop</FooterLink>
          <FooterLink onClick={() => handleLinkClick("/terms")}>
            Terms of Service
          </FooterLink>
          <FooterLink onClick={() => handleLinkClick("/privacy")}>
            Privacy Policy
          </FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterHeading>Work with Us</FooterHeading>
          <FooterLink onClick={() => handleLinkClick("/content-program")}>
            Content program
          </FooterLink>
          <FooterLink onClick={() => handleLinkClick("/webmasters")}>
            Webmasters
          </FooterLink>
          <FooterLink onClick={() => handleLinkClick("/advertise")}>
            Advertise
          </FooterLink>
          <FooterLink onClick={() => handleLinkClick("/careers")}>
            Careers
          </FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterHeading>About</FooterHeading>
          <FooterLink onClick={() => handleLinkClick("/contacts")}>
            Contacts
          </FooterLink>
          <FooterLink onClick={() => handleLinkClick("/blog")}>Blog</FooterLink>
        </FooterColumn>
      </FooterContainer>
      <BottomContainer />
    </>
  );
};

export default Footer;
