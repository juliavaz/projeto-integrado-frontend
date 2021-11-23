import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import apiFavoritos from '../services/apiFavoritos';
import { despesasByDeputadoId } from '../services/api';
import CardDeputados from '../components/CardDeputados';

const Favorites = () => {
	const [favoritos, setFavoritos] = useState([]);

	useEffect(() => {
		(async () => {
			let favs = apiFavoritos.getAll();
			for (const fav of favs) {
				const despesas = await despesasByDeputadoId(fav.id);
				fav.despesas = despesas;
			}
			setFavoritos(favs);
		})();
	}, []);

	return (
		<>
			<h1>Favoritos</h1>
			<hr />
			<br />
			{favoritos.length === 0 && (
				<>
					<br />
					<p style={{ textAlign: 'center', fontSize: '1.5rem' }}>
						Você ainda não tem nenhum deputado salvo nos seus favoritos. <br /> Clique no botão abaixo para
						vizualizar a lista de deputados e favoritar os que você gostaria de acompanhar.
					</p>
					<br />{' '}
					<Link to="/deputados" className="btn btn-secondary" style={{ margin: '0 42%' }}>
						Visualizar deputados
					</Link>
				</>
			)}
			{favoritos.length > 0 && (
				<>
					{favoritos.map((deputado, index) => (
						<React.Fragment key={index}>
							<Link to={`/deputados/${deputado.id}`} className="noUnderline">
								<CardDeputados
									id={deputado.ultimoStatus.id}
									imgPath={deputado.ultimoStatus.urlFoto}
									nome={deputado.ultimoStatus.nome}
									partido={deputado.ultimoStatus.siglaPartido}
									key={index}
								/>
							</Link>
						</React.Fragment>
					))}
				</>
			)}
		</>
	);
};

export default Favorites;
