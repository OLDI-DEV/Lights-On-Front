import problemDescriptionImg from '../assets/images/problem-description.svg'
import problemDecisionImg from '../assets/images/decision-problem.svg'
import updateImg from '../assets/images/update.svg'
import arrowFirst from '../assets/images/arrow1.svg'
import arrowSecond from '../assets/images/arrow2.svg'
import styled from 'styled-components'



const WorkDescription = () => {
  return (

    <WorkDescriptionContainer>
      <WorkDescriptionTitle>
        Как мы работаем?
      </WorkDescriptionTitle>
      <WorkDescriptionItems>
        <ItemContainer>
          <ItemBox>
            <ItemImg
              src={problemDescriptionImg}
            />
          </ItemBox>
          <ItemText>
            Описать
            проблему
          </ItemText>
        </ItemContainer>
        <FirstArrowImg
          src={arrowFirst}
        />
        <ItemContainer>
          <ItemBox>
            <ItemImg
              src={problemDecisionImg}
            />
          </ItemBox>
          <ItemText>
            Разработать
            решение
          </ItemText>
        </ItemContainer>


        <SecondArrowImg
          src={arrowSecond}
        />

        
        <ItemContainer>
          <ItemBox>
            <ItemImg
              src={updateImg}
            />
          </ItemBox>
          <ItemText>
            Улучшить
          </ItemText>
        </ItemContainer>
      </WorkDescriptionItems>





      
    </WorkDescriptionContainer>
  )
}

export default WorkDescription;

const FirstArrowImg = styled.img`
margin-bottom: 200px;

`
const SecondArrowImg = styled.img`
margin-top: 200px;
`
const ItemImg = styled.img`

`


const ItemText = styled.div`
color: #000;
text-align: center;
font-family: 'Montserrat' , sans-serif;
font-size: 25px;
font-style: normal;
font-weight: 700;
line-height: normal;
width:200px;

`
const ItemBox = styled.div`
border-radius: 20px;
background: #FFF;
box-shadow: 0px 15px 20px 0px rgba(52, 199, 89, 0.05);
width: 130px;
height: 130px;
display: flex;
justify-content: center;
align-items: center;
`
const ItemContainer = styled.div`
border-radius: 30px;
background: #F7F6FB;
width: 180px;
height: 218px;
padding:24px 42px;
display: flex;
flex-direction:column;
justify-content: space-between;
align-items: center;

`
const WorkDescriptionItems = styled.div`
display: flex;
justify-content: space-between;
margin-top: 60px;
`

const WorkDescriptionTitle = styled.div`
color: #000;
text-align: center;
font-family: 'Montserrat' , sans-serif;
font-size: 56px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: -1.12px;
`

const WorkDescriptionContainer = styled.div`
  width:100%;
  margin-top:80px;
  flex-direction:column;
`