import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
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
			</ul>
		</div>
	);
}

export default SideMenu;
