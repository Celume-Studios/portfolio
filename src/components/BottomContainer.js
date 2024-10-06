import React from "react";
import styled from "styled-components";
import whatsapp from "../images/Whatsapp.png";
import linkedin from "../images/linkedin.png";
import gmail from "../images/gmail.png";
import insta from "../images/Insta.png";
import youtube from "../images/youtube.png";
import twitter from "../images/twitter.png";
import fb from "../images/fb.png";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  width: 100%;
  background-color: #111;
  box-sizing: border-box;
  margin-top: 150px;
`;

const IconsContainer = styled.div`
  display: flex; 
  justify-content: center; 
  flex-wrap: wrap; 
  gap: 10px; /* Reduced gap between icons */
  width: 100%;
  max-width: 1200px;
  
  @media (max-width: 768px) {
    flex-direction: row; /* Ensure row layout on medium screens */
    justify-content: center; /* Center icons */
  }

  @media (max-width: 480px) {
    flex-direction: row; /* Two columns for small screens */
    justify-content: space-between; /* Adjust for spacing */
  }
`;

const IconCircle = styled.a`
  width: 70px; /* Slightly reduced size */
  height: 70px; /* Slightly reduced size */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--white-black-10, #1A1A1A);
  border-radius: 50%; /* Make it circular */
  cursor: pointer; 
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1); 
  }
`;

const IconImage = styled.img`
  width: 36px; /* Reduced icon size */
  height: 36px; /* Reduced icon size */
`;

const IconFb = styled.img`
  width: 24px;
  height: 36px;
`;

const SeparatorLine = styled.div`
  width: 100%;
  max-width: 855px;
  height: 1px;
  background-color: var(--white-black-15, #262626);
  margin: 40px auto;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 628px;
  height: 100px;
  color: var(--white-black-40, #666);
  font-family: Roboto;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 50.4px */
  text-align: center;
`;

const LargeTextContainer = styled.div`
  width: 100%;
  max-width: 713px;
  height: 133px;
  color: #666;
  font-family: Inter;
  font-size: 96px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 134.4px */
  text-transform: capitalize;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 64px;
  }

  @media (max-width: 480px) {
    font-size: 48px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <IconsContainer id="contact-us">
        <IconCircle
          href="https://www.whatsapp.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconImage src={whatsapp} alt="WhatsApp" />
        </IconCircle>
        <IconCircle
          href="https://mail.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconImage src={gmail} alt="Gmail" />
        </IconCircle>
        <IconCircle
          href="https://www.instagram.com/celumestudios?igsh=MmM1bTZnbTg0NGl2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconImage src={insta} alt="Instagram" />
        </IconCircle>
        <IconCircle
          href="https://www.linkedin.com/company/celume-studios/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconImage src={linkedin} alt="LinkedIn" />
        </IconCircle>
        <IconCircle
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconImage src={twitter} alt="Twitter" />
        </IconCircle>
        <IconCircle
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconImage src={youtube} alt="YouTube" />
        </IconCircle>
        <IconCircle
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconFb src={fb} alt="Meta" />
        </IconCircle>
      </IconsContainer>

      <SeparatorLine />

      <TextContainer>
        <p>© Celume Studios — Service Based Oriented | 2024</p>
      </TextContainer>

      <LargeTextContainer>
        <p>Celume Studios</p>
      </LargeTextContainer>
    </FooterContainer>
  );
};

export default Footer;
