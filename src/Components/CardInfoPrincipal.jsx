import React from 'react'
import { Card } from 'react-bootstrap'

const CardInfoPrincipal = ({el}) => {
    return (
        <div>
            <Card.Text>Power: {el.powerstats.power}</Card.Text>
            <Card.Text>Speed: {el.powerstats.speed}</Card.Text>
            <Card.Text>Combat: {el.powerstats.combat}</Card.Text>
            <Card.Text>Strength: {el.powerstats.strength}</Card.Text>
            <Card.Text>Durability: {el.powerstats.durability}</Card.Text>
            <Card.Text>Intelligence: {el.powerstats.intelligence}</Card.Text>
        </div>
    )
}

export default CardInfoPrincipal
