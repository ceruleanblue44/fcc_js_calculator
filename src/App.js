import React from 'react';
import Buttons from './Buttons.js';
import Output from './Output.js';
import './App.css';
// import { evaluate } from 'mathjs';

// eslint-disable-next-line
let validNumRegex = /^0{2,}/;
let endsWithOperator = /[/*+-]$/;
// eslint-disable-next-line
let consecOp = /[/*+]/;

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentNum: '0',
			nextNum: '0',
			expression: String.fromCharCode(160),
		};

		this.allClear = this.allClear.bind(this);
		this.inputNum = this.inputNum.bind(this);
		this.makeDecimal = this.makeDecimal.bind(this);
		this.handleOperators = this.handleOperators.bind(this);
		this.evaluateExpression = this.evaluateExpression.bind(this);
	}

	// Seems like using smth like this is better, as state updates may be asynchronous and you shouldn't rely on their values for calculating the next state:

	// Correct
	// this.setState((state, props) => ({
	//   counter: state.counter + props.increment
	// }));

	// Or use a regular function.

	allClear() {
		this.setState({
			currentNum: '0',
			expression: String.fromCharCode(160),
		});
	}

	inputNum(event) {
		let inputValue = event.target.value;
		let str = this.state.currentNum;
		let expr = this.state.expression;

		if (str === '0') {
			this.setState({
				currentNum: inputValue,
				expression: inputValue === '0' ? expr : expr + inputValue,
			});
		} else if (endsWithOperator.test(expr)) {
			this.setState({
				currentNum: inputValue,
				expression: expr + inputValue,
			});
		} else if (expr.includes('=')) {
			this.setState({
				currentNum: inputValue,
				expression: inputValue,
			});
		} else {
			this.setState({
				currentNum: this.state.currentNum + inputValue,
				expression: this.state.expression + inputValue,
			});
		}
		// console.log(endsWithOperator.test(str));
	}

	makeDecimal() {
		let str = this.state.currentNum;
		let expr = this.state.expression;
		if (endsWithOperator.test(expr) || expr === String.fromCharCode(160)) {
			this.setState({
				currentNum: '0.',
				expression: this.state.expression + '0.',
			});
		} else if (!str.includes('.')) {
			this.setState({
				currentNum: this.state.currentNum + '.',
				expression: this.state.expression + '.',
			});
		}
		// console.log(endsWithOperator.test(expr));
	}

	handleOperators(event) {
		const operator = event.target.value;
		let expr = this.state.expression;
		let indexOfEquals = expr.indexOf('=');
		// console.log(/[/*+-]+/.test(expr));
		// This part handles calculating on the result of the previous calculation
		// Throws an error at double minus!!! Fix please.
		if (expr.includes('=')) {
			this.setState({
				expression: expr.slice(indexOfEquals + 1) + operator,
			});
		} else if (
			// /[/*+-]+/.test(expr)
			endsWithOperator.test(expr) &&
			consecOp.test(operator)
		) {
			this.setState({
				currentNum: operator,
				expression: expr.replace(/[/*+-]+/, operator),
				// /[/*+-]+/.test(expr) ?
				// expr.replace(/[/*+-]{2,}/, operator)
				// : expr + operator,
			});
		} else {
			this.setState({
				currentNum: operator,
				expression: this.state.expression + operator,
			});
		}
		// console.log(consecOp.test(operator));
	}

	evaluateExpression() {
		let expr = this.state.expression;
		// eslint-disable-next-line
		let result = expr.includes('--')
			? eval(expr.replace('--', '+'))
			: eval(expr);
		// Eval throws an error at double minus in the expression. Maybe replace it with math.js?
		this.setState({
			currentNum: result,
			expression: expr + '=' + result,
		});
		// }
		// Eval is evil and should never be used, find a way around that is not dangerous.
		// One solution might to manually parse and calculate the string, rather than simply running it through eval().
		// Another solution is to use math.js library for calculations.
	}

	render() {
		return (
			<div>
				<h2>JS calculator</h2>
				<div className="calculator">
					<Output
						currentNum={this.state.currentNum}
						expression={this.state.expression}
					/>
					<Buttons
						clear={this.allClear}
						num={this.inputNum}
						dec={this.makeDecimal}
						ops={this.handleOperators}
						evaluate={this.evaluateExpression}
					/>
				</div>
				<p>by cerulean_blue</p>
			</div>
		);
	}
}

export default App;
