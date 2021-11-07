import React from 'react';
import './App.css';

const Buttons = (props) => {
	return (
		<div className="buttons">
			<div className="row1">
				<button
					className="bigButton ac"
					type="button"
					id="clear"
					value="AC"
					onClick={props.clear}
				>
					AC
				</button>
				<button
					className="operator"
					type="button"
					id="add"
					value="+"
					onClick={props.ops}
				>
					+
				</button>
				<button
					className="operator"
					type="button"
					id="subtract"
					value="-"
					onClick={props.ops}
				>
					-
				</button>
			</div>
			<div className="row2">
				<button type="button" id="seven" value="7" onClick={props.num}>
					7
				</button>
				<button type="button" id="eight" value="8" onClick={props.num}>
					8
				</button>
				<button type="button" id="nine" value="9" onClick={props.num}>
					9
				</button>
				<button
					className="operator"
					type="button"
					id="multiply"
					value="*"
					onClick={props.ops}
				>
					x
				</button>
			</div>
			<div className="row3">
				<button type="button" id="four" value="4" onClick={props.num}>
					4
				</button>
				<button type="button" id="five" value="5" onClick={props.num}>
					5
				</button>
				<button type="button" id="six" value="6" onClick={props.num}>
					6
				</button>

				<button
					className="operator"
					type="button"
					id="divide"
					value="/"
					onClick={props.ops}
				>
					/
				</button>
			</div>
			<div className="row4">
				<button type="button" id="one" value="1" onClick={props.num}>
					1
				</button>
				<button type="button" id="two" value="2" onClick={props.num}>
					2
				</button>
				<button type="button" id="three" value="3" onClick={props.num}>
					3
				</button>
				<button
					className="equals"
					type="button"
					id="equals"
					value="="
					onClick={props.evaluate}
				>
					=
				</button>
			</div>
			<div className="row5">
				<button
					className="bigButton"
					type="button"
					id="zero"
					value="0"
					onClick={props.num}
				>
					0
				</button>
				<button type="button" id="decimal" value="." onClick={props.dec}>
					.
				</button>
			</div>
		</div>
	);
};

export default Buttons;
