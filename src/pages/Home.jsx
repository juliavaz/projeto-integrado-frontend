import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CardFunctions from '../components/CardFunctions';

function Home() {
	return (
		<>
		<Container>
			<h1 style={{"font-family": 'El Messiri', "text-align":"center"}}>DTS</h1>
			<h4 style={{"font-family": 'El Messiri', padding: "0px 16px 8px", "font-size": "1.5rem", "text-align":"center" }}>Sistema de Acompanhamento de Deputados</h4>
			<p></p>
			<Row>
				<Col md={3}>
					<CardFunctions 
						title="Favoritos" 
						description="Acompanhe o que os seus deputados marcados como favoritos têm feito na Câmara"
						link="/favoritos"	
						image="./images/star_outline_black_24dp.svg"	
						/>
				</Col>
				<Col md={3}>
					<CardFunctions 
						title="Deputados" 
						description="Pesquise deputados por nome ou partido e veja mais detalhes sobre eles"
						link="/deputados"
						image=".\images\person_black_24dp.svg"
						/>
				</Col>
				<Col md={3}>
					<CardFunctions 
						title="Partidos" 
						description="Veja os partidos que estão ativos na Câmara e conheça os seus membros"
						link="/partidos"
						image=".\images\groups_black_24dp.svg"
						/>
				</Col>
				<Col md={3}>
					<CardFunctions 
						title="Proposições" 
						description="Confira as proposições mais recentes que estão tramitando na Câmara"
						link="/proposicoes"
						image=".\images\insert_drive_file_black_24dp.svg"
						/>
				</Col>
			</Row>
		</Container>
		</>
	)
}

export default Home;
