import React from 'react';
import './verticalLine.css';

export default class VerticalLine extends React.Component {
	constructor(props){
		super(props);
		console.log(props)
		this.id = 'asdf';
	}
	componentDidMount(){
		console.log(this.props.refs)
	}

	render(){
		let str = `${this.props.childRef}`;
		return (
			<div className="verticalLine" ref={this.props.setRef} >{str}</div>
		)
	}
	
}