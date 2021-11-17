import React, { useState, useEffect } from 'react';
import CardDeputados from '../../components/CardDeputados';
import { getDeputados } from '../../services/api';
import { InputText } from 'primereact/inputtext';
import { Link } from 'react-router-dom';

const Deputados = () => {
	const [deputados, setDeputados] = useState([]);
	const [deputadosFiltrados, setDeputadosFiltrados] = useState([]);

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
			} else return null;
		});
		setDeputadosFiltrados(filtrados);
	}

	return (
		<>
			<h1>Deputados</h1>
			<hr />
			<br />
			<div className="flexContainer">
				<InputText onChange={filtrar} />
			</div>
			<div className="flexContainer">
				{deputadosFiltrados.map((deputado, index) => (
					<Link to={`/deputados/${deputado.id}`}>
						<CardDeputados
							id={deputado.id}
							imgPath={deputado.urlFoto}
							nome={deputado.nome}
							partido={deputado.siglaPartido}
							key={index}
						/>
					</Link>

				))}
			</div>
		</>
	);
};

export default Deputados;
