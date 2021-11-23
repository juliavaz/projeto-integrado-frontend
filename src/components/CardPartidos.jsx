import React from 'react';
import { Card } from 'react-bootstrap';
import { FaSearchPlus } from 'react-icons/fa';

const CardPartidos = ( props ) => {
	return (
        <>
        <Card style={{"min-height": "250px", "margin-bottom": "20px"}} className="cardFunction">
            <Card.Title style={{"text-align":"center", "padding-top": "10px"}}>{props.title} < FaSearchPlus /></Card.Title>
            <Card.Body>
                <Card.Img variant="top" src={props.src}/>
            </Card.Body>
        </Card>
        </>
	);
};

export default CardPartidos;
