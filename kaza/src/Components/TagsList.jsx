import React from 'react';

const TagsList = (props) => {
	return props.tags.map((tag) => {
		return (
			<div
				className='description__data__tags__tag sec-on-prim '
				key={'tag-' + props.tags.indexOf(tag)}>
				{tag}
			</div>
		);
	});
};

export default TagsList;
