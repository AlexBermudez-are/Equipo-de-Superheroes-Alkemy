import React, { useContext, useEffect, useRef } from 'react'
import { LoginContext } from '../Context/LoginProvider'
import CardsHomeControl from './CardsHomeControl'
import PowerStats from './PowerStats'
import './HomeBodyCards.css'

const HomeBodyCards = ({ equipoS }) => {

    const { eliminarSuperheroe, Stats, statDominator, pesoFinalProvider, alturaFinalProvider } = useContext(LoginContext)
    const ref = useRef()

    useEffect(() => {
        if (equipoS.length > 0) {
            ref.current.className = 'Home-Body-cards padding'
        } else ref.current.className = 'Home-Body-cards'
    }, [equipoS])

    return (
        <section>
            {
                Stats[0]
                    ? <PowerStats
                        Stats={Stats}
                        statDominator={statDominator}
                        pesoFinalProvider={pesoFinalProvider}
                        alturaFinalProvider={alturaFinalProvider}
                    />
                    : false
            }
            <div className="Home-Body-cards" ref={ref}>

                {
                    equipoS
                        ? equipoS.map(el => {
                            return <CardsHomeControl
                                el={el} key={el.id}
                                eliminarSuperheroe={eliminarSuperheroe} />
                        })
                        : false
                }

            </div>
        </section>
    )
}

export default HomeBodyCards
