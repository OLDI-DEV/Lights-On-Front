import styled from 'styled-components'
import leftCubeImg from '../assets/images/left-cueb.svg'
import RightCubeImg from '../assets/images/right-cube.svg'
import phoneImg from '../assets/images/phone-img.png'


const PhoneBlock = () => {
  return (
    <Wrapper>

      <PhoneBlockContainer>
        <LeftCube
          src={leftCubeImg}
        />
        <RightCube
          src={RightCubeImg}
        />
        <PhoneImg
          src={phoneImg}
        />

      </PhoneBlockContainer>
    </Wrapper>
  )
}

export default PhoneBlock;

const PhoneImg = styled.img`
position:absolute;
    top: 120px;
    left: 350px;

`
const RightCube = styled.img`
position:absolute;
right:0;
`
const LeftCube = styled.img`
position:absolute;
left:0;
`

const PhoneBlockContainer = styled.div`
width: 1400px;
height: 730px;

margin:0 auto;
margin-top:20px;
position:relative;
`
const Wrapper = styled.div`
margin:0 auto;
width:90vw;
background: radial-gradient(44.25% 42.34% at 50% 43.38%, #FFD337  39.1%, rgba(255, 255, 255, 0.00) 103%);
/* background: radial-gradient(from 180deg at 50.00% 50.00%, #FFD337 0deg, #FFD337 360deg); */
`