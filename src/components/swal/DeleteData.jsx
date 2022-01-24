import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { deleteClient } from '../../redux/action';

const swalAlerter = withReactContent(Swal);

const swalAlertDelete = (data, dispatch) => {
	console.log(data, 'dataid dlete');
	swalAlerter
		.fire({
			title: '¿Estas seguro?',
			text: 'No podras revertir esto!',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6'
		})
		.then((x) => {
			if (x.isConfirmed) {
				dispatch(deleteClient(data));
				swalAlerter.fire({
					title: 'Eliminado!',
					text: 'El cliente ha sido eliminado.',
					icon: 'success'
				});
			}
		});
};

export default swalAlertDelete;
