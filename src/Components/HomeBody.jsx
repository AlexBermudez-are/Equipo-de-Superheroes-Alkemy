import React from 'react'
import Deadpool from '../Assets/deadpool.png'

const HomeBody = () => {
    return (
        <div className="presentacion-Body">
            <img
                className="deadpool"
                src={Deadpool}
                alt="First slide"
            />
            <section className="texto-Home">
                <p>En esta pagina podras crear un equipo de superheroes.
                    Puchale en "crear equipo" para crear tu equipo y que se visualice aquí.
                    <br />
                    Necesitaras Loguearte para armar tu equipo.
                    <br />
                    Correo valido: challenge@alkemy.org
                    <br />
                    Contraseña valida: react
                </p>
            </section>
        </div>
    )
}

export default HomeBody
