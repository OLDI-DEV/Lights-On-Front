import LogoImg from '../assets/images/lights_on_logo.svg'
import styled from 'styled-components'



const Header = () => {
  return (
    <HeaderContainer>
      <MainLogoImg
        src={LogoImg}
      />
      <NavBar>
        <NavBarItem>
          Услуги
        </NavBarItem>
        <NavBarItem>
          Процесс
        </NavBarItem>
        <NavBarItem>
          Контакты
        </NavBarItem>
      </NavBar>
      <ContactUsButton>Связаться с нами</ContactUsButton>
    </HeaderContainer>
  )
}

export default Header;

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
const NavBarItem = styled.a`
display: flex;
color: #131316;
font-family: 'Montserrat' , sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px; 
letter-spacing: -0.32px;
cursor:pointer;
`
const NavBar = styled.div`
display: flex;
gap:40px;
`

const MainLogoImg = styled.img`
width:210px;
height:72px;

`
const HeaderContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`