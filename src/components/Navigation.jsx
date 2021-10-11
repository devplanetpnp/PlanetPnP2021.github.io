import React from "react";

import logosize from './images/logosize.svg';
import About from "./About";
import Home from "./Home";
import Footer from "./Footer";

import { useHistory } from "react-router-dom";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  withRouter,
  Redirect
} from "react-router-dom";


import {
  BoxHeader,
  ContainerHeader,
  RowHeader,
  ColumnHeader,
  HeadingHeader,
  ImgagingHeader,
  StartButtonHeader
} from "./HeaderStyles";

function Navigation(props) {
  return (
    <Router>

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
            <HeadingHeader href="/Service">Services</HeadingHeader>
          </ColumnHeader>
          <ColumnHeader>
            <HeadingHeader href="/Contact">Contact Us</HeadingHeader>
          </ColumnHeader>
          <ColumnHeader><StartButtonHeader>LET's GET STARTED</StartButtonHeader></ColumnHeader>
        </RowHeader>
      </ContainerHeader>
      <Footer />
    </BoxHeader>
    </Router>  
  );
}

export default withRouter(Navigation);