import React from 'react';
import startFull from '../assets/Star--full.png';
import starEmpty from '../assets/Star--empty.png';
const range = [1, 2, 3, 4, 5];

const StarScale = (props) => {
	let rating = props.rating;

	return (
		<div>
			{range.map((rangeElement) =>
				rating >= rangeElement ? (
					<img
						key={'star-Full' + rangeElement.toString()}
						src={startFull}
						alt='Star--full'
					/>
				) : (
					<img
						key={'star-Empty' + rangeElement.toString()}
						src={starEmpty}
						alt='Star--full'
					/>
				)
			)}
		</div>
	);
};

export default StarScale;
