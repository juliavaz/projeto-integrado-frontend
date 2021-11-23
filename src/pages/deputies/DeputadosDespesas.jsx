import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { http } from '../../services/api';

const DeputadosDespesas = (props) => {
	const [deputadosDespesas, setDeputadosDespesas] = useState([]);

	useEffect(() => {
		const id = props.match.params.id;
		http.get(`/deputados/${id}/despesas`).then((resultado) => {
			setDeputadosDespesas(resultado.data.dados);
		});
	}, []);

	return (
		<>
			<h1>Despesas do Deputado</h1>
			<hr />
			<br />
			Exibindo as últimas 15 despesas lançadas.
			<br />
			<Table striped bordered hover>
				<thead>
					<tr>
						<td>#</td>
						<td>Tipo</td>
						<td>Fornecedor</td>
						<td>Valor</td>
					</tr>
				</thead>
				<tbody>
					{deputadosDespesas.map((despesa, index) => {
						return (
							<React.Fragment key={index}>
								<tr>
									<td>{despesa.index}</td>
									<td>{despesa.tipoDespesa}</td>
									<td>{despesa.nomeFornecedor}</td>
									<td>
										{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
											despesa.valorDocumento
										)}
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

export default DeputadosDespesas;
