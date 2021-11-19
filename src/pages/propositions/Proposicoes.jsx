
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getProposicoes } from '../../services/api';
import {BiMessageAltDetail} from 'react-icons/bi'

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
                    <th>ID</th>
                    <th>Tipo</th>
                    <th>Número</th>
                    <th>Ano</th>
                    <th>Ementa</th>
                    <th>Detalhes</th>
                    </tr>
                </thead>
                <tbody>
                    { proposicoes.map(proposicao => (    
                    <tr>
                    <td>{proposicao.id}</td>
                    <td>{proposicao.siglaTipo}</td>
                    <td>{proposicao.numero}</td>
                    <td>{proposicao.ano}</td>
                    <td>{proposicao.ementa}</td>
                    <td><Link to={`/proposicoes/${proposicao.id}`} className="noUnderline"> <BiMessageAltDetail /></Link></td>
                    </tr>
                    ))
                    }
                </tbody>
            </Table>
        </>
    )
}

export default Proposicoes
