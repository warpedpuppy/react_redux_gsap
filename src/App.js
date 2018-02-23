import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import VerticalLine from './components/verticalLine';
import animation from './animation';

let vlsRefs = ['line 1'];




class App extends Component {
  constructor(props){
    super(props)
    this.childDiv;
    this.newArr = vlsRefs.map( (item, i) => {
        console.log(item)
        return <div className="blue" ref={i => this[item] = i} key={i}>div</div> //works
    } )
    this.showButtonHandler = this.showButtonHandler.bind(this);
    this.setRef = this.setRef.bind(this);
  }
  setRef(div, str) {
        this.childDiv = div;
    }
  showButtonHandler (){
    // console.log('click', this['line 1'])
    //console.log(this['line 1'])
    animation.hide(this['line 1'])
  }
  showButtonHandler_2 (){
    // console.log('click', this['line 1'])
    //console.log(this['line 1'])
    animation.hide(this.childDiv)
  }
  componentDidMount () {
     //console.log('get the child ref',this.child.refs);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <button onClick={() => this.showButtonHandler()}>affect child</button>
          <button onClick={() => this.showButtonHandler_2()}>affect child component</button>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <VerticalLine setRef={this.setRef} />
        {this.newArr}
      </div>
    );
  }
}

export default App;
