import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { resize } from '../../actions';
import { WindowResizeListener } from 'react-window-resize-listener';

let Resizer = ({ dispatch }) => {

return (

		 <WindowResizeListener onResize={windowSize => {
		 		if(document.getElementById('homeCanvas')){


					dispatch(
						resize(
							windowSize.windowWidth, 
							windowSize.windowHeight,  
							document.getElementById('homeCanvas').offsetWidth, 
							document.getElementById('homeCanvas').offsetHeight
						)
					)
		 		}

			}}/>
	)
}


Resizer = connect()(Resizer)

export default Resizer;