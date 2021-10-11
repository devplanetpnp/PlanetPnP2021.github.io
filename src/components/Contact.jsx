import React from "react";

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

function Contact() {
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
         <p> 
            Please reach out to Michael at micthetraveler@gmail.com 
            <br/>
            <br/>
            Head Quarters:
            <br/> 
            San Francisco CA, USA
            <br/>
            <br/>
            
            International Offices: 
            <br/>
            Shanghai China
            <br/>
            Sidney Australia
            <br/>
            <br/>
            
            Social Media:
            <br/>
            Facebook, www.facebook.com/planetpnp 
            <br/>
            Instagram, www.instagram.com/planetpnp 
            <br/>
            Twitter, @planetpnp 
         </p>
         </Column1>
       </Row>
     </Container>
     <Footer />
   </Box>

 </Router>
  );
}

export default Contact;