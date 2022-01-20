import React from 'react';

function FilterContainer(props) {
	return <div className={`w-full text-xl text-white mt-6 p-2 bg-${props.change.color}`}>{props.change.title}</div>;
}

export default FilterContainer;
