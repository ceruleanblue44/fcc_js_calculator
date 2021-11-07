import React from 'react';
import './App.css';

const Output = (props) => {
	return (
		<div className="displayAndExpr">
			<div id="display" className="outputDisplay">
				{props.currentNum}
			</div>
			{/* <h4>Expression:</h4> */}
			<div className="exprDisplay">{props.expression}</div>
		</div>
	);
};

export default Output;
