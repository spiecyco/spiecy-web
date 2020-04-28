import React from "react";
import styled from "styled-components";
import PROFILES from "../AllProfiles"
import Profile from "./Profile/Profile";

const Container = styled.div`
  text-align: center;
  height: auto;
`;

const ProfileList = (props) => {
  const list = PROFILES.map((prof, index) => {
    return <Profile name={prof.name} bio={prof.bio} src={prof.src} index={index}/>
  })
  return (
    <Container>
      {list}
    </Container>
  )
}

export default ProfileList;
