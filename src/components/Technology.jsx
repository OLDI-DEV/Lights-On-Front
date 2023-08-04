import LogoImg from '../assets/images/lights_on_logo.svg'
import styled from 'styled-components'



const Technology = () => {
  return (

    <TechologyContainer>
      <TechologyTitle>Технологии для всех</TechologyTitle>
      <TechologySubTitle>Разработка качественного компьютерного программного обеспечения</TechologySubTitle>
      <ContactInformation>
        <ContactUsButton>
          Связаться с нами
        </ContactUsButton>
        <TimesheetTitle>
          Как мы работаем?
        </TimesheetTitle>
      </ContactInformation>
    </TechologyContainer>
  )
}

export default Technology;

const TimesheetTitle = styled.div`
color: #34C759;
font-family: 'Montserrat' , sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px;
letter-spacing: -0.32px;
cursor:pointer;
`
const ContactUsButton = styled.button`
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


const ContactInformation = styled.div`
display: flex;
gap:30px;
justify-content: center;
align-items: center;
margin-top:60px;
`
const TechologySubTitle = styled.div`
color:  #383942;
text-align: center;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 150%;
font-family: 'Montserrat' , sans-serif;
margin-top:30px;
`
const TechologyTitle = styled.div`
color: #131316;
text-align: center;
font-family: 'Montserrat' , sans-serif;
font-size: 69px;
font-style: normal;
font-weight: 900;
line-height: 72px; 
letter-spacing: -1.38px;

`

const TechologyContainer = styled.div`
margin-top: 100px ;
width:100%;
display: flex;
justify-content: center;
flex-direction:column;


`