import React, { useState, useEffect } from 'react';
import { getPartidos } from '../../services/api';
import { Table } from 'react-bootstrap';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Partidos = () => {
	const [partidos, setPartidos] = useState([]);

	useEffect(() => {
		(async () => {
			const {
				data: { dados },
			} = await getPartidos();
			setPartidos(dados);
		})();
	}, []);

	return (
		<>
			<h1>Partidos</h1>
			<hr />
			<br />
			<Table striped bordered hover>
				<thead>
					<tr>
						<td>ID</td>
						<td>Nome</td>
						<td>Sigla</td>
						<td>Ações</td>
					</tr>
				</thead>
				<tbody>
					{partidos.map((partido, index) => {
						return (
							<React.Fragment key={index}>
								<tr>
									<td>{partido.id}</td>
									<td>{partido.nome}</td>
									<td>{partido.sigla}</td>
									<td>
										<Link to={`/partidos/${partido.id}`}>
											<FaEye />
										</Link>
									</td>
								</tr>
							</React.Fragment>
						);
					})}
				</tbody>
			</Table>
		</>
	);
};

export default Partidos;
