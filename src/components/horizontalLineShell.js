import React from 'react';
import './horizontalLineShell.css';
import animation from '../animation';
import HorizontalLine from './horizontalLine';


let vlsRefs = ['line 1', 'line 2', 'line 3', 'line 4', 'line 5', 'line 6','line 7', 'line 8', 'line 9',];


export default class HorizontalLineShell extends React.Component {
	constructor(props){
		super(props);
		this.refArray = [];
		this.newArr = [vlsRefs.map( (item, i) => {
            let ref = `childDivNew ${i}`;
            this.refArray.push(ref)
            return (<HorizontalLine className="blue" setRef={ (div) => this[ref] = div } key={i} /> )
        } )]
        this.showButtonHandler = this.showButtonHandler.bind(this)
	}
	showButtonHandler (cb) {
	  let tempArr = [];
	  for (let i = 0; i < this.refArray.length; i++) {
	    tempArr.push(this[this.refArray[i]])
	  }
	  animation.staggerLeave(tempArr, cb)
	}
	render(){
		return (
			<div className='horizShell'>
				{this.newArr}
			</div>
		)
	}
	
}