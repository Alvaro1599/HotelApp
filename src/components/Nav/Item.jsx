import React from 'react';
import { Link } from 'react-router-dom';
function Item(props) {
	return (
		<Link to={`/${props.name}`} className="text-white w-3/4   flex p-4 justify-between items-center">
			<span class="material-icons w-2/12  ">{props.icon}</span>
			<h1 className=" pl-4 w-10/12">{props.name}</h1>
		</Link>
	);
}

export default Item;
