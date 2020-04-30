import React, { Component } from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import Pages from "./components/Pages/Pages";


class App extends Component {
  state = {
    page: 'About Us'
  };

  clickedHandler = {
    home: () => {
      this.setState({ page: 'Home' });
    },
    projects: () => {
      this.setState({ page: 'Projects' });
    },
    aboutUs: () => {
      this.setState({ page: 'About us' });
    }
  };

  render() {
    return (
      <div className="App">
        <Pages clicked={this.clickedHandler} current={this.state.page}/>

      </div>
    );
  }
}

export default App;