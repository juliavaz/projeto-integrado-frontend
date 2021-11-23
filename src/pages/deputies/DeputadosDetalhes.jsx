import React, { useEffect, useState } from 'react'
import { http } from '../../services/api';
import { Badge, Col, Container, Row, Button } from 'react-bootstrap';
import { Divider } from 'primereact/divider';
import {MdOutlineAttachMoney} from 'react-icons/md'
import {GiPublicSpeaker} from 'react-icons/gi'
import { Link } from 'react-router-dom';
import apiFavoritos from '../../services/apiFavoritos';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import {BsArrowLeft} from 'react-icons/bs'


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

    function getPartido(){
        
        const partidoURL = deputados.ultimoStatus.uriPartido
        const partidoId = partidoURL.substring(51)
        return partidoId

    }

    const [favoritos, setFavoritos] = useState([])
    
    useEffect(()=> {
        const favoritos = apiFavoritos.getAll()
        setFavoritos(favoritos)
    }, [])

    function isFavorite(){
        for(let i = 0; i<favoritos.length; i++){
            if(favoritos[i].id === deputados.id){
                return true
            } else {
                return false
            }
        }
    }

    function handleFavorite(){
        const favorito = deputados
        apiFavoritos.create(favorito)
        setFavoritos(apiFavoritos.getAll())
        isFavorite()
    }

    function handleRemoveFavorite(){
        for(let i = 0; i<favoritos.length; i++){
            if(favoritos[i].id === deputados.id){
                apiFavoritos.delete(i)
            }
        }
        setFavoritos(apiFavoritos.getAll())
        isFavorite()        
    }

    return (
    <>
    {deputados.ultimoStatus &&
        <>        
        <Container>
            <Button variant="light" onClick={()=>props.history.goBack()}> <BsArrowLeft /> Voltar</Button><br />
            <Row style={{ "padding-top": "20px"}}>
                <Col md={1} ></Col>
                <Col md={3} style={{"text-align":"right", "padding-right":"0", "position":"relative", }}>
                    <img src={deputados.ultimoStatus.urlFoto} alt={deputados.ultimoStatus.nomeEleitoral} style={{"width":"250px"}}/>
                    <center><Badge bg="secondary" style={{ "top":"50px", "borderRadius": "15px" }}><Link to={`/partidos/${getPartido()}`} className="noUnderline">{deputados.ultimoStatus.siglaPartido}-{deputados.ultimoStatus.siglaUf}</Link></Badge></center>
                </Col>
                <Col md={1}><Divider layout="vertical" /></Col>
                
                <Col md={7}><br />
                    <h2> 
                        {deputados.ultimoStatus.nomeEleitoral}{" "}
                        {isFavorite() && <AiFillStar style={{"font-size":"1.5rem"}} onClick={handleRemoveFavorite} />}
                        {(!isFavorite()) && <AiOutlineStar style={{"font-size":"1.5rem"}} onClick={handleFavorite} />}
                    </h2>
                    <Badge pill bg={badgeColor()} style={{"font-size": "14px", "vertical-align":"35%"}}> {deputados.ultimoStatus.situacao}</Badge>
                    <br />
                    <p>Nome civil: {deputados.nomeCivil}</p>
                    <p>Email: {deputados.ultimoStatus.email}</p>
                    <p>Telefone: {deputados.ultimoStatus.gabinete.telefone}</p>
                    <br /><br />
                    <Button variant="dark"><MdOutlineAttachMoney /> {''}Despesas</Button> {" "}
                    <Button variant="outline-secondary"><GiPublicSpeaker /> {' '}Proposições</Button>
                </Col>
            </Row>
        </Container>            
        </>
    }
    </>
    )
}

export default DeputadosDetalhes
