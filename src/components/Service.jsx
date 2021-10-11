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

function Service() {
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
         <p> We utilize open source tools to create an application, including both a web and phone based interface.
             <br/>
             <br/>
             The Minimum Viable Product includes:
             <br/>   
                &bull; Tour guide locator
                <br/>
                &bull; Search features by city and region
                <br/> 
                &bull; Categories and recommended tours for art, music, food, sightseeing, historical events…
                <br/>
                &bull; Payment system, including customer service 
                <br/>
                &bull; Log in through other services such as Google, Facebook, and Twitter. 
                <br/>
                <br/>
                Second and third generation updates to include:
                <br/>
                &bull; A built in one-stop-shop itinerary with sharable calendar
                <br/> 
                &bull; Linking tool to resources such as Expedia, Kayak, and Priceline
                <br/>
                &bull; Push notifications
                <br/> 
                &bull; On-line chat rooms 
                <br/>
                &bull; Bundled destinations for economy travelers
                <br/>
                &bull; Voice messaging for those less technologically inclined
                <br/> 
                &bull; (or people who have big thumbs, or less the optimal eye sight)
                <br/>
                <br/> 
                
                Even more features and benefits to come…
         </p>
         </Column1>
       </Row>
     </Container>
     <Footer />
   </Box>

 </Router>
  );
}

export default Service;