import LogoImg from '../assets/images/lights_on_logo.svg'
import styled from 'styled-components'


const Footer = () => {
  return (
    <FooterContainer>
      <TopItems>
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
      </TopItems>
      <DownItems>
        <DownItemText>ООО "ЛАЙТС ОН"</DownItemText>
        <DownItemText>ИНН 7716859332</DownItemText>

      </DownItems>

    </FooterContainer>
  )
}

export default Footer;


const DownItemText = styled.div`
color:  #080808;
text-align: center;
font-variant-numeric: stacked-fractions;
font-feature-settings: 'cv09' on, 'cv04' on, 'ss01' on, 'cv03' on, 'ss03' on, 'cv06' on;

font-family: 'Montserrat' , sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: -0.09px;
`

const DownItems = styled.div`
display: flex;
flex-direction:column;
align-items: center;
padding:32px 0px 10px;
`

const TopItems = styled.div`
display: flex;
justify-content: space-between;
  align-items: center;
  width:100%;
  padding:16px 0;
  border-top:1px solid rgba(230, 230, 230, 1);
  border-bottom:1px solid rgba(230, 230, 230, 1);
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
gap:24px;
`
const MainLogoImg = styled.img`
width:210px;
height:72px;

`

const FooterContainer = styled.div`
  margin-top: 300px;
  width:100%;
  display: flex;
  flex-direction:column;

  
`