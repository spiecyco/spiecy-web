import React from 'react';
import PageHeader from "../PageHeader/PageHeader";
import ProfileList from "../Profiles/ProfileList/ProfileList";
import NavBar from "../NavBar/NavBar";

const AboutUs = (props) => {
  return (
    <div>
      <NavBar buttonClicked={props.clicked}/>
      <PageHeader>About Us</PageHeader>
      <ProfileList/>
    </div>
  )
};

export default AboutUs;