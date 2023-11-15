
import styled from 'styled-components'
import OneCImg from '../assets/images/1c-logo.svg'
import CloudImg from '../assets/images/cloud-logo.svg'
import ItImg from '../assets/images/it-logo.svg'
import ManagementImg from '../assets/images/management-logo.svg'
import ProjectImg from '../assets/images/project-logo.svg'
import StrategyImg from '../assets/images/strategy-logo.svg'


const Services = () => {
  return (
    <>
      <ServiceTitle id="services">Услуги</ServiceTitle>
      <ServicesContainer>
        <ServicesItems>
          <ServiceItem>
            <ServiceImg src={OneCImg} />
            <ServiceItemTitle>1С Интеграция</ServiceItemTitle>
            <ServiceItemDescription>
              <ServiceDescriptionList>
                <DescriptionLi>
                  Интегрируем 1С с сайтом и перенесём данные.
                </DescriptionLi>
                <DescriptionLi>
                  Настроим интеграцию 1С со сторонними приложениями.
                </DescriptionLi>
                <DescriptionLi>
                  Обеспечим правильный обмен данных между программами 1С.
                </DescriptionLi>
              </ServiceDescriptionList>
            </ServiceItemDescription>
          </ServiceItem>
          <ServiceItem>
            <ServiceImg src={CloudImg} />
            <ServiceItemTitle>
              Облачные решения и виртуализация
            </ServiceItemTitle>
            <ServiceItemDescription>
              <ServiceDescription>
                Комплексные облачные решения, адаптированные к вашим конкретным
                требованиям, позволяющие безопасно хранить данные и получать к
                ним доступ из любого места и в любое время. Поможем вам
                перенести существующую инфраструктуру в облако, оптимизировать
                ресурсы и внедрить технологии виртуализации .
              </ServiceDescription>
            </ServiceItemDescription>
          </ServiceItem>
          <ServiceItem>
            <ServiceImg src={ItImg} />
            <ServiceItemTitle>IT-безопасность</ServiceItemTitle>
            <ServiceItemDescription>
              <ServiceDescription>
                Защита конфиденциальных данных и обеспечение соответствия
                нормативным требованиям имеют первостепенное значение в
                современном цифровом ландшафте. Проведём тщательную оценку ваших
                систем, выявим уязвимости и примем надежные меры для защиты
                вашей организации от киберугроз.
              </ServiceDescription>
            </ServiceItemDescription>
          </ServiceItem>
          <ServiceItem>
            <ServiceImg src={ManagementImg} />
            <ServiceItemTitle>Управление</ServiceItemTitle>
            <ServiceItemDescription>
              <ServiceDescription>
                Позвольте нам позаботиться о ваших повседневных IT-потребностях,
                чтобы вы могли сосредоточиться на основной деятельности. Наши
                услуги включают упреждающий мониторинг, устранение неполадок,
                управление исправлениями и всестороннюю техническую поддержку.
              </ServiceDescription>
            </ServiceItemDescription>
          </ServiceItem>
          <ServiceItem>
            <ServiceImg src={StrategyImg} />
            <ServiceItemTitle>Консалтинг и стратегия</ServiceItemTitle>
            <ServiceItemDescription>
              <ServiceDescription>
                Будьте на шаг впереди благодаря нашим услугам IT-консалтинга.
                Предоставим ценную информацию и порекомендуем инновационные
                технологии, которые помогут вам получить конкурентное
                преимущество в вашей отрасли.
              </ServiceDescription>
            </ServiceItemDescription>
          </ServiceItem>
          <ServiceItem>
            <ServiceImg style={{ height: "91px" }} src={ProjectImg} />
            <ServiceItemTitle>Проектирование</ServiceItemTitle>
            <ServiceItemDescription>
              <ServiceDescription>
                Оценим потребности вашей организации и спроектируем надежную
                сетевую инфраструктуру, обеспечивающую бесперебойную связь и
                оптимальную производительность. Возьмем на себя установку и
                настройку всех необходимых аппаратных и программных компонентов,
                обеспечив безопасную и эффективную настройку сети.
              </ServiceDescription>
            </ServiceItemDescription>
          </ServiceItem>
        </ServicesItems>
      </ServicesContainer>
    </>
  );
}

export default Services;

const ServiceDescription = styled.div`
color: #4F4F4F;
font-family: 'Montserrat' , sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 150%;
margin-top: 16px;
`
const ServicesItems = styled.div`
display: flex;
flex-flow:row wrap;
justify-content: space-between;
gap:45px;
    @media screen and (max-width: 1200px) {
      justify-content: center;
  }
    @media screen and (max-width: 780px) {
     gap:40px;
  }
`
const ServiceDescriptionList = styled.ul`
margin:0px;
padding:0px;
margin-top:16px;
`

const DescriptionLi = styled.li`
color: #4F4F4F;
font-family: 'Montserrat' , sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 150%;
margin-left:20px;
`

const ServiceItemDescription = styled.div`
color: #4F4F4F;
font-family: 'Montserrat' , sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 150%; 
  @media screen and (max-width: 780px) {
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 150%;
    @media screen and (max-width: 400px) {
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 150%;
  }
}
`

const ServiceItemTitle = styled.div`
font-family: 'Montserrat' , sans-serif;
color: #000;
width:100%;
font-size: 25px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-top: 4px;
  @media screen and (max-width: 780px) {
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
    @media screen and (max-width: 720px) {
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  justify-content: center;
  }
}
`


const ServiceImg = styled.img`
display: flex;
flex-direction: column;
width:100px;
height:90px;
margin-left: -22px;
  @media screen and (max-width: 720px) {
  align-self:center;
}
`
const ServiceItem = styled.div`
display: flex;
flex-direction: column;
max-width: 295px;
height: 400px;
padding:32px;
border-top: 4px solid #FFF;
  @media screen and (max-width: 800px) {
  max-width: 260px;
}

&:hover{
border-radius: 0px 0px 40px 40px;
border-top: 4px solid #0371FF;
background: #FFF;
box-shadow: 0px 15px 30px 0px rgba(0, 0, 0, 0.08);

}

`

const ServiceTitle = styled.div`
color: #000;
text-align: center;
font-family: 'Montserrat' , sans-serif;
font-size: 56px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: -1.12px;
align-self:center;
margin-bottom: 60px;
width:100%;
display: flex;
justify-content: center;
align-items: center;
margin-top: 100px;
  @media screen and (max-width: 780px) {
font-size: 36px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: -0.72px;
margin-top: 30px;
margin-bottom: 30px;
}




`

const ServicesContainer = styled.div`
display: flex;
flex-direction: column;


`