import { useState } from 'react'
import styled from 'styled-components'
import './App.css'
import Header from './components/Header'
import Technology from './components/Technology'
import PhoneBlock from './components/PhoneBlock'
import Services from './components/Services'
import Purpose from './components/Purpose'
import WorkDescription from './components/WorkDescription'
import Registration from './components/Registration'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Container>
        <Header />
        <Technology />
      </Container>
      <PhoneBlock />
      <Container>
        <Services />
      </Container>
      <Purpose />
      <Container>
        <WorkDescription />
        <Registration />
        <Footer />
      </Container>

    </>
  )
}

export default App

const Container = styled.div`
max-width:1240px;
margin:0 auto;
padding:30px 16px 0px;
display: flex;
flex-direction:column;

`
