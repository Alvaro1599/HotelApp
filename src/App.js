import './App.css';
import Nav from './components/Nav/Nav.jsx';
import { Routes, Route } from 'react-router-dom';
import Inicio from './pages/inicio/Inicio';
import Mantenimiento from './pages/mantenimiento/Mantenimiento';
import Ingreso from './pages/ingreso/Ingreso';
import Clientes from './pages/clientes/Clientes';
import Habitacion from './pages/habitaciones/Habitacion';
function App() {
	return (
		<div className="App w-full h-screen flex">
			<Nav />
			<div className="bg-bgGrayLigth w-10/12 p-8">
				<Routes>
					<Route path="/Inicio" index element={<Inicio />} />
					<Route path="*" index element={<Inicio />} />
					<Route path="/Mantenimiento" element={<Mantenimiento />} />
					<Route path="/Ingreso" element={<Ingreso />} />
					<Route path="/Clientes" element={<Clientes />} />
					<Route path="/Habitaciones" element={<Habitacion />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
