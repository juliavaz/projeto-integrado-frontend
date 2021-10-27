import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { getPartidos } from '../../services/api';

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
			<DataTable value={partidos} stripedRows>
				<Column field="id" header="ID"></Column>
				<Column field="nome" header="Nome"></Column>
				<Column field="sigla" header="Sigla"></Column>
			</DataTable>
		</>
	);
};

export default Partidos;
