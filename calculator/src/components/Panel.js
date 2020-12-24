import React, { useState } from 'react';
import Button from './Button';
import Result from './Result';
import calculator from '../logic/calculator';
import '../styles/panel.css';

const Panel = (props) => {
	const [prevNum, updatePrevNum] = useState(0);
	const [curNum, updateCurNum] = useState(0);
	const [oper, updateOperator] = useState(-1);
	const [typing, updateTyping] = useState(false);
	const [dot, updateDot] = useState(0);

	function handleDot() {
		updateDot(1);
	}

	function handleClickNum(num) {
		// Checks if already started to type a number
		if (!typing) {
			updatePrevNum(curNum);
			if (dot === 0) updateCurNum(num);
			if (dot !== 0) {
				updateCurNum(num / 10);
				updateDot(2);
			}
			updateTyping(true);
		}
		if (typing) {
			if (dot === 0) updateCurNum(10 * curNum + num);
			else {
				updateCurNum(curNum + Math.pow(10, -dot) * num);
				updateDot(dot + 1);
			}
		}
	}

	function handleClickOperator(operator) {
		// Define State
		const state = [prevNum, curNum, oper];
		// Call caulculator from logic, get back new State
		const [prevNumNew, curNumNew, operNew] = calculator(state, operator);
		// Test
		console.log(prevNumNew, curNumNew, operNew);
		//Update State
		updatePrevNum(prevNumNew);
		updateCurNum(curNumNew);
		updateOperator(operNew);
		updateTyping(false);
		updateDot(0);
	}

	return (
		<div className='container'>
			<div className='row result'>
				<Result result={curNum.toPrecision(9)} />
			</div>
			<div className='row'>
				<div className='col'>
					<Button onClick={() => handleClickOperator('AC')} name={'AC'} />
				</div>
				<div className='col'>
					<Button onClick={() => handleClickOperator('+/-')} name={'+/-'} />
				</div>
				<div className='col'>
					<Button onClick={() => handleClickOperator('%')} name={'%'} />
				</div>
				<div className='col'>
					<Button onClick={() => handleClickOperator('/')} name={'/'} />
				</div>
			</div>
			<div className='row'>
				<div className='col'>
					<Button onClick={() => handleClickNum(7)} name={7} />
				</div>
				<div className='col'>
					<Button onClick={() => handleClickNum(8)} name={8} />
				</div>
				<div className='col'>
					<Button onClick={() => handleClickNum(9)} name={9} />
				</div>
				<div className='col'>
					<Button onClick={() => handleClickOperator('X')} name={'X'} />
				</div>
			</div>
			<div className='row'>
				<div className='col'>
					<Button onClick={() => handleClickNum(4)} name={4} />
				</div>
				<div className='col'>
					<Button onClick={() => handleClickNum(5)} name={5} />
				</div>
				<div className='col'>
					<Button onClick={() => handleClickNum(6)} name={6} />
				</div>
				<div className='col'>
					<Button onClick={() => handleClickOperator('-')} name={'-'} />
				</div>
			</div>
			<div className='row'>
				<div className='col'>
					<Button onClick={() => handleClickNum(1)} name={1} />
				</div>
				<div className='col'>
					<Button onClick={() => handleClickNum(2)} name={2} />
				</div>
				<div className='col'>
					<Button onClick={() => handleClickNum(3)} name={3} />
				</div>
				<div className='col'>
					<Button onClick={() => handleClickOperator('+')} name={'+'} />
				</div>
			</div>
			<div className='row'>
				<div className='col'>
					<Button onClick={() => handleClickNum(0)} name={0} />
				</div>
				<div className='col'>
					<Button onClick={() => handleDot()} name={'.'} />
				</div>
				<div className='col'>
					<Button
						className={'equal'}
						onClick={() => handleClickOperator('=')}
						name={'='}
					/>
				</div>
			</div>
		</div>
	);
};

export default Panel;
