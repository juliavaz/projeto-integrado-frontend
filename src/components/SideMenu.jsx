import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaCubes, FaFile, FaFileSignature, FaHome, FaHotel, FaUserTie, FaVoteYea } from 'react-icons/fa';
import { FaInfoCircle } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa';

function SideMenu(props) {
	let classes = props.showSideMenu === false ? 'sideMenu closed' : 'sideMenu';
	return (
		<div className={classes}>
			<ul>
				<li>
					<Link to="/" onClick={props.closeMenus}>
						<FaHome />
						Home
					</Link>
				</li>
				<li>
					<Link to="/sobre" onClick={props.closeMenus}>
						<FaInfoCircle />
						Sobre
					</Link>
				</li>
				<li>
					<h1>deputados</h1>
				</li>
				<li>
					<Link to="/deputados" onClick={props.closeMenus}>
						<FaUser />
						Deputados
					</Link>
				</li>
				<li>
					<Link to="/partidos" onClick={props.closeMenus}>
						<FaUsers />
						Partidos
					</Link>
				</li>
				<li>
					<Link to="/blocospartidarios" onClick={props.closeMenus}>
						<FaCubes />
						Blocos Partidários
					</Link>
				</li>
				<li>
					<Link to="/legislaturas" onClick={props.closeMenus}>
						<FaFileSignature />
						Legislaturas
					</Link>
				</li>
				<li>
					<h1>Atividades Legislativas</h1>
				</li>
				<li>
					<Link to="/proposicoes" onClick={props.closeMenus}>
						<FaFile />
						Proposições
					</Link>
				</li>
				<li>
					<Link to="/votacoes" onClick={props.closeMenus}>
						<FaVoteYea />
						Votações
					</Link>
				</li>
				<li>
					<Link to="/blocospartidarios" onClick={props.closeMenus}>
						<FaUserTie />
						Frentes Parlamentares
					</Link>
				</li>
				<li>
					<h1>Mais Informações</h1>
				</li>
				<li>
					<Link to="/proposicoes" onClick={props.closeMenus}>
						<FaCalendarAlt />
						Eventos
					</Link>
				</li>
				<li>
					<Link to="/votacoes" onClick={props.closeMenus}>
						<FaHotel />
						Órgãos Legislativos
					</Link>
				</li>
			</ul>
		</div>
	);
}

export default SideMenu;
