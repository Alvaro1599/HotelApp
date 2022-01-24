import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { updateClient, createClient } from '../../redux/action';
const mySwal = withReactContent(Swal);

const swalAlertCreate = (dispatch) => {
	mySwal
		.fire({
			title: 'Creando un nuevo Cliente',

			html: (
				<div className="flex text-sm flex-wrap w-full justify-center">
					<div className="w-full  flex flex-wrap justify-center items-center p-2">
						<label className="w-1/2">NOMBRES Y APELLIDOS</label>
						<input
							id="name"
							className="w-1/2 outline-none valid:border invalid:border-red-500 border-2 p-2"
							type="text"
						/>
					</div>
					<div className="w-full  flex flex-wrap justify-center items-center p-2">
						<label className="w-1/2">Nº DNI</label>
						<input
							id="dni"
							className="w-1/2 outline-none valid:border invalid:border-red-500 border-2 p-2"
							type="number"
							max={99999999}
						/>
					</div>
					<div className="w-full  flex flex-wrap justify-center items-center p-2">
						<label className="w-1/2">CORREO</label>
						<input
							id="correo"
							className="w-1/2 outline-none valid:border invalid:border-red-500 border-2 p-2"
							type="email"
						/>
					</div>
					<div className="w-full  flex flex-wrap justify-center items-center p-2">
						<label className="w-1/2">CELULAR</label>
						<input
							id="celular"
							className="w-1/2 outline-none valid:border invalid:border-red-500 border-2 p-2"
							type="number"
						/>
					</div>
					<div className="w-full  flex flex-wrap justify-center items-center p-2">
						<label className="w-1/2">DIRECCIÓN</label>
						<input
							id="direccion"
							className="w-1/2 valid:outline-bgPurpleLight invalid:outline-red-500 border-2 p-2"
							type="text"
						/>
					</div>
				</div>
			),
			showCancelButton: true,
			preConfirm(x) {
				return [
					{
						name: document.getElementById('name').value,
						dni: document.getElementById('dni').value,
						correo: document.getElementById('correo').value,
						celular: document.getElementById('celular').value,
						direccion: document.getElementById('direccion').value
					}
				];
			}
		})
		.then((x) => {
			console.log(x);
			if (x.isConfirmed) {
				dispatch(createClient(x.value[0]));
				mySwal.fire({
					title: 'Cliente Creado',
					text: 'El cliente ha sido creado correctamente',
					icon: 'success'
				});
			}
			console.log(x);
		});
};

export default swalAlertCreate;
