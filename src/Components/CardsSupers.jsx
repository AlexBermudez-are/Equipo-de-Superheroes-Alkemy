import React from 'react'
import { Card } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

const CardsSupers = ({ el, equipoSuperheroe, equipoS }) => {


    const simon = (e) => {
        e.target.style = "display:none;"
    }

    const agregarHeroe = (props) => {

        for (let index = 0; index < equipoS.length; index++) {
            if (props.id === equipoS[index].id) {
                alert('El personaje ya fue agregado al grupo')
                return
            }
        }

        if (equipoS.length >= 0 && equipoS.length < 6) {
            equipoSuperheroe(props)
        }
        if (equipoS.length === 6) alert('Se a alcanzado la capacidad maxima del equipo')

    }

    return (
        <div style={{ backgroundColor: "rgb(32, 48, 56)" }}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={el.image.url} height="300px" alt={el.name} onError={simon} />
                <Card.Body>
                    <Card.Title>{el.name}</Card.Title>
                    <Button variant="success" onClick={() => { agregarHeroe(el) }}>Agregar al Equipo</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardsSupers
