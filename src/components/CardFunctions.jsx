import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CardFunctions = (props) => {
    return (
        <>
        <Link to={props.link} className="noUnderline">
            <Card style={{"min-height": "250px"}} className="cardFunction">
                <Card.Img variant="top" src={props.image} style={{width:"30%", "align-self":"center", "padding-top":"16px"}}  />
                <Card.Body>
                    <Card.Title style={{"text-align":"center"}}>{props.title}</Card.Title>
                    <Card.Text>
                    {props.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Link>
        </>
    )
}

export default CardFunctions
