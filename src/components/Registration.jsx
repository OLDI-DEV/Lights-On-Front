import styled from "styled-components";
import registrationBackgroundImg from "../assets/images/registrationImg.png";
import smileImg from "../assets/images/input-smile.svg";
import emailImg from "../assets/images/input-email.svg";
import { forwardRef } from "react";

const Registration = () => {
  return (
    <RegistrationContainer id="registration">
      <RegistrationInner>
        <RegistrationTitle>Свяжитесь с нами!</RegistrationTitle>

        <InputBlock>
          <InputLabel>Имя </InputLabel>
          <Input
            type="text"
            placeholder="Как мы можем к вам обращаться?"
          ></Input>
          <InputIcon src={smileImg} />
        </InputBlock>

        <InputBlock>
          <InputLabel>Email </InputLabel>
          <Input
            type="text"
            placeholder="Адрес вашей электронной почты"
          ></Input>
          <InputIcon src={emailImg} />
        </InputBlock>
        <InputBlock>
          <CommentTextArea placeholder="Опишите, что вас интересует" />
        </InputBlock>
        <InputBlock>
          <SubmitBtn>Отправить заявку</SubmitBtn>
        </InputBlock>
      </RegistrationInner>

      <RegistrationImgBlock>
        <BackgroundImg src={registrationBackgroundImg} />

        {/*         <RegistrationBgPhoneImg
          src={registrationPhoneBgImg}
        /> */}
      </RegistrationImgBlock>
    </RegistrationContainer>
  );
};

export default forwardRef(Registration);

const RegistrationBgPhoneImg = styled.img`
  display: none;
  @media screen and (max-width: 650px) {
    display: block;
    max-width: 400px;
    min-width: 0;
    width: 100%;
    object-fit: contain;
  }
`;

const PhoneImg = styled.img`
  position: absolute;
  left: 105px;
  top: 60px;
  /*   @media screen and (max-width: 650px) {
display:none;
  } */
`;

const BackgroundImg = styled.img`
  width: 100%;
  min-width: 0;
  object-fit: contain;
  @media screen and (max-width: 650px) {
    /* display:none; */
  }
`;

const RegistrationImgBlock = styled.div`
  position: relative;
`;

const SubmitBtn = styled.button`
  width: 100%;
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
  width: calc(100% + 16px);
`;

const CommentTextArea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  border-radius: 6px;
  border: 1px solid #e7eaee;
  background: #fff;
  color: #acb4c3;
  font-variant-numeric: stacked-fractions;
  font-feature-settings: "cv09" on, "cv04" on, "ss01" on, "cv03" on, "ss03" on,
    "cv06" on;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.09px;
  min-height: 90px;
  margin-bottom: 24px;
  width: calc(100% - 10px);
  @media screen and (max-width: 480px) {
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
`;

const InputIcon = styled.img`
  position: absolute;
  top: 40px;
  left: 12px;
`;
const Input = styled.input`
  width: calc(100% - 32px);

  padding: 12px 16px 12px 38px;
  border-radius: 6px;
  border: 1px solid #e7eaee;
  background: #fff;
  color: #acb4c3;
  font-variant-numeric: stacked-fractions;
  font-feature-settings: "cv09" on, "cv04" on, "ss01" on, "cv03" on, "ss03" on,
    "cv06" on;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.09px;
  margin-bottom: 10px;

  @media screen and (max-width: 480px) {
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
`;

const InputLabel = styled.div`
  color: #07090d;
  font-variant-numeric: stacked-fractions;
  font-feature-settings: "cv09" on, "cv04" on, "ss01" on, "cv03" on, "ss03" on,
    "cv06" on;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.09px;
  margin-top: 4px;
  @media screen and (max-width: 480px) {
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 200% */
    letter-spacing: -0.09px;
  }
`;

const InputBlock = styled.div`
  flex-direction: column;
  position: relative;
  display: flex;
  width: calc(100% - 28px);
`;

const RegistrationTitle = styled.div`
  color: #000;
  font-feature-settings: "cpsp" on, "cv06" on, "cv09" on, "cv04" on, "cv03" on,
    "case" on, "ss03" on;
  font-family: "Montserrat", sans-serif;
  font-size: 44px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.88px;
  margin-bottom: 42px;
  @media screen and (max-width: 1000px) {
    display: flex;
    justify-content: center;
  }
  @media screen and (max-width: 780px) {
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.72px;
  }
  @media screen and (max-width: 480px) {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.4px;
  }
`;

const RegistrationInner = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 490px;
  width: 100%;
  @media screen and (max-width: 650px) {
    max-width: 490px;
    width: 100%;
  }
`;
const RegistrationContainer = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  gap: 50px;
  @media screen and (max-width: 1100px) {
    gap: 60px;
    flex-direction: column;
  }
`;
