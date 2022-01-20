import React from 'react';

function CardContainer(props) {
	function handleChange(evt) {
		let dat = evt.target.id.split(' ');
		props.setChangeFilter({ ...props.change, color: dat[0], title: dat.splice(1, dat.length).join(' ') });
	}
	return (
		<div className=" flex text-white justify-between">
			<div
				id="bgGrayStrong Total Habitaciones"
				className="bg-bgGrayStrong w-[23%]   flex items-center justify-center"
				onClick={handleChange}
			>
				<span id="bgGrayStrong Total Habitaciones" class="material-icons w-4/12 p-2 text-4xl text-center">
					king_bed
				</span>
				<div id="bgGrayStrong Total Habitaciones" className="w-8/12  flex flex-col p-2">
					<h1 id="bgGrayStrong Total Habitaciones" className="font-bold text-center text-lg">
						Total <br /> Habitaciones
					</h1>
					<h1 id="bgGrayStrong Total Habitaciones" className=" font-bold text-4xl text-center">
						15
					</h1>
				</div>
			</div>
			<div
				id="bgPurpleStrong Habitaciones Libres"
				className="w-[23%] bg-bgPurpleStrong cursor-pointer   flex items-center justify-center"
				onClick={handleChange}
			>
				<span id="bgPurpleStrong Habitaciones Libres" class="material-icons w-4/12 p-2 text-4xl text-center">
					king_bed
				</span>
				<div id="bgPurpleStrong Habitaciones Libres" className="w-8/12  flex flex-col p-2">
					<h1 id="bgPurpleStrong Habitaciones Libres" className="font-bold text-center text-lg">
						Habitaciones <br /> Libres
					</h1>
					<h1 id="bgPurpleStrong Habitaciones Libres" className=" font-bold text-4xl text-center">
						15
					</h1>
				</div>
			</div>
			<div
				id="bgPurpleMid Habitaciones Ocupadas"
				className="w-[23%] cursor-pointer   bg-bgPurpleMid flex items-center justify-center"
				onClick={handleChange}
			>
				<span id="bgPurpleMid Habitaciones Ocupadas" class="material-icons w-4/12 p-2 text-4xl text-center">
					king_bed
				</span>
				<div id="bgPurpleMid Habitaciones Ocupadas" className="w-8/12  flex flex-col p-2">
					<h1 id="bgPurpleMid Habitaciones Ocupadas" className="font-bold text-center text-lg">
						Habitaciones <br /> Ocupadas
					</h1>
					<h1 id="bgPurpleMid Habitaciones Ocupadas" className=" font-bold text-4xl text-center">
						15
					</h1>
				</div>
			</div>
			<div
				id="bgBlue Habitaciones Reservadas"
				className="w-[23%] cursor-pointer  bg-bgBlue  flex items-center justify-center"
				onClick={handleChange}
			>
				<span id="bgBlue Habitaciones Reservadas" class="material-icons w-4/12 p-2 text-4xl text-center">
					king_bed
				</span>
				<div id="bgBlue Habitaciones Reservadas" className="w-8/12  flex flex-col p-2">
					<h1 id="bgBlue Habitaciones Reservadas" className="font-bold text-center text-lg">
						Habitaciones <br /> Reservadas
					</h1>
					<h1 id="bgBlue Habitaciones Reservadas" className=" font-bold text-4xl text-center">
						15
					</h1>
				</div>
			</div>
		</div>
	);
}

export default CardContainer;
