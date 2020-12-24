export default function calculator(state, operator) {
	const [prevNum, curNum, oper] = state;
	if (operator === 'AC') {
		return [0, 0, -1];
	}
	if (operator === '+/-') {
		return [prevNum, -curNum, operator];
	}
	if (operator === '%') {
		return [prevNum, curNum * 100, operator];
	}
	if (
		operator === '/' ||
		operator === '+' ||
		operator === '-' ||
		operator === 'X'
	) {
		const [dump1, result, dump2] = equal(state, operator);
		return [curNum, result, operator];
	}
	if (operator === '=') {
		return equal(state, operator);
	}
	return [];
}

function equal(state, operator) {
	const [prevNum, curNum, oper] = state;
	let result = 0;
	if (oper === -1) {
		result = curNum;
	}
	if (oper === '+') {
		result = prevNum + curNum;
	}
	if (oper === '-') {
		result = prevNum - curNum;
	}
	if (oper === '/') {
		result = prevNum / curNum;
	}
	if (oper === 'X') {
		result = prevNum * curNum;
	}
	return [result, result, oper];
}
