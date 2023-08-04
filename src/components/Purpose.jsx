
import styled from 'styled-components'
import cubeImg from '../assets/images/cube-Purpose.svg'


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
`

const PurposeText = styled.div`
color: #fff;
font-family: 'Montserrat' , sans-serif;
font-size: 37px;
font-style: normal;
font-weight: 500;
line-height: 52px; 
letter-spacing: -0.74px;
width:900px;
`
const PurposeContainer = styled.div`
max-width:1240px;
margin:0 auto;
padding:30px 16px 0px;
padding:166px 0;
position:relative;

`
const PurposeWrapper = styled.div`
width:100%;
background-color: #000B28;
margin-top: 230px;
`

