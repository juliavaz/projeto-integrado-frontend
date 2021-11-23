import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import apiFavoritos from '../services/apiFavoritos'

const Favorites = () => {
    
    const [favoritos, setFavoritos] = useState([])

 
    useEffect(()=> {
        let favs = apiFavoritos.getAll()
        setFavoritos(favs)
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
            {
                (favoritos.length > 0) &&
                    <>
                    {favoritos.map((deputado, index) => (
                        <>
                        <h3>{deputado.ultimoStatus.nome}</h3>
                        <img src={deputado.ultimoStatus.urlFoto} alt={deputado.ultimoStatus.nome} />
                        <br />
                        <p>Adicionar as despesas e últimas proposições do depultado. Referencia: https://www.camara.leg.br/deputados/204554 </p>
                        </>
                    ))}
                    </>
            }

       

        </>
    )
}

export default Favorites
