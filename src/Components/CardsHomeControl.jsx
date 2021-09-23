import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap'
import React, { useState } from 'react'
import CardInfoPrincipal from './CardInfoPrincipal';
import CardInfoDetalles from './CardInfoDetalles';

const CardsHomeControl = ({ el, eliminarSuperheroe }) => {

    const [info, setinfo] = useState(false)

    const simon = (e) => {
        e.target.style = "display:none;"
    }

    const verDetalles = ()=>{
        setinfo(!info)
    }

    const eliminarHeroe = () => {
        eliminarSuperheroe(el)
    }

    return (
        <div style={{ backgroundColor: "rgb(32, 48, 56)" }}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={el.image.url} height="300px" alt={el.name} onError={simon} />
                <Card.Body>
                    <Card.Title style={{fontWeight:"bold", color:"red"}}>{el.name}</Card.Title>
                    {
                        !info ? <CardInfoPrincipal el={el} key={el.key} /> : <CardInfoDetalles el={el} key={el.key} />
                    }
                    <Button variant="danger" style={{ marginTop: "5%" }} onClick={eliminarHeroe}>Eliminar del Equipo</Button>
                    <Button variant='info' style={{ marginTop: "5%" }} onClick={verDetalles}>Ver Detalles</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardsHomeControl
