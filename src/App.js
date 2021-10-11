import logo from './components/images/test.webp';
import logosize from './components/images/logosize.svg';


import React, { Component } from "react";
import { useHistory } from "react-router-dom";

import About from "./components/About";
import Home from "./components/Home";


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
} from "./AppStyles";

import {
  BoxHeader,
  ContainerHeader,
  RowHeader,
  ColumnHeader,
  FooterLinkHeader,
  HeadingHeader,
  ImgagingHeader,
  StartButtonHeader,
} from "./components/HeaderStyles";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";



function App()  {
  return (
    
    <Router>
 
       {/*All our Routes goes here!*/}
       {/*<Route exact path="/mainpage" component={MainPage} />*/}
       <Route exact path="/About" component={About} />
       <Route exact path="/" component={Home} />

       <BoxHeader>
        <div><ImgagingHeader src={logosize} alt="logo" /></div>
        <ContainerHeader>
        <RowHeader>
          <ColumnHeader>
            <HeadingHeader href="/">Home</HeadingHeader>
          </ColumnHeader>
          <ColumnHeader>
            <HeadingHeader href="/About">About Us</HeadingHeader>
          </ColumnHeader>
          <ColumnHeader>
            <HeadingHeader>Services</HeadingHeader>
          </ColumnHeader>
          <ColumnHeader>
            <HeadingHeader>Contact Us</HeadingHeader>
          </ColumnHeader>
          <ColumnHeader>
            <HeadingHeader>Social Media</HeadingHeader>
            <FooterLinkHeader href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLinkHeader>
            <FooterLinkHeader href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLinkHeader>
            <FooterLinkHeader href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLinkHeader>
          </ColumnHeader>
          <ColumnHeader><StartButtonHeader>LET's GET STARTED</StartButtonHeader></ColumnHeader>
        </RowHeader>
      </ContainerHeader>

    </BoxHeader>
      
      <Box>
        <Container>
          <Row>
            <Column>
              <Heading>====</Heading>
              <Heading>Find yur next perfect trip</Heading>
              <InputBox type="text" />
              <InputBox type="text" />
              <StartButton>Search</StartButton>
            </Column>
            <Column1>
              <Imgaging src={logo}></Imgaging>
            </Column1>
          </Row>
        </Container>
      </Box>
    
    </Router>
  );
}

export default App;
