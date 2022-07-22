import React from 'react';
import { Link } from 'react-router-dom';

const LodgingCard = (props) => {
	return (
		<div className='lodgingCard'>
			<Link
				to={'/lodging/?id=' + props.id}
				className='lodgingCard__link'></Link>
			<p className='lodgingCard__title'>{props.title}</p>
		</div>
	);
};

export default LodgingCard;
