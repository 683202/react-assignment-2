import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ValidationComponent from './component/validationComponent';
import CharComponent from './component/charComponent';

class App extends Component {
  state = {
    text: ''
  };

  changeInputHandler = (event) => {
    this.setState({
      length: event.target.value.length,
      text: event.target.value
    });
  }

  clickHandler = (index) => {
    let newText = [...this.state.text];
    newText.splice(index, 1);
      this.setState({
        text: newText.join('')
      });
  }

  render() {
    let inputLength = null;
    this.state.length > 0 ? inputLength = this.state.length : inputLength = null;

    let charComponents = [...this.state.text].map((char, index) => 
      <CharComponent 
        character={char} 
        click={this.clickHandler.bind(this, index)}
      />);

    return (
      <div className="App">
        This is the second assignment.
        <div>
          <hr />
          <input type="text" onChange = { (event) => this.changeInputHandler(event) }></input>
          <br></br>
          {inputLength}
          <ValidationComponent textLength = { this.state.text.length }/>
          <br></br>
          {charComponents}
        </div>
      </div>
    );
  }
}

export default App;
