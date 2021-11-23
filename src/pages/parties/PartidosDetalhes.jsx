import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react'
import { Badge, Col, Container, Row } from 'react-bootstrap';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import CardPartidos from '../../components/CardPartidos';
import { http } from '../../services/api';

const PartidosDetalhes = (props) => {

    const [partidos, setPartidos] = useState([]);
    const [membros, setMembros] = useState([]);
    
    useEffect(() => {
        const id = props.match.params.id 

        http.get(`/partidos/${id}`).then( resultado => {
            setPartidos(resultado.data.dados)
        })

        http.get(`/partidos/${id}/membros`).then( resultado => {
            setMembros(resultado.data.dados)
        })
    
    },[props])

    
    return (
        <>
        <Container>
            <Button className="btn btn-light" variant="light" onClick={()=>props.history.goBack()}> <BsArrowLeft /> Voltar</Button>
            {partidos.status &&
            <>
            <h1 style={{ "padding-top": "15px"}}>{partidos.nome} ({partidos.sigla}) <Badge pill bg='success' style={{"font-size": "18px", "vertical-align":"35%"}}> {partidos.status.situacao}</Badge></h1>
            <hr />
            <h4>Membros do partido</h4>
            <br />
            <Row>
                {membros.map((membro, i) => (
                <Col md={3}>                        
					<Link to={`/deputados/${membro.id}`} className="noUnderline">
                        <CardPartidos
                            key={i}
                            to={membro.id}
                            src={membro.urlFoto}
                            title={membro.nome}
                            alt={membro.nome}
                        />
                    </Link>
                </Col>
                ))}
            </Row>
            </>
            }
        </Container>
        </>
    )
}

export default PartidosDetalhes
