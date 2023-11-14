import styled from "styled-components";
import ContactModal from "./contact/ContactModal";
import { useState } from "react";
const Technology = () => {
  const [isContactModal, setIsContactModal] = useState(false);
  function openContactModal() {
    setIsContactModal(true);
  }
  function closeContactModal() {
    setIsContactModal(false);
  }

  return (
    <TechologyContainer>
      <TechologyTitle>
        Технологии для <GradientWord>всех</GradientWord>
      </TechologyTitle>
      <TechologySubTitle>
        Разработка качественного компьютерного программного обеспечения
      </TechologySubTitle>
      <ContactInformation>
        <ContactUsButton
          onClick={() => {
            openContactModal();
          }}
        >
          Связаться с нами
        </ContactUsButton>
        <TimesheetTitle>Как мы работаем?</TimesheetTitle>
      </ContactInformation>
      {isContactModal && <ContactModal closeContactModal={closeContactModal} />}
      
    </TechologyContainer>
  );
};

export default Technology;

const GradientWord = styled.span`
  color: #131316;
  background: #ffc93e;
  background: linear-gradient(to left, #ffc93e 0%, #34c759 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-size: 69px;
  font-style: normal;
  font-weight: 900;
  line-height: 72px;
  letter-spacing: -1.38px;
  @media screen and (max-width: 780px) {
    font-size: 52px;
    font-style: normal;
    font-weight: 900;
    line-height: 62px;
    letter-spacing: -1.04px;
  }
  @media screen and (max-width: 650px) {
    font-size: 36px;
    font-style: normal;
    font-weight: 900;
    line-height: 42px;
    letter-spacing: -0.72px;
  }
  @media screen and (max-width: 480px) {
    font-size: 24px;
    font-style: normal;
    font-weight: 900;
    line-height: 32px;
    letter-spacing: -0.48px;
  }
`;

const TimesheetTitle = styled.div`
  color: #34c759;
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
`;

const ContactInformation = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  @media screen and (max-width: 780px) {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    margin-top: 42px;
  }
`;
const TechologySubTitle = styled.div`
  color: #383942;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  font-family: "Montserrat", sans-serif;
  margin-top: 30px;
  @media screen and (max-width: 780px) {
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    margin-top: 24px;
  }
  @media screen and (max-width: 650px) {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    margin-top: 16px;
  }
`;
const TechologyTitle = styled.div`
  color: #131316;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-size: 69px;
  font-style: normal;
  font-weight: 900;
  line-height: 72px;
  letter-spacing: -1.38px;
  @media screen and (max-width: 780px) {
    font-size: 52px;
    font-style: normal;
    font-weight: 900;
    line-height: 62px;
    letter-spacing: -1.04px;
  }
  @media screen and (max-width: 650px) {
    font-size: 36px;
    font-style: normal;
    font-weight: 900;
    line-height: 42px;
    letter-spacing: -0.72px;
  }
  @media screen and (max-width: 480px) {
    font-size: 24px;
    font-style: normal;
    font-weight: 900;
    line-height: 32px;
    letter-spacing: -0.48px;
  }
`;

const TechologyContainer = styled.div`
  margin-top: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 780px) {
    margin-top: 80px;
    letter-spacing: -1.04px;
  }
`;
