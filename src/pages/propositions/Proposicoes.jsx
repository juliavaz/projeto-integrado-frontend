
import React, { useEffect, useState } from 'react'
import { Container, ListGroup, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getProposicoes } from '../../services/api';
import {AiOutlineInfoCircle} from 'react-icons/ai'

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

            <Container>
            <ListGroup >
                { proposicoes.map(proposicao => (
                    <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                        <div className="fw-bold">{proposicao.siglaTipo} {proposicao.numero}/{proposicao.ano} <Link to={`/proposicoes/${proposicao.id}`} className="noUnderline"> <AiOutlineInfoCircle /></Link></div>
                        {proposicao.ementa}
                        </div>
                    </ListGroup.Item>
                ))}
            </ListGroup>
            </Container>
        </>
    )
}

export default Proposicoes
