import React, { Component } from 'react';
import './App.css';
import VerticalLineShell from './components/verticalLineShell';
import HorizontalLineShell from './components/horizontalLineShell';
class App extends Component {
  constructor(props){
    super(props);
    this.counter = 0;
    this.refArray = [];
    this.showButtonHandler = this.showButtonHandler.bind(this);
    this.showButton = this.showButton.bind(this);
    this.showButton2 = this.showButton2.bind(this);
    this.state = {
      buttonStyle: {visibility:'visible'},
      buttonStyle2: {visibility:'visible'}
    }
  }
  showButtonHandler (){
    this.setState({buttonStyle: {visibility:'hidden'}})
    this.vert.showButtonHandler(this.showButton)

  }
  showButton (){
     this.setState({buttonStyle: {visibility:'visible'}})
  }
  horizButtonHandler (){
    this.setState({buttonStyle2: {visibility:'hidden'}})
    this.horiz.showButtonHandler(this.showButton2)
  }
  showButton2 (){
     this.setState({buttonStyle2: {visibility:'visible'}})
  }
  render() {
    return (
      <div className="App">
      <VerticalLineShell ref={item => this.vert = item} />
      <HorizontalLineShell ref={item => this.horiz = item} />
        <header className="App-header">
          <button className="button" onClick={() => this.showButtonHandler()} style={this.state.buttonStyle}>vertical lines</button>
          <button className="button" onClick={() => this.horizButtonHandler()} style={this.state.buttonStyle2}>horizontal lines</button>
        </header>
        {this.newArr}
      </div>
    );
  }
}

export default App;
