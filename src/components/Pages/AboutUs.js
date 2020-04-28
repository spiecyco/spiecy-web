import React from 'react';
import PageHeader from "../PageHeader/PageHeader";
import ProfileList from "../Profiles/ProfileList/ProfileList";

const AboutUs = (props) => {
  return (
    <div>
      <PageHeader>About Us</PageHeader>
      <ProfileList/>
    </div>
  )
};

export default AboutUs;