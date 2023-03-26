import React from 'react';

export default function LandingPic(props) {
	return (
		<section
			className='landingPic__container'
			style={{ backgroundImage: `url(${props.img})` }}>
			<div className='landingPic__container__background'></div>
			<h2 className='landingPic__container__title'>{props.title}</h2>
		</section>
	);
}
