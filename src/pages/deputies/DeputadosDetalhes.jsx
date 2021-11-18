import React, { useEffect, useState } from 'react'
import { http } from '../../services/api';
import { Badge, Col, Container, Row, Button } from 'react-bootstrap';
import { Divider } from 'primereact/divider';
import {MdOutlineAttachMoney} from 'react-icons/md'
import {GiPublicSpeaker} from 'react-icons/gi'


const DeputadosDetalhes = (props) => {

    const [deputados, setDeputados] = useState([]);
    
    useEffect(() => {
        const id = props.match.params.id 
    
        http.get(`/deputados/${id}`).then( resultado => {
          setDeputados(resultado.data.dados)
        })
    
    },[props])

    function badgeColor(){
        if (deputados.ultimoStatus.situacao === "Exercício" || deputados.ultimoStatus.situacao === "Suplência") {
            return "success"
        } else if(deputados.ultimoStatus.situacao === "Afastado" || deputados.ultimoStatus.situacao === "Licença" || deputados.ultimoStatus.situacao === "Suspenso"){
            return "warning"
        } else if (deputados.ultimoStatus.situacao === "Fim de Mandato" || deputados.ultimoStatus.situacao === "Vacância"){
            return "danger"
        } else {
            return "secondary"
        }
        
    }


    return (
        <>

            

            {deputados.ultimoStatus &&
            <>
                
                <Container>
                    <Row>

                        <Col md={4} style={{"text-align":"right", "padding-right":"0", "position":"relative", "top":"50px"}}>
                            <img src={deputados.ultimoStatus.urlFoto} alt={deputados.ultimoStatus.nomeEleitoral} style={{"max-width":"114px"}}/>
                            <Badge bg="secondary" style={{"font-size": "16px", "position":"relative", "left":"-114px", "top":"50px"}}>{deputados.ultimoStatus.siglaPartido}-{deputados.ultimoStatus.siglaUf}</Badge>
                        </Col>
                        <Col md={1}><Divider layout="vertical" /></Col>
                        
                        <Col md={7}>
                            <br />
                            <h2>
                                {deputados.ultimoStatus.nomeEleitoral}{" "}
                                <Badge pill bg={badgeColor()} style={{"font-size": "14px", "vertical-align":"35%"}}>{deputados.ultimoStatus.situacao}</Badge>
                            </h2>
                            <br />
                            <p>Nome civil: {deputados.nomeCivil}</p>
                            <p>Email: {deputados.ultimoStatus.email}</p>
                            <p>Telefone: {deputados.ultimoStatus.gabinete.telefone}</p>
                            <br /><br />
                            <Button variant="dark"><MdOutlineAttachMoney /> {''}Despesas</Button> {" "}
                            <Button variant="outline-secondary"><GiPublicSpeaker /> {' '}Discursos</Button>
                            
                            
                            
                         </Col>
                    </Row>
                </Container>
                
            </>
            }


        </>
    )
}

export default DeputadosDetalhes
