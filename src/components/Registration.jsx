
import styled from 'styled-components'
import registrationBackgroundImg from '../assets/images/registrationImg.svg'
import registrationPhoneImg from '../assets/images/registration-phone.png'
import registrationPhoneBgImg from '../assets/images/registration-phone-bg.png'

const Registration = () => {
  return (
    <RegistrationContainer>
      <RegistrationInner>
        <RegistrationTitle>
          Свяжитесь с нами!
        </RegistrationTitle>

        <InputBlock>
          <InputLabel>Имя </InputLabel>
          <Input type='text' placeholder='Как мы можем к вам обращаться?'></Input>
          <InputIcon />
        </InputBlock>

        <InputBlock>
          <InputLabel>Email </InputLabel>
          <Input type='text' placeholder='Адрес вашей электронной почты'></Input>
          <InputIcon />
        </InputBlock>

        <CommentTextArea placeholder='Опишите, что вас интересует' />


        <SubmitBtn>
          Отправить заявку
        </SubmitBtn>
      </RegistrationInner>

      <RegistrationImgBlock>
        <BackgroundImg
          src={registrationBackgroundImg}
        />
        <PhoneImg
          src={registrationPhoneImg}
        />
        <RegistrationBgPhoneImg
          src={registrationPhoneBgImg}
        />
      </RegistrationImgBlock>





    </RegistrationContainer>
  )
}



export default Registration;

const RegistrationBgPhoneImg = styled.img`
display:none;
  @media screen and (max-width: 650px) {
    display: block;
    max-width: 400px;
    min-width: 0;
    width: 100%;
    object-fit: contain;
  }
`

const PhoneImg = styled.img`
position:absolute;
left:105px;
top:60px;
  @media screen and (max-width: 650px) {
display:none;
  }
`

const BackgroundImg = styled.img`
  @media screen and (max-width: 650px) {
display:none;
  }
`

const RegistrationImgBlock = styled.div`
position:relative;


`

const SubmitBtn = styled.button`
width:100%;
border:unset;
color:  #FFF;
font-family: 'Montserrat' , sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 24px; 
letter-spacing: -0.32px;
border-radius: 88px;
background: #34C759;
padding:12px 24px;
cursor:pointer;
`

const CommentTextArea = styled.textarea`
width:100%;
padding:12px 16px;
border-radius: 6px;
border: 1px solid  #E7EAEE;
background:  #FFF;
color:  #ACB4C3;
font-variant-numeric: stacked-fractions;
font-feature-settings: 'cv09' on, 'cv04' on, 'ss01' on, 'cv03' on, 'ss03' on, 'cv06' on;
font-family: 'Montserrat' , sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 24px; 
letter-spacing: -0.09px;
min-height:90px;
margin-bottom: 24px;
width:calc(100% - 32px);
  @media screen and (max-width: 480px) {
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; 
  }
`

const InputIcon = styled.img`

`
const Input = styled.input`
width:calc(100% - 32px);
padding:12px 16px;
border-radius: 6px;
border: 1px solid  #E7EAEE;
background:  #FFF;
color:  #ACB4C3;
font-variant-numeric: stacked-fractions;
font-feature-settings: 'cv09' on, 'cv04' on, 'ss01' on, 'cv03' on, 'ss03' on, 'cv06' on;
font-family: 'Montserrat' , sans-serif;
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
`

const InputLabel = styled.div`
color:  #07090D;
font-variant-numeric: stacked-fractions;
font-feature-settings: 'cv09' on, 'cv04' on, 'ss01' on, 'cv03' on, 'ss03' on, 'cv06' on;
font-family: 'Montserrat' , sans-serif;
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
`

const InputBlock = styled.div`
flex-direction:column;

`


const RegistrationTitle = styled.div`
color: #000;
font-feature-settings: 'cpsp' on, 'cv06' on, 'cv09' on, 'cv04' on, 'cv03' on, 'case' on, 'ss03' on;
font-family: 'Montserrat' , sans-serif;
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

`

const RegistrationInner = styled.div`
  display: flex;
  flex-direction:column;
  max-width:490px;
  width:100%;
  @media screen and (max-width: 650px) {
  max-width:490px;
  width:100%;
  }

`
const RegistrationContainer = styled.div`
  margin-top:100px;
  display: flex;
  justify-content: space-between;
  align-items:center;
  padding:0 16px;
  gap:15px;
  @media screen and (max-width: 1000px) {
    gap:60px;
    flex-direction:column;
  }

`