import React, { useEffect, useState } from 'react'
import { Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
            {partidos.status &&
            <>
                <h1>{partidos.nome} ({partidos.sigla}) <Badge pill bg='success' style={{"font-size": "18px", "vertical-align":"35%"}}> {partidos.status.situacao}</Badge></h1>
                <hr />
                <h4>Membros do partido</h4>
                <br />
                {membros.map((membro, i) => (
                    <Link to={`/deputados/${membro.id}`}>
                    <img key={i} src={membro.urlFoto} title={membro.nome} alt={membro.nome} style={{"max-width":"114px", "margin-right":"5px"}}/>
                    </Link>
                ))}
            </>
            
            }
        </>
    )
}

export default PartidosDetalhes
