import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

const LoginContext = createContext()

const powerStats = [{
    intelligence: 0,
    durability: 0,
    strength: 0,
    combat: 0,
    power: 0,
    speed: 0
}]

const pesoAltura = [{
    height: 0,
    weight: 0,
}]

let contador = 0

const LoginProvider = ({ children }) => {

    const [controllForm, setcontrollForm] = useState(false)
    const [statDominator, setstatDominator] = useState()
    const [equipoS, setequipoS] = useState([])
    const [Stats, setStats] = useState([])
    const [Good, setGood] = useState(0)
    const [Bad, setBad] = useState(0)
    const [alturaFinalProvider, setalturaFinalProvider] = useState(0)
    const [pesoFinalProvider, setpesoFinalProvider] = useState(0)
    const arregloF = []

    const controladorFormF = (prop) => {
        setcontrollForm(prop)
    }

    const agregarPersonaje = (personaje) => {

        alert('Se agrego el personaje al grupo')

        powerStats[0].intelligence += parseInt(personaje.powerstats.intelligence)
        powerStats[0].durability += parseInt(personaje.powerstats.durability)
        powerStats[0].strength += parseInt(personaje.powerstats.strength)
        powerStats[0].combat += parseInt(personaje.powerstats.combat)
        pesoAltura[0].weight += parseInt(personaje.appearance.weight[1])
        pesoAltura[0].height += parseInt(personaje.appearance.height[1])
        powerStats[0].power += parseInt(personaje.powerstats.power)
        powerStats[0].speed += parseInt(personaje.powerstats.speed)

        arregloF.push(personaje)
        setequipoS([...equipoS, ...arregloF])
        setStats(powerStats)


        let StatDominating = powerStats[0].intelligence
        const powerArr = powerStats[0]

        for (const key in powerArr) {

            if (powerArr[key] >= StatDominating) {
                StatDominating = powerArr[key]
                setstatDominator(key)
            }

        }

        const pesoFinal = (pesoAltura[0].weight / contador).toFixed()
        const alturaFinal = (pesoAltura[0].height / contador).toFixed()
        setalturaFinalProvider(alturaFinal)
        setpesoFinalProvider(pesoFinal)

        console.log(contador);
    }

    const equipoSuperheroe = (props) => {

        if (props.biography.alignment === 'good' && Good < 3) {

            setGood(Good + 1)
            contador++
            return agregarPersonaje(props)

        } else if (props.biography.alignment === 'good' && Good >= 3) alert('No se pueden agregar mas personajes con orientación buena')

        if (props.biography.alignment === 'bad' && Bad < 3) {

            setBad(Bad + 1)
            contador++
            return agregarPersonaje(props)

        } else if (props.biography.alignment === 'bad' && Bad >= 3) alert('No se pueden agregar mas personajes con orientación mala')

        if (props.biography.alignment === '-') {

            contador++
            return agregarPersonaje(props)

        }

    }

    const eliminarSuperheroe = (prop) => {

        let isDelete = window.confirm(
            `¿Estás seguro que lo quieres eliminar a ${prop.name}?`
        );

        if(isDelete && contador > 1) contador--

        if (isDelete) {

            powerStats[0].intelligence -= parseInt(prop.powerstats.intelligence)
            powerStats[0].durability -= parseInt(prop.powerstats.durability)
            powerStats[0].strength -= parseInt(prop.powerstats.strength)
            powerStats[0].combat -= parseInt(prop.powerstats.combat)
            pesoAltura[0].weight -= parseInt(prop.appearance.weight[1])
            pesoAltura[0].height -= parseInt(prop.appearance.height[1])
            powerStats[0].power -= parseInt(prop.powerstats.power)
            powerStats[0].speed -= parseInt(prop.powerstats.speed)

            let newData = equipoS.filter((el) => {
                return el.id !== prop.id
            });

            setequipoS(newData);
            setStats(powerStats)

            if (prop.biography.alignment === 'good' && Good <= 3) setGood(Good - 1)
            if (prop.biography.alignment === 'bad' && Bad <= 3) setBad(Bad - 1)

            let StatDominating = powerStats[0].intelligence
            const powerArr = powerStats[0]

            for (const key in powerArr) {

                if (powerArr[key] > StatDominating || powerArr[key] === 100) {
                    StatDominating = powerArr[key]
                    setstatDominator(key)
                }

            }

            const pesoFinal = (pesoAltura[0].weight / contador).toFixed()
            const alturaFinal = (pesoAltura[0].height / contador).toFixed()
            setalturaFinalProvider(alturaFinal)
            setpesoFinalProvider(pesoFinal)
            console.log(contador);

        }
    }

    const data = {
        eliminarSuperheroe,
        equipoSuperheroe,
        controladorFormF,
        alturaFinalProvider,
        pesoFinalProvider,
        statDominator,
        controllForm,
        equipoS,
        Stats
    }

    return <LoginContext.Provider value={data}>{children}</LoginContext.Provider>
}

export default LoginProvider
export { LoginContext }
