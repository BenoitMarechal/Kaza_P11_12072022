import React from 'react';
import DropDown from './DropDown';
import StarScale from './StarScale';
import TagsList from './TagsList';
//import DropDown from '../Components/DropDown';

const Description = (props) => {
	const dropDownData = [
		{
			title: 'Déscription',
			content: props.description,
		},
		{
			title: 'Equipements',
			content: props.equipments,
		},
	];

	return (
		<section className='description'>
			<div className='description__summary'>
				<div className='description__summary__left'>
					<h1 className='description__summary__left__title'>{props.title}</h1>
					<div className='description__summary__left__location'>
						{props.location}
					</div>
				</div>
				<div className='description__summary__host'>
					<div className='description__summary__host__name'>
						{props.host.name}
					</div>
					<img src={props.host.picture} alt={props.host.name} />
				</div>
			</div>
			<div className='description__data'>
				<div className='description__data__tags'>
					<TagsList {...props} />
				</div>
				<div className='description__data__stars'>
					<StarScale {...props}></StarScale>
				</div>
			</div>
			<div className='description__info'>
				{dropDownData.map((object) => (
					<DropDown
						{...object}
						key={'description-dropdown' + dropDownData.indexOf(object)}
					/>
				))}
			</div>
		</section>
	);
};

export default Description;
