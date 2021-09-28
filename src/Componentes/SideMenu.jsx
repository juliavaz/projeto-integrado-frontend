import React from 'react';
import { Link } from 'react-router-dom';

function SideMenu() {
	return (
		<div id="sideMenu">
			<p>Menu Lateral</p>
			<hr />
			<Link to="about">Sobre</Link>
		</div>
	);
}

export default SideMenu;
