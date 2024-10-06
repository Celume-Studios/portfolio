import React, { useState, useEffect } from "react";
import { Space, Layout } from "antd";
import styled from "styled-components";
import { MenuOutlined } from "@ant-design/icons";
import CelumeLogo from "../images/CelumeLogo.png";

const { Header } = Layout;

const StyledHeader = styled(Header)`
  background-color: ${(props) =>
    props.isScrolled ? "rgba(0, 0, 0, 0.3)" : "transparent"};
  backdrop-filter: ${(props) => (props.isScrolled ? "blur(10px)" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  transition: background-color 0.3s, backdrop-filter 0.3s;
  box-sizing: border-box;
`;

const Logo = styled.img`
  width: 80px;
  height: 80px;
  flex-shrink: 0;
`;

const NavLinks = styled(Space)`
  display: flex;
  gap: 40px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.p`
  color: #e9e9e9;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  cursor: pointer;
  margin: 0;

  &:hover {
    color: #ff5700;
  }
`;

const MobileMenuIcon = styled(MenuOutlined)`
  color: #fff;
  font-size: 30px;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 70px;
  right: 20px;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 20px;
  z-index: 2;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s, backdrop-filter 0.3s;

  @media (min-width: 768px) {
    display: none;
  }
`;
const MobileNavLink = styled.p`
  color: #e9e9e9;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  cursor: pointer;
  margin-bottom: 10px;

  &:hover {
    color: #ff5700;
  }
`;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <StyledHeader isScrolled={isScrolled}>
      <Logo src={CelumeLogo} alt="Celume Logo" />

      <NavLinks size={40}>
        <NavLink onClick={() => scrollToSection("about-us")}>About Us</NavLink>
        <NavLink onClick={() => scrollToSection("services")}>Services</NavLink>
        <NavLink onClick={() => scrollToSection("our-work")}>Our Work</NavLink>
        <NavLink onClick={() => scrollToSection("reviews")}>Reviews</NavLink>
        <NavLink onClick={() => scrollToSection("contact-us")}>
          Contact Us
        </NavLink>
      </NavLinks>

      <MobileMenuIcon onClick={() => setIsMenuOpen(!isMenuOpen)} />

      {isMenuOpen && (
        <MobileMenu isScrolled={isScrolled}>
          <MobileNavLink onClick={() => scrollToSection("about-us")}>
            About Us
          </MobileNavLink>
          <MobileNavLink onClick={() => scrollToSection("services")}>
            Services
          </MobileNavLink>
          <MobileNavLink onClick={() => scrollToSection("our-work")}>
            Our Work
          </MobileNavLink>
          <MobileNavLink onClick={() => scrollToSection("reviews")}>
            Reviews
          </MobileNavLink>
          <MobileNavLink onClick={() => scrollToSection("contact-us")}>
            Contact Us
          </MobileNavLink>
        </MobileMenu>
      )}
    </StyledHeader>
  );
};

export default Navbar;
