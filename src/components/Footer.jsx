import React from "react";
import logosize from './images/DownloadApp.jpg';

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
    BoxFooter,
    ContainerFooter,
    RowFooter,
    RowFooter1,
    ColumnFooter,
    HeadingFooter,
    HeadingFooter1,
    HeadingFooter2,
    HeadingFooter3,
    HeadingFooter4,
    InputBoxFooter,
    StartButtonFooter,
    ImgagingFooter,
    FooterLink
  } from "./FooterStyles";


function Footer() {
  return (
    <BoxFooter>
    <ContainerFooter>
    <RowFooter>
      <ColumnFooter>
       <ImgagingFooter src={logosize} alt="Download" />
      </ColumnFooter>
      <ColumnFooter>
        <HeadingFooter>
           Wander Wisely with the PlanetPnP app
        </HeadingFooter>
        <HeadingFooter1>
                &bull; Get helpful alerts about your trips
                <br/>
                &bull; Access all your travel details, even when offline
                <br/> 
                &bull; Easily contact your tour guide by messaging them right in the app
         </HeadingFooter1>
         <HeadingFooter2>
         Email yourself a download link
        </HeadingFooter2>
        <InputBoxFooter type="text" />
        <StartButtonFooter>Get the app</StartButtonFooter>
      </ColumnFooter>
    </RowFooter>
    <RowFooter1>
      <ColumnFooter>
        <HeadingFooter3>
            Company
        </HeadingFooter3>
      </ColumnFooter>
      <ColumnFooter>
        <HeadingFooter3>
            Explore
        </HeadingFooter3>
      </ColumnFooter>
      <ColumnFooter>
        <HeadingFooter3>
            Policies
        </HeadingFooter3>
      </ColumnFooter>
      <ColumnFooter>
        <HeadingFooter3>
            Help
        </HeadingFooter3>
      </ColumnFooter>
    </RowFooter1>
    <RowFooter1>
      <ColumnFooter>
        <FooterLink href=''>
            About
        </FooterLink>
      </ColumnFooter>
      <ColumnFooter>
        <FooterLink href=''>
            Most Popular Trips Worldwide
        </FooterLink>
      </ColumnFooter>
      <ColumnFooter>
        <FooterLink href=''>
            Private Policy
        </FooterLink>
      </ColumnFooter>
      <ColumnFooter>
        <FooterLink href=''>
            Support
        </FooterLink>
      </ColumnFooter>
    </RowFooter1>
    <RowFooter1>
      <ColumnFooter>
        <FooterLink href=''>
            Jobs
        </FooterLink>
      </ColumnFooter>
      <ColumnFooter>
        <FooterLink href=''>
            Travel Blog
        </FooterLink>
      </ColumnFooter>
      <ColumnFooter>
        <FooterLink href=''>
            Terms Of Use
        </FooterLink>
      </ColumnFooter>
      <ColumnFooter>
        <FooterLink href=''>
            File a Claim
        </FooterLink>
      </ColumnFooter>
    </RowFooter1>
    <RowFooter1>
      <ColumnFooter>
        <FooterLink href=''>
            Investor Relations
        </FooterLink>
      </ColumnFooter>
      <ColumnFooter>
        <FooterLink href=''>
            Most Popular Guides Of the Month
        </FooterLink>
      </ColumnFooter>
      <ColumnFooter>
        <FooterLink href=''>
            Accessibility
        </FooterLink>
      </ColumnFooter>
      <ColumnFooter>
        <FooterLink href=''>
            Cancel Your Trip
        </FooterLink>
      </ColumnFooter>
    </RowFooter1>
    <RowFooter1>
      <ColumnFooter>
        <FooterLink href=''>
            Partnerships
        </FooterLink>
      </ColumnFooter>
      <ColumnFooter>
        <FooterLink href=''>
            Unique Places
        </FooterLink>
      </ColumnFooter>
      <ColumnFooter>
        <FooterLink href=''>
        </FooterLink>
      </ColumnFooter>
      <ColumnFooter>
        <FooterLink href=''>
            Refund
        </FooterLink>
      </ColumnFooter>
    </RowFooter1>
  </ContainerFooter>
  <HeadingFooter4><hr size="1px" width="100%" color="grey"></hr></HeadingFooter4>
  <HeadingFooter4>© 2021 PlanetPnP LLC, an Traval Group Company. All rights reserved.</HeadingFooter4>
  </BoxFooter>

  );
}

export default Footer;