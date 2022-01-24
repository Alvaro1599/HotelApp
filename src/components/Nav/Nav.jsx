import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navItems } from '../../sources/itemsNav';
import Item from './Item';
function Nav() {
	const [ visibility, setVisibility ] = useState(false);

	function renderItemsNav() {
		return navItems.map((x) => {
			if (x.name === 'Mantenimiento') {
				return (
					<div
						className="text-white w-3/4 cursor-pointer animate-down flex flex-wrap p-4 justify-between items-center"
						onClick={() => setVisibility(!visibility)}
					>
						<span class="material-icons w-2/12  ">{x.icon}</span>
						<h1 className=" pl-4 w-10/12">{x.name}</h1>
						<div className={`text-sm  flex ${visibility ? 'flex' : 'hidden'} flex-col  mt-2`}>
							<Link to={`/${'Clientes'}`} className="p-2 ml-10">
								Clientes
							</Link>
							<Link to={`/${'Habitaciones'}`} className="p-2 ml-10">
								Habitaciones
							</Link>
							<Link to={`/${'Tipohabitacion'}`} className="p-2 ml-10">
								Tipo Habitación
							</Link>
							<Link to={`/${'Productos'}`} className="p-2 ml-10">
								Productos
							</Link>
							<Link to={`/${'Empleados'}`} className="p-2 ml-10">
								Empleados
							</Link>
							<Link to={`/${'Negocio'}`} className="p-2 ml-10">
								Mi Negocio
							</Link>
							<Link to={`/${'Usuario'}`} className="p-2 ml-10">
								Usuario
							</Link>
						</div>
					</div>
				);
			}
			return <Item name={x.name} icon={x.icon} />;
		});
	}
	return (
		<div className="w-2/12 h-full flex flex-wrap justify-center bg-bgPurpleLight  ">
			<div className=" h-2/6  flex flex-col items-center justify-center w-full text-center">
				<span className="material-icons text-[100px] text-white ">person_pin</span>
				<h1 className="text-white font-bold text-xl mt-6">Bienvenido Alvaro</h1>
			</div>
			<div className="w-full h-4/6 overflow-auto flex flex-col items-center">{renderItemsNav()}</div>
		</div>
	);
}

export default Nav;
