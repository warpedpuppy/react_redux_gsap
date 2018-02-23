import React from 'react';
import './horizontalLine.css';

export default class HorizontalLine extends React.Component {
	constructor(props){
		super(props);
		console.log(props)
	}
	render(){
		return (
			<div className="horizontalLine" ref={this.props.setRef} ></div>
		)
	}
	
}