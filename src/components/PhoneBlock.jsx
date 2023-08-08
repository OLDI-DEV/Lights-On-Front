import styled from 'styled-components'
import leftCubeImg from '../assets/images/left-cube.png'
import RightCubeImg from '../assets/images/right-cube.png'
import phoneImg from '../assets/images/phone-img.png'


const PhoneBlock = () => {
  return (
    <Wrapper>

      <PhoneBlockContainer>
        <LeftCube
          src={leftCubeImg}
        />
        <PhoneImg
          src={phoneImg}
        />
        <RightCube
          src={RightCubeImg}
        />


      </PhoneBlockContainer>
    </Wrapper>
  )
}

export default PhoneBlock;

const PhoneImg = styled.img`
margin-top:100px;
max-width: 100%;
max-height: 100%;
object-fit: contain;
  @media screen and (max-width: 1000px) {
    margin-top:50px;
  max-width: 60%;
  max-height: 70%;
  }
`
const RightCube = styled.img`
max-width: 30%;
height: 40%;
object-fit: contain;
  @media screen and (max-width: 780px) {
    right: 0;
    position: absolute;
    height: 25%;
    overflow: hidden;
  }
    @media screen and (max-width: 480px) {
    right: 0;
    position: absolute;
    height: 15%;
    overflow: hidden;
  }

`
const LeftCube = styled.img`
max-width: 10%;
height: 20%;
object-fit: contain;
  @media screen and (max-width: 780px) {
    left: 0;
    position: absolute;
    overflow: hidden;
  }
      @media screen and (max-width: 480px) {
    right: 0;
    position: absolute;
    height: 15%;
    overflow: hidden;
  }
`

const PhoneBlockContainer = styled.div`
max-width: 1400px;
height: 730px;
margin:0 auto;
margin-top:20px;
display: flex;
justify-content: space-between;
  @media screen and (max-width: 780px) {
    justify-content: center;
  }
  @media screen and (max-width: 780px) {
    height: fit-content;
  }
`
const Wrapper = styled.div`
margin:0 auto;
width:90vw;
background: radial-gradient(44.25% 42.34% at 50% 43.38%, #FFD337  39.1%, rgba(255, 255, 255, 0.00) 103%);
/* background: radial-gradient(from 180deg at 50.00% 50.00%, #FFD337 0deg, #FFD337 360deg); */

`