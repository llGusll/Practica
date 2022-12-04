import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom'
import { startLogout } from '../../actions/auth';
import "./navbar.css"

export const SideBar = () => {

    const [dinamic, setdinamic] = useState(false);
    const dispatch = useDispatch();
    const { name } = useSelector(state => state.auth);

    const handleLogout = () => {
        dispatch(startLogout());
    }

    window.addEventListener("scroll", () => {
        const ejeY = window.scrollY;
        if (ejeY > 30) {
          return setdinamic(true);
        } else {
          setdinamic(false);
        }
      });
    return (
        <div>
            <nav className="navbar navbar-light " style={{background:dinamic?"#010101":""}}>
                <div className="container">
                    <img src="logo1.png" alt="logo0" width="50" height="50" />
                    <Link className="navbar-brand" to="/inicio"><h2>Nutrivida</h2></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">{name}</h5>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page"
                                        to="/Inicio">
                                        Inicio
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link"
                                        to="/menu">
                                        Menu
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link"
                                        to="/evaluacionTest">
                                        Test
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link"
                                        to="/habitos">
                                        Habitos
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link"
                                        to="/resultados">
                                        Resultados
                                    </NavLink>
                                </li>
                                <hr />
                                <li className="nav-item dropdown">
                                    <button className="btn btn-outline-danger"
                                        onClick={handleLogout}>
                                        Salir
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

    )
}
