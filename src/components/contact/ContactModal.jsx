import styled from "styled-components";

const ContactModal = ({ closeContactModal }) => {
  return (
    <ContactModalWrapper onClick={closeContactModal}>
      <ContactModalContainer onClick={(e) => e.stopPropagation()}>
        <InfoBlock>
          <Title>Контакты</Title>
          <Subtitle>+74997040411</Subtitle>
        </InfoBlock>
        <InfoBlock>
          <Title>Адрес</Title>
          <Subtitle>Москва</Subtitle>
          <Subtitle>ул. Пресненская Наб., д. 12, Помещ. 5/5</Subtitle>
        </InfoBlock>
        <CloseButton onClick={closeContactModal}>Закрыть</CloseButton>
      </ContactModalContainer>
    </ContactModalWrapper>
  );
};

export default ContactModal;

const ContactModalWrapper = styled.div`
  position: fixed;
  display: flex;
  background-color: rgba(0, 0, 0, 0.3);
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
`;

const ContactModalContainer = styled.div`
  border-radius: 24px;
  background-color: #fff;
  min-width: 300px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 42px;
`;

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

const Title = styled.div`
  color: #000;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.32px;
`;

const Subtitle = styled.div`
  color: #000;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.32px;
`;

const CloseButton = styled.button`
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