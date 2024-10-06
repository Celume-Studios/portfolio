import React from "react";
import styled from "styled-components";
import BottomContainer from "./BottomContainer";

const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  background-color: #111;
  padding: 30px 0;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  max-width: 1200px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    margin-left: 0;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const FooterHeading = styled.h3`
  color: var(--WhiteBlack-White, #fff);
  font-family: "Open Sans Hebrew";
  font-size: 26px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const FooterLink = styled.p`
  color: var(--white-black-70, #b3b3b3);
  font-family: Roboto;
  font-size: 24px;
  font-weight: 400;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 20px;
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
