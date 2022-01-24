import axios from 'axios';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import swalAlertCreate from '../../components/swal/CreateData';
import swalAlertDelete from '../../components/swal/DeleteData';
import swalAlert from '../../components/swal/UpdateData';
import { getClient } from '../../redux/action';
function Clientes() {
	const data = useSelector((selector) => selector);
	console.log(data.client);
	useEffect(() => {
		dispatch(getClient());
	}, []);
	const dispatch = useDispatch();

	function renderTr() {
		return data.client ? (
			data.client.map((x, y) => {
				return (
					<div className="table-row">
						<div className="table-cell">{y + 1}</div>
						<div className="table-cell">{x.name}</div>
						<div className="table-cell">{x.dni}</div>
						<div className="table-cell">{x.correo}</div>
						<div className="table-cell">{x.celular}</div>
						<div className="table-cell">{x.direccion}</div>
						<div className="table-cell text-white p-2 text-center">
							<button className="w-7/12  bg-bgPurpleLight">
								<span
									class="material-icons text-center p-2"
									onClick={async (evt) => {
										const user = await axios.get(
											'http://localhost:5000/api/v1/getClient/' + evt.target.id
										);
										swalAlert(user.data, dispatch);
									}}
									id={x.id}
								>
									edit
								</span>
							</button>
						</div>
						<div className="table-cell p-2  text-white ">
							<button className="w-5/12 h-full bg-bgBlue">
								<span
									id={x.id}
									class="material-icons text-center"
									onClick={(evt) => {
										swalAlertDelete(evt.target.id, dispatch);
									}}
								>
									delete
								</span>
							</button>
						</div>
					</div>
				);
			})
		) : (
			<div>
				<div>-</div>
				<div>-</div>
				<div>-</div>
				<div>-</div>
				<div>-</div>
				<div>-</div>
			</div>
		);
	}
	return (
		<div className="w-full  h-full ">
			<h1 className="mb-4">REGISTRO / LISTA DE CLIENTES</h1>
			<button
				className="flex p-2 text-white rounded-lg bg-bgPurpleLight mb-4"
				onClick={() => {
					swalAlertCreate(dispatch);
				}}
			>
				{' '}
				<span class="material-icons mr-2 ">person_add</span> Nuevo cliente
			</button>
			<div className="w-full h-5/6 overflow-y-auto ">
				<div className=" table text-center h-full  border-separate border   w-full ">
					<div className="table-header-group w-full p-2  text-white bg-bgPurpleLight">
						<div className="table-row  ">
							<div className="table-cell p-2 ">Nº</div>
							<div className="table-cell p-2 ">NOMBRES Y APELLIDOS</div>
							<div className="table-cell p-2">Nº DNI</div>
							<div className="table-cell p-2">CORREO</div>
							<div className="table-cell p-2">CELULAR</div>
							<div className="table-cell p-2">DIRECCIÓN</div>
							<div className="table-cell p-2">EDITAR</div>
							<div className="table-cell p-2">ELIMINAR</div>
						</div>
					</div>
					<div className=" h-full   table-row-group m-2">{renderTr()}</div>
				</div>
			</div>
		</div>
	);
}

export default Clientes;
