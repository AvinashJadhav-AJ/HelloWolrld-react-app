import './App.css';
import React from 'react';
import logo from './images/logo.jpg'
class App extends React.Component {

 // url = ""

  constructor(){
    super()
    this.state = {
      title : "Hello World from Avinash Jadhav"
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <img src={logo} alt=""></img>
      </div>
    );
  }
}

export default App;