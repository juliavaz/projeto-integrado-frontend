import React, { useState, useEffect } from 'react';
import CardDeputados from '../../components/CardDeputados';
import { getDeputados } from '../../services/api';

const Deputados = () => {
	const [deputados, setDeputados] = useState([]);

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
				{deputados.map((deputado, index) => (
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
