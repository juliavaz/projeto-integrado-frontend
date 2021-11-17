import React, { useEffect, useState } from 'react'
import { http } from '../../services/api';
import { Avatar } from 'primereact/avatar';


const DeputadosDetalhes = (props) => {

    const [deputados, setDeputados] = useState([]);
    const [despesas, setDespesas] = useState([]);
    
    useEffect(() => {
        const id = props.match.params.id 
    
        http.get(`/deputados/${id}`).then( resultado => {
          setDeputados(resultado.data.dados)
        })
        http.get(`/deputados/${id}/despesas`).then( resultado => {
            setDespesas(resultado.data.dados)
          })
    
    },[props])


    return (
        <>
            {deputados.ultimoStatus &&
            <>
                <Avatar image={deputados.ultimoStatus.urlFoto} size='xlarge' shape='circle'/>
                <h2>{deputados.ultimoStatus.nomeEleitoral}</h2>
                <h4>{deputados.nomeCivil}</h4>
                <h4>{deputados.ultimoStatus.situacao}</h4>
                <hr />
                <p>Partido: {deputados.ultimoStatus.siglaPartido}-{deputados.ultimoStatus.siglaUf}</p>
                <p>Email: {deputados.ultimoStatus.email}</p>
                <p>Telefone: {deputados.ultimoStatus.gabinete.telefone}</p>
            </>
            }
            <hr />

            {console.log(despesas)}

            {
                despesas.map((despesa,i) => {
                    <>
                        <p>{despesa.ano}</p>
                        <p>{despesa.cnpjCpfFornecedor}</p>
                        <p>{despesa.codDocumento}</p>
                        <p>{despesa.codLote}</p>
                        <p>{despesa.dataDocumento}</p>
                        <p>{despesa.mes}</p>
                        <p>{despesa.nomeFornecedor}</p>
                        <p>{despesa.numDocumento}</p>
                        <p>{despesa.tipoDespesa}</p>
                        <p>{despesa.tipoDocumento}</p>
                        <p>{despesa.urlDocumento}</p>
                        <p>{despesa.valorDocumento}</p>
                        <p>{despesa.valorGlosa}</p>
                        <p>{despesa.valorLiquido}</p>
                    </>
                })
            }


        </>
    )
}

export default DeputadosDetalhes
