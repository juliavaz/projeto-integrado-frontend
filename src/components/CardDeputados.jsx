import React from 'react';

const CardDeputados = ({ id, imgPath, nome, partido }) => {
	return (
		<div id={id} className="cartaoDep">
			<img src={imgPath} alt={nome + ' - ' + partido} />
			<div className="cartaoContent">
				<h3>{nome}</h3>
				<p>{partido}</p>
			</div>
		</div>
	);
};

export default CardDeputados;
