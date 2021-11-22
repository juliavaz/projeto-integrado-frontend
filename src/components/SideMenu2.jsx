import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaCubes, FaFile, FaFileSignature, FaHome, FaHotel, FaUserTie, FaVoteYea } from 'react-icons/fa';
import { FaInfoCircle, FaStar } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa';
import { ListGroup } from 'react-bootstrap';

function SideMenu(props) {
	let classes = props.showSideMenu === false ? 'sideMenu closed' : 'sideMenu';
	return (
		<>
			<ListGroup variant="flush" style={{"min-width": "250px", "height": "100vh", "background-color":"#d3d3d4"}}>
				<h3 style={{"font-family": 'El Messiri', padding: "32px 16px 8px" }}>DTS</h3>
				<h4 style={{"font-family": 'El Messiri', padding: "0px 16px 8px", "font-size": "1rem" }}>Sitema de Acompanhamento <br/> de Deputados</h4>
				<Link to="/" className="noUnderline"><ListGroup.Item action variant="dark" style={{border:"none"}}> <FaHome /> Home</ListGroup.Item></Link>
				<Link to="/sobre" className="noUnderline"><ListGroup.Item action variant="dark" style={{border:"none"}}><FaInfoCircle />  Sobre</ListGroup.Item></Link>
				<Link to="/favoritos" className="noUnderline"><ListGroup.Item action variant="dark" style={{border:"none"}}><FaStar /> Favoritos</ListGroup.Item></Link>
				<Link to="/deputados" className="noUnderline"><ListGroup.Item action variant="dark" style={{border:"none"}}><FaUser /> Deputados</ListGroup.Item></Link>
				<Link to="/partidos" className="noUnderline"><ListGroup.Item action variant="dark" style={{border:"none"}}><FaUsers /> Partidos</ListGroup.Item></Link>
				<Link to="/proposicoes" className="noUnderline"><ListGroup.Item action variant="dark" style={{border:"none"}}><FaFile /> Proposições</ListGroup.Item></Link>
			</ListGroup>
		</>
		
				
	);
}

export default SideMenu;
