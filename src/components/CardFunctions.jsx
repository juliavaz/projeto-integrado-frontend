import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CardFunctions = (props) => {
	return (
		<>
			<Link to={props.link} className="noUnderline">
				<Card style={{ minHeight: '250px' }} className="cardFunction">
					<Card.Img
						variant="top"
						src={props.image}
						style={{ width: '30%', alignSelf: 'center', paddingTop: '16px' }}
					/>
					<Card.Body>
						<Card.Title style={{ textAlign: 'center' }}>{props.title}</Card.Title>
						<Card.Text>{props.description}</Card.Text>
					</Card.Body>
				</Card>
			</Link>
		</>
	);
};

export default CardFunctions;
