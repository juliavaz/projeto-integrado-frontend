import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getProposicoes } from '../../services/api';
import { AiOutlineInfoCircle } from 'react-icons/ai';

const Proposicoes = () => {
	const [proposicoes, setProposicoes] = useState([]);

	useEffect(() => {
		(async () => {
			const {
				data: { dados },
			} = await getProposicoes();
			setProposicoes(dados);
		})();
	}, []);
	return (
		<>
			<h1>Proposições</h1>
			<hr />
			<br />

			<Table striped bordered hover>
				<thead>
					<tr>
						<td>ID</td>
						<td>Ementa</td>
						<td>Ações</td>
					</tr>
				</thead>
				<tbody>
					{proposicoes.map((proposicao, index) => {
						return (
							<React.Fragment key={index}>
								<tr>
									<td>
										{proposicao.siglaTipo} {proposicao.numero}/{proposicao.ano}{' '}
									</td>
									<td>{proposicao.ementa}</td>
									<td>
										<Link to={`/proposicoes/${proposicao.id}`}>
											<AiOutlineInfoCircle />
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

export default Proposicoes;
