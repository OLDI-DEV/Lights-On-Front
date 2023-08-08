import problemDescriptionImg from '../assets/images/problem-description.svg'
import problemDecisionImg from '../assets/images/decision-problem.svg'
import updateImg from '../assets/images/update.svg'
import arrowFirst from '../assets/images/arrow1.svg'
import arrowSecond from '../assets/images/arrow2.svg'
import upArrowImg from '../assets/images/up-arrow.svg'
import downArrowImg from '../assets/images/down-arrow.svg'
import mobileArrowUpImg from '../assets/images/mobile-aroow-up.svg'
import mobileArrowDownImg from '../assets/images/mobile-aroow-down.svg'
import styled from 'styled-components'



const WorkDescription = () => {
  return (

    <WorkDescriptionContainer>
      <WorkDescriptionTitle>
        Как мы работаем?
      </WorkDescriptionTitle>
      <WorkDescriptionItems>
        <div style={{ display: 'flex', gap: '10px' }}>
          <DescriptionItemContainer>
            <ItemBox>
              <ItemImg
                src={problemDescriptionImg}
              />
            </ItemBox>
            <ItemText>
              Описать
              проблему
            </ItemText>
          </DescriptionItemContainer>
          <UpArrowImg
            src={upArrowImg}
          />
        </div>
        <MobileArrow
          src={mobileArrowUpImg}
        />


        <FirstArrowImg
          src={arrowFirst}
        />



        <DevItemContainer>
          <ItemBox>
            <ItemImg
              src={problemDecisionImg}
            />
          </ItemBox>
          <ItemText>
            Разработать
            решение
          </ItemText>
        </DevItemContainer>
        <MobileArrow
          src={mobileArrowDownImg}
        />

        <SecondArrowImg
          src={arrowSecond}
        />


        <div style={{ display: 'flex', gap: '10px' }}>
          <UpdateItemContainer>
            <ItemBox>
              <ItemImg
                src={updateImg}
              />
            </ItemBox>
            <ItemText>
              Улучшить
            </ItemText>

          </UpdateItemContainer>
          <DownArrowImg
            src={downArrowImg}
          />
        </div>

      </WorkDescriptionItems>






    </WorkDescriptionContainer>
  )
}

export default WorkDescription;




const MobileArrow = styled.img`
display:none;  
@media screen and (max-width: 650px) {
  display:block;
}

`

const UpdateItemContainer = styled.div`
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

const DevItemContainer = styled.div`
border-radius: 30px;
background: #F7F6FB;
width: 180px;
height: 218px;
padding:24px 42px;
display: flex;
flex-direction:column;
justify-content: space-between;
align-items: center;
  @media screen and (max-width: 1000px) {
  margin-left:390px;

}
  @media screen and (max-width: 650px) {
  margin-left:unset;
  }
`

const DescriptionItemContainer = styled.div`
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

const DownArrowImg = styled.img`
padding:0px 5px;
display: none;  
@media screen and (max-width: 1000px) {
display:block;
width:200px;
  @media screen and (max-width: 650px) {
display:none;
  }
}
`
const UpArrowImg = styled.img`
padding:0px 5px;
display: none;
@media screen and (max-width: 1000px) {
  display:block;
  width:200px;
}
  @media screen and (max-width: 650px) {
display:none;
  }
`

const FirstArrowImg = styled.img`
margin-bottom: 200px;
padding:5px;
  @media screen and (max-width: 1300px) {
    overflow: hidden;
    width:320px;
  }
  @media screen and (max-width: 1000px) {
  display:none;
  }
`
const SecondArrowImg = styled.img`
margin-top: 200px;
padding:5px;
  @media screen and (max-width: 1300px) {
    overflow: hidden;
    width:320px;
  }
    @media screen and (max-width: 1000px) {
    display:none;
  }

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

const WorkDescriptionItems = styled.div`
display: flex;
justify-content: space-between;
margin-top: 60px;
padding:0 16px;
  @media screen and (max-width: 1000px) {
  flex-direction:row;
flex-wrap:wrap;
justify-content: center;
  }
  @media screen and (max-width: 650px) {
  flex-direction:column;
  justify-content: center;
  }
    @media screen and (max-width: 650px) {
  align-items: center;
  gap:24px;
}
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
@media screen and (max-width: 780px) {
font-size: 36px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: -0.72px;
}
@media screen and (max-width: 650px) {
font-size: 28px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: -0.56px;
}
`

const WorkDescriptionContainer = styled.div`
  width:100%;
  margin-top:80px;
  flex-direction:column;
  @media screen and (max-width: 650px) {

  margin-top:60px;
}

`