import React from 'react';
import '../styles/button.css';

const Button = (props) => {
	return (
		<button
			onClick={props.onClick}
			type='button'
			className='btn btn-outline-secondary'
			style={{ width: props.name === '=' ? '82px' : '40px' }}
		>
			{props.name}
		</button>
	);
};

export default Button;
