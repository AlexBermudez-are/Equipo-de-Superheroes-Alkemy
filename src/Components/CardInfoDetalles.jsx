import React from 'react'
import { Card } from 'react-bootstrap'

const CardInfoDetalles = ({ el }) => {
    return (
        <div>
            {
                el
                    ? el.appearance.weight.map(el => {
                        return <Card.Text>weight: {el}</Card.Text>
                    })
                    : false
            }
            {
                el
                    ? el.appearance.height.map(el => {
                        return <Card.Text>Height: {el}</Card.Text>
                    })
                    : false
            }
            {
                el
                    ? el.biography.aliases.map(el => {
                        return <Card.Text>Aliases: {el}</Card.Text>
                    })
                    : false
            }
            <Card.Text>Eyes Color: {el.appearance['eye-color']}</Card.Text>
            <Card.Text>Hair Color: {el.appearance['hair-color']}</Card.Text>
            <Card.Text>Work: {el.work.base}</Card.Text>
        </div>
    )
}

export default CardInfoDetalles
