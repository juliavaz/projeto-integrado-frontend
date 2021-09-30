import React from 'react'


const CardDeputados = ({ imgPath, nome, partido }) => {
    return (
        <div className="cartaoDep">
            <img src={imgPath} />
            <div className="cartaoContent">
                <h3>{nome}</h3>
                <p>{partido}</p>
            </div>
        </div>
    )
}

export default CardDeputados
