import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { FaInfoCircle } from 'react-icons/fa';
import { AiFillWarning } from 'react-icons/ai';

function SideMenu() {
	return (
		<div id="sideMenu">
			<ul>
				<li>
					<Link to="/">
						<FaHome />
						Home
					</Link>
				</li>
				<li>
					<Link to="/about">
						<FaInfoCircle />
						Sobre
					</Link>
				</li>
				<li>
					<Link to="/notfound">
						<AiFillWarning />
						Not Found
					</Link>
				</li>
			</ul>
		</div>
	);
}

export default SideMenu;
