
import styled from 'styled-components'
import registrationBackgroundImg from '../assets/images/registrationImg.svg'
import registrationPhoneImg from '../assets/images/registration-phone.png'


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
      </RegistrationImgBlock>
    </RegistrationContainer>
  )
}



export default Registration;

const PhoneImg = styled.img`
position:absolute;
left:105px;
top:60px;
`

const BackgroundImg = styled.img`

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

`

const RegistrationInner = styled.div`
  display: flex;
  flex-direction:column;
  width:490px;

`
const RegistrationContainer = styled.div`
  margin-top:100px;
  display: flex;
  justify-content: space-between;
  align-items:center;
`