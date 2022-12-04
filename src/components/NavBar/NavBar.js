import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { startLogout } from '../../actions/auth';

export const NavBar = () => {

    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch( startLogout());
        
    }

    // const navigate = useNavigate();
    // const handleLout = () => {
    //     navigate('/login', 
    //     {replace: true}
    //     );
    // }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <img src="logo1.jpg" alt="logo0" width="50" height="50"/>
                    <Link className="navbar-brand" to="/inicio"><h5>Nutrivida</h5></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="nav-link" aria-current="page" 
                            to="/Inicio">
                                Inicio
                            </NavLink>
                            <NavLink className="nav-link" 
                            to="/menu">
                                Menu
                            </NavLink>
                            <NavLink className="nav-link" 
                            to="/evaluacionTest">
                                Test
                            </NavLink>
                            <NavLink className="nav-link" 
                            to="/habitos">
                                Habitos
                            </NavLink>
                            <NavLink className="nav-link" 
                            to="/resultados">
                                Resultados
                            </NavLink>
                            <button className="btn btn-outline-danger" 
                            onClick={handleLogout}>
                                Salir
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
