import LogoImg from "../assets/images/lights_on_logo.svg";
import styled from "styled-components";
import { useState } from "react";
import ContactModal from "./contact/ContactModal";
const Header = () => {
  const [isContactModal, setIsContactModal] = useState(false);
  function openContactModal() {
    setIsContactModal(true);
  }
  function closeContactModal() {
    setIsContactModal(false);
  }

  return (
    <HeaderContainer>
      <MainLogoImg src={LogoImg} />
      <NavBar>
        <NavBarItem>Услуги</NavBarItem>
        <NavBarItem>Процесс</NavBarItem>
        <NavBarItem>Контакты</NavBarItem>
      </NavBar>
      <ContactUsButton
        onClick={() => {
          openContactModal();
        }}
      >
        Связаться с нами
      </ContactUsButton>
      {isContactModal && <ContactModal closeContactModal={closeContactModal} />}
    </HeaderContainer>
  );
};

export default Header;

const ContactUsButton = styled.button`
  border: unset;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.32px;
  border-radius: 88px;
  background: #34c759;
  padding: 12px 24px;
  cursor: pointer;
  @media screen and (max-width: 780px) {
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: -0.28px;
  }
  @media screen and (max-width: 650px) {
    display: none;
  }
`;
const NavBarItem = styled.a`
  display: flex;
  color: #131316;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.32px;
  cursor: pointer;
  @media screen and (max-width: 780px) {
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.28px;
  }
`;
const NavBar = styled.div`
  display: flex;
  gap: 40px;
  @media screen and (max-width: 650px) {
    display: none;
  }
`;

const MainLogoImg = styled.img`
  width: 210px;
  height: 72px;
`;
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  @media screen and (max-width: 650px) {
    justify-content: center;
  }
`;
