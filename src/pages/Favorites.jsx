import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import apiFavoritos from '../services/apiFavoritos'

const Favorites = () => {
    
    const [favoritos, setFavoritos] = useState([])
    
    useEffect(()=> {
        const favoritos = apiFavoritos.getAll()
        setFavoritos(favoritos)
    }, [])


    return (
        <>
            <h1>Favoritos</h1>
			<hr />
			<br />
            {(favoritos.length === 0) &&
                <>
                <br />
                <p style={{"text-align":"center", "font-size":"1.5rem"}}>Você ainda não tem nenhum deputado salvo nos seus favoritos. <br /> Clique no botão abaixo para vizualizar a lista de deputados e favoritar os que você gostaria de acompanhar.</p>
                <br /> <Link to="/deputados" className="btn btn-secondary" style={{"margin": "0 42%"}}>Visualizar deputados</Link>
                </>

            }
            {(favoritos.length > 0) &&
                <>
                </>

            }
        </>
    )
}

export default Favorites
