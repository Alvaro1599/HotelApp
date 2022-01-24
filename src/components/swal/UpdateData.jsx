import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { updateClient } from '../../redux/action';
const mySwal = withReactContent(Swal);

const swalAlert = (data, dispatch) => {
	mySwal
		.fire({
			title: 'Cambiando Datos',
			text: "You won't be able to revert this!",
			html: (
				<div className="flex text-sm flex-wrap w-full justify-center">
					<div className="w-full  flex flex-wrap justify-center items-center p-2">
						<label className="w-1/2">NOMBRES Y APELLIDOS</label>
						<input
							id="name"
							className="w-1/2 valid:outline-bgPurpleLight invalid:outline-red-500 border-2 p-2"
							type="text"
							defaultValue={data.name}
						/>
					</div>
					<div className="w-full  flex flex-wrap justify-center items-center p-2">
						<label className="w-1/2">Nº DNI</label>
						<input
							id="dni"
							className="w-1/2 valid:outline-bgPurpleLight invalid:outline-red-500 border-2 p-2"
							type="number"
							defaultValue={data.dni}
						/>
					</div>
					<div className="w-full  flex flex-wrap justify-center items-center p-2">
						<label className="w-1/2">CORREO</label>
						<input
							id="correo"
							className="w-1/2 valid:outline-bgPurpleLight invalid:outline-red-500 border-2 p-2"
							type="email"
							defaultValue={data.correo}
						/>
					</div>
					<div className="w-full  flex flex-wrap justify-center items-center p-2">
						<label className="w-1/2">CELULAR</label>
						<input
							id="celular"
							className="w-1/2 valid:outline-bgPurpleLight invalid:outline-red-500 border-2 p-2"
							type="number"
							defaultValue={data.celular}
						/>
					</div>
					<div className="w-full  flex flex-wrap justify-center items-center p-2">
						<label className="w-1/2">DIRECCIÓN</label>
						<input
							id="direccion"
							className="w-1/2 valid:outline-bgPurpleLight invalid:outline-red-500 border-2 p-2"
							type="text"
							defaultValue={data.direccion}
						/>
					</div>
				</div>
			),
			showCancelButton: true,
			preConfirm() {
				return [
					{
						name: document.getElementById('name').value,
						dni: document.getElementById('dni').value,
						correo: document.getElementById('correo').value,
						celular: document.getElementById('celular').value,
						direccion: document.getElementById('direccion').value,
						clientId: data.id
					}
				];
			}
		})
		.then((x) => {
			if (x.isConfirmed) {
				dispatch(updateClient(x.value[0]));
				mySwal.fire({
					title: 'Datos Actualizados',
					text: 'Los datos se han actualizado correctamente',
					icon: 'success'
				});
			}
			console.log(x);
		});
};

export default swalAlert;
