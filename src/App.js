import React, { Component } from 'react';
import './App.css';
import VerticalLine from './components/verticalLine';
import animation from './animation';

let vlsRefs = ['line 1', 'line 2', 'line 3'];




class App extends Component {
  constructor(props){
    super(props)
    this.newArr = vlsRefs.map( (item, i) => {
        return (<VerticalLine className="blue" setRef={ this.setRef(item) } key={i} /> )
    } )
    this.showButtonHandler = this.showButtonHandler.bind(this);
    this.showButtonHandler = this.showButtonHandler_2.bind(this);
    this.setRef = this.setRef.bind(this);
  }
  setRef(div) {
      this.childDiv = div;
  }
  showButtonHandler (){
    animation.hide(this.childDiv)
  }
  showButtonHandler_2 (){
    // console.log('click', this['line 1'])
    console.log(this)
    animation.hide(this['line 1'])
  }
  componentDidMount () {
     //console.log('get the child ref',this.child.refs);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={() => this.showButtonHandler()}>affect child</button>
          <button onClick={() => this.showButtonHandler_2()} >affect child via component</button>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <VerticalLine setRef={this.setRef} />

      </div>
    );
  }
}

export default App;
