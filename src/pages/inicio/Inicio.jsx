import React, { useState } from 'react';

import CardContainer from './CardContainer';

import FilterContainer from './FilterContainer';

function Inicio() {
	const [ changeFilter, setChangeFilter ] = useState({ color: 'bgGrayStrong', title: 'Total Habitaciones' });

	console.log('renderizando inicio');
	return (
		<div className=" w-full h-full">
			<h1 className="mb-4 text-bgBlue font-bold text-[20px] ">Inicio</h1>
			<CardContainer change={changeFilter} setChangeFilter={setChangeFilter} />
			<FilterContainer change={changeFilter} />
		</div>
	);
}

export default Inicio;
