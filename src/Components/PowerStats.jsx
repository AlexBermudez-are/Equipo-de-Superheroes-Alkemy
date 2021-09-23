import React from 'react'
import './HomeBodyCards.css'

const PowerStats = ({ Stats, statDominator, alturaFinalProvider, pesoFinalProvider }) => {

    return (
        <section>
            <div className="peso-Altura-Dominante">
                <h2 style={{ paddingBottom: "3%", paddingTop: "3%", color: "white" }}>{`Estadistica Dominante: '${statDominator}'`}</h2>
                <h2 style={{ paddingBottom: "3%", paddingTop: "3%", color: "white" }}>{`Peso promedio: ${pesoFinalProvider} kg`}</h2>
                <h2 style={{ paddingBottom: "3%", paddingTop: "3%", color: "white" }}>{`Altura promedio: ${alturaFinalProvider} cm`}</h2>
            </div>
            <div className="contenedorStats">
                <div className="intelligence-Combat">
                    <p style={{ color: "rgb(68, 65, 255)" }}>{`Intelligence: ${Stats[0].intelligence}`}</p>
                    <p style={{ color: "rgb(255, 157, 65)" }}>{`Combat: ${Stats[0].combat}`}</p>
                </div>
                <div className="durability-Power">
                    <p style={{ color: "rgb(255, 65, 144)" }}>{`Durability: ${Stats[0].durability}`}</p>
                    <p style={{ color: "rgb(87, 255, 65)" }}>{`Power: ${Stats[0].power}`}</p>
                </div>
                <div className="speed-Strength">
                    <p style={{ color: "rgb(65, 233, 255)" }}>{`Speed: ${Stats[0].speed}`}</p>
                    <p style={{ color: "rgb(255, 71, 65)" }}>{`Strength: ${Stats[0].strength}`}</p>
                </div>
            </div>
        </section>
    )
}

export default PowerStats
