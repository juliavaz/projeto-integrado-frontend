import React, { useState, useEffect } from 'react';
import CardDeputados from '../../components/CardDeputados';
import { getDeputados } from '../../services/api';

const Deputados = () => {
	const [deputados, setDeputados] = useState([]);
<<<<<<< Updated upstream
=======
	const [deputadosFiltrados, setDeputadosFiltrados] = useState([]);
>>>>>>> Stashed changes

	useEffect(() => {
		(async () => {
			const {
				data: { dados },
			} = await getDeputados();
			setDeputados(dados);
			setDeputadosFiltrados(dados);
		})();
	}, []);

	function filtrar(e) {
		const filtro = e.target.value;
		const filtrados = deputados.filter((deputado) => {
			if (String(deputado.nome).toLowerCase().indexOf(filtro.toLowerCase()) !== -1) {
				return deputado;
			}
		});
		setDeputadosFiltrados(filtrados);
	}

	return (
		<>
			<h1>Deputados</h1>
			<hr />
			<br />
			<div className="flexContainer">
<<<<<<< Updated upstream
				{deputados.map((deputado, index) => (
=======
				<InputText onChange={(e) => filtrar(e)} />
			</div>
			<div className="flexContainer">
				{deputadosFiltrados.map((deputado, index) => (
>>>>>>> Stashed changes
					<CardDeputados
						imgPath={deputado.urlFoto}
						nome={deputado.nome}
						partido={deputado.siglaPartido}
						key={index}
					/>
				))}
			</div>
		</>
	);
};

export default Deputados;
