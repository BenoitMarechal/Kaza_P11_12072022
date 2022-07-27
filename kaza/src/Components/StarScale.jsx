import React from 'react';
import startFull from '../assets/Star--full.png';
import starEmpty from '../assets/Star--empty.png';
const range = [1, 2, 3, 4, 5];

const StarScale = (props) => {
	let rating = props.rating;

	return (
		<div className='description__summary__right__rating__stars'>
			{range.map((rangeElement) =>
				rating >= rangeElement ? (
					<img
						key={'star-Full' + rangeElement.toString()}
						src={startFull}
						alt='Star--full'
						className='description__summary__right__rating__stars__star'
					/>
				) : (
					<img
						key={'star-Empty' + rangeElement.toString()}
						src={starEmpty}
						alt='Star--full'
						className='description__summary__right__rating__stars__star'
					/>
				)
			)}
		</div>
	);
};

export default StarScale;
