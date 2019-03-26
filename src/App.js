import React, { Component } from 'react';
import Main from './components/Main/Main';
import './App.css';

class App extends Component {
  
  state={
    name: "Anupam",
    toggle: true
  }

  buttonClickHandler = () => {
    this.setState((prevState) => {
      return{
        name : `${prevState.name}U`,
        toggle: !prevState.toggle
      }
    });
  }
  
  render() {
    return (
      <div className="App">
        <header>
          {/* <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        </header>
        {
          this.state.toggle && <Main name={this.state.name}/>
        }        
        <button onClick={this.buttonClickHandler.bind(this)}>
          Change Parent App.js NAME
        </button>
      </div>
    );
  }
}

export default App;
