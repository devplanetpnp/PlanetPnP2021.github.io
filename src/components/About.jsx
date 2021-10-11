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

function About()  {
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
            <p> We’re building a community for travelers to grow relationships with regional guides. We are a tour guide in your pocket. When people travel we enjoy learning about new cultures. Some people thrive on exploration, yet they also want the opportunity to try their own type of food, art, music…. So we realize there is a gap, we need a channel to bridge that gap, to match a tourist and a guide with similar backgrounds. 
    
    Many people find it difficult to find the best places to visit. Places that are not readily found by an internet search engine. And some of the biggest problems tourism faces is finding guides that; 1) speak a common language, 2) understand the individual culture and what the client wishes to see/hear, and 3) where to focus their attention thereby saving time and money. 
    
    By bridging this cultural disconnect and matching enthusiastic guides with tourists, we enhance the traveling experience for both the visitor and the guide. Why sit on a bus for hours with dozens of strangers when you can have a customized a private tour around the globe?
    
    How PlanetPnP Works: 
    The application is a free download. The guide pays fees equivalent to a percentage per each booking, similar to Lyft, Uber, DoorDash... We’ve created bundles of destinations for economy travelers. Our founders have firsthand experience facing the challenges with cultural divide. And have enthusiastically created a solution. What makes us different? To connect the middle man and close the gap.
    
    Vision:
    After these unique times, traveling will become the new normal around the globe. People are eager to go out, and the travel flood gates are about to open. We’re building a community for travelers to grow relationships with regional guides and diminish geographical distances. We are a tour guide in your pocket. 
    
    Investment: 
    We are looking for qualified investors that would enjoy working with us. Please reach out to Michael at micthetraveler@gmail.com
    
    
    Become a Guide:
    We have two types of users; guides and travelers. 
    Guides: creating job opportunities in the gig economy, fostering independence, a new life style and future career opportunity, taking care of family needs, flexible schedules… Whether you’d like to grow a full time self-employed business. Or use this as a side gig, we will help you grow independence and flexibility.  
    Travelers: people who seek the unique experience in far off lands. People attracted to different cultures. Families wishing to bond in exotic locations. Individuals and couples seeking insight to native culture. Students on holiday, history buffs, art galleries, music venues, foodies, shopping, golf, etc.… 
    
    Whether you’d like to grow a full time self-employed business. Or use this as a side gig, we will help you grow independence and flexibility.  
    
    File a Claim:
    Please reach out to Michael at micthetraveler@gmail.com
    
    Cancelation Options:
    Please reach out to Michael at micthetraveler@gmail.com
    
   
    
    
    
    
    
    </p>
            </Column1>
          </Row>
        </Container>
        <Footer />
      </Box>
      
    </Router>

  );
}

export default About;