import React from 'react';
import AboutUs from './AboutUs';
import Projects from './Projects'
import Home from './Home';

const Pages = (props) => {
  if (props.current === 'Home') {
    return <Home clicked={props.clicked}/>;
  } else if (props.current === 'Projects') {
    return <Projects clicked={props.clicked}/>
  } else {
    return <AboutUs clicked={props.clicked}/>
  }
};

export default Pages;