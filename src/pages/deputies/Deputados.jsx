import React, { useState, useEffect } from 'react';
import CardDeputados from '../../components/CardDeputados';
import { getDeputados } from '../../services/api';
import { InputText } from 'primereact/inputtext';

const Deputados = () => {
	const [deputados, setDeputados] = useState([]);
	const [filtro, setFilter] = useState('');

	useEffect(() => {
		(async () => {
			const {
				data: { dados },
			} = await getDeputados();
			setDeputados(dados);
		})();
	}, []);

	return (
		<>
			<h1>Deputados</h1>
			<hr />
			<br />
			<div className="flexContainer">
				<InputText value={filtro} onChange={(e) => setFilter(e.target.value)} />
			</div>
			<div className="flexContainer">
				{deputados.map((deputado, index) => (
					<CardDeputados
						id={deputado.id}
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
