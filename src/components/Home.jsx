import React from "react";
import logo from './images/test.webp';
import Footer from "./Footer";

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect
  } from "react-router-dom";

import {
    Box,
    Container,
    Row,
    Column,
    Column1,
    FooterLink,
    Heading,
    Imgaging,
    StartButton,
    InputBox,
  } from "./HomeStyles";

function Home() {
  return (
    <Router>
        <Box>
        <Container>
          <Row>
            <Column>
              <Heading>====</Heading>
              <Heading>Find your next perfect trip</Heading>
              <InputBox type="text" />
              <InputBox type="text" />
              <StartButton>Search</StartButton>
            </Column>
            <Column1>
              <Imgaging src={logo}></Imgaging>
            </Column1>
          </Row>
        </Container>
        <Footer />
      </Box>
    </Router>
  );
}

export default Home;