import React from 'react';
import { useState } from 'react';

import arrow from '../assets/Dropdown__arrow_desktop.png';

const DropDown = (props) => {
	const [display, setDisplay] = useState('none');
	// const [class, setClass] = useState('up');

	const [isActive, setActive] = useState('false');

	function handleClick() {
		setActive(!isActive);
		console.log('click');
		console.log(props);

		if (display === 'none') {
			setDisplay('block');
		} else {
			setDisplay('none');
		}
	}

	return (
		<div className={'dropdown sec-on-prim'}>
			<div className='dropdown__title' onClick={handleClick}>
				<div className={'dropdown__title__title'}>{props.title}</div>
				<div
					className={
						isActive ? 'dropdown__title__arrow ' : 'dropdown__title__arrow down'
					}>
					<img src={arrow} alt='arrow' />
				</div>
			</div>
			<div className='dropdown__pannel' style={{ display: display }}>
				{props.content}
			</div>
		</div>
	);
};

export default DropDown;
