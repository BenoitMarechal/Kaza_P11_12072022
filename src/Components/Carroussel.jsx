import React from 'react';
import { useState } from 'react';
import nextIcon from '../assets/carroussel__next.png';
import prevIcon from '../assets/carroussel__prev.png';

const Carroussel = (lodging) => {
	let max = lodging.pictures.length - 1;
	let [current, setCurrent] = useState(0);

	const next = () => {
		setCurrent(current === max ? 0 : current + 1);
	};
	const prev = () => {
		setCurrent(current < 1 ? max : current - 1);
	};
	return (
		<section className='carroussel'>
			<img
				src={prevIcon}
				alt='Carroussel__prev'
				role='button'
				onClick={prev}
				className='carroussel__button'
				id='prev'></img>

			<div className='carroussel__container'>
				{lodging.pictures.map((picture, index) => {
					return (
						<img
							className={
								index === current
									? 'carroussel__container__picture__active '
									: 'carroussel__container__picture'
							}
							src={picture}
							alt={lodging.title + lodging.pictures.indexOf(picture)}
							key={lodging.title + lodging.pictures.indexOf(picture)}
						/>
					);
				})}
			</div>

			<img
				src={nextIcon}
				alt='Carroussel__next'
				role='button'
				onClick={next}
				className='carroussel__button'
				id='next'></img>
		</section>
	);
};

export default Carroussel;
