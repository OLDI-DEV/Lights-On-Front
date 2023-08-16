
import styled from 'styled-components'
import cubeImg from '../assets/images/cube-Purpose.png'


const Purpose = () => {
  return (
    <PurposeWrapper>
      <PurposeContainer>
        <PurposeText>
          Наша цель - предоставить каждому возможность воспользоваться преимуществами самых передовых технологий, представленных на рынке.
        </PurposeText>
        <CubeImg
          src={cubeImg}
        />
      </PurposeContainer>
    </PurposeWrapper>
  )
}



export default Purpose;

const CubeImg = styled.img`
position:absolute;
right:0;
top:-135px;
@media screen and (max-width: 1000px) {
width:250px;

  }
@media screen and (max-width: 780px) {
width:200px;

  }
@media screen and (max-width: 650px) {
width:150px;
top:-80px;
  }
`

const PurposeText = styled.div`
/* color: #fff; */
font-family: 'Montserrat' , sans-serif;
font-size: 37px;
font-style: normal;
font-weight: 500;
line-height: 52px; 
letter-spacing: -0.74px;
max-width:900px;
padding:0px 16px;
background: #FFFFFF;
  background: linear-gradient(to right, #FFFFFF 0%, #5AC773 12%, #5AC773 47%, #FFFFFF 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
@media screen and (max-width: 1000px) {
text-align:center;
  }

@media screen and (max-width: 780px) {
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 52px; 
  letter-spacing: -0.48px;
}
@media screen and (max-width: 650px) {
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 36px; 
letter-spacing: -0.36px;
}
`
const PurposeContainer = styled.div`
max-width:1240px;
margin:0 auto;
padding:30px 16px 0px;
padding:166px 0;
position:relative;
@media screen and (max-width: 780px) {
  padding:54px 0;
}

`
const PurposeWrapper = styled.div`
width:100%;
background-color: #000B28;
margin-top: 230px;
@media screen and (max-width: 480px) {
  margin-top: 150px;
}
`

