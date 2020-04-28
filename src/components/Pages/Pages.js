import React from 'react';
import AboutUs from './AboutUs';
import Projects from './Projects'
import Home from './Home';

const Pages = (props) => {
  if (props.current === 'Home') {
    return <Home/>;
  } else if (props.current === 'Projects') {
    return <Projects/>
  } else {
    return <AboutUs/>
  }
};

export default Pages;