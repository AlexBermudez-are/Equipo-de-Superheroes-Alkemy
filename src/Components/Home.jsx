import FormularioLogin, { Datos } from './FormularioLogin'
import { Nav, Navbar } from 'react-bootstrap';
import { LoginContext } from '../Context/LoginProvider';
import HomeBodyCards from './HomeBodyCards';
import { NavLink } from 'react-router-dom';
import React, { useContext } from 'react';
import HomeBody from './HomeBody';
import { useEffect } from 'react';
import './Home.css';

const Home = () => {

  let token = localStorage.getItem("token")
  const { controllForm, controladorFormF, equipoS } = useContext(LoginContext)

  const cerrarForm = (e) => {
    controladorFormF(true)
  }

  useEffect(() => {

    if (!token) { controladorFormF(false) }
    else controladorFormF(true)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token])

  return (
    <section className="padre-Login">
      <div className="login-Assets">
        <div className="padre-Login-texto">
          <h1 className="titulo-Home"><b>SuperHeroes</b></h1>
          <Navbar className="navBar-Home"  variant="dark">
            <Nav className="me-auto" style={{ width: "100%", display: "flex", justifyContent: "space-evenly" }}>
              <NavLink exact to="creaEquipo" style={{ textDecoration: "none", color: "white" }}>Crear Equipo</NavLink>
            </Nav>
          </Navbar>
        </div>
      </div>
      {
        equipoS.length > 0
          ? <HomeBodyCards equipoS={equipoS} />
          : <HomeBody />
      }
      <div onClick={cerrarForm}>
        {/* no supe como manejar el componente formulario con Formik asi que */}
        {/* hice malavares con lo que sé */}
        {
          !controllForm ? <Datos /> : false
        }
        {
          !controllForm ? <FormularioLogin /> : false
        }
      </div>
    </section>
  )
}

export default Home
