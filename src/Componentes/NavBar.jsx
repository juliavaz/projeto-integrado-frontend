import React from 'react';
import { FaBars } from 'react-icons/fa';

function NavBar(props) {
	return (
		<>
			<div id="navBar">
				<div id="logo">Logo</div>
				<div id="titulo">
					<h1>Projeto Integrado do Grupo Mais Top</h1>
				</div>
				<div id="menuButton" onClick={props.toggleSideMenu}>
					<FaBars />
				</div>
			</div>
		</>
	);
}

export default NavBar;
