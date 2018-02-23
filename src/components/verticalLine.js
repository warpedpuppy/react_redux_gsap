import React from 'react';
import './verticalLine.css';

export default class VerticalLine extends React.Component {
	constructor(props){
		super(props);
		console.log(props)
	}
	render(){
		return (
			<div className="verticalLine" ref={this.props.setRef} ></div>
		)
	}
	
}