import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const Registro = () => {

    const dispatch = useDispatch();

    const { msgError } = useSelector(state => state.ui);

    //Registro de usuarios
    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            dispatch(startRegisterWithEmailPasswordName(email, password, name))
        }

    }

    const isFormValid = () => {

        if (name.trim().length === 0) {
            dispatch(setError('Nombre es requrido'));
            return false;
        } else if (!validator.isEmail(email)) {
            dispatch(setError('Correo electronico no valido / en uso'));
            return false;
        } else if (password !== password2 || password.length < 5) {
            dispatch(setError('Contrasela deberia tener minimo 6 caracteres y deben coincidir'));
            return false;
        }

        dispatch(removeError());

        return true;
    }

    return (
        <div>
            <form className=" row g-3" onSubmit={handleRegister}>
                {
                    msgError &&
                    (<div className="auth__alert-error">

                        <div className="alert alert-warning alert-dismissible fade show" role="alert">
                            <strong>¡Santo guacamole!</strong> {msgError}
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </div>)
                }
                <div className="col-md-6">
                    <label htmlFor="inputName" className="form-label">Nombre completo</label>
                    <input
                        type="name"
                        className="form-control"
                        name="name"
                        id="inputName"
                        aria-label="First name"
                        value={name}
                        onChange={handleInputChange}
                        autoComplete="off"
                    />
                </div>

                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="inputEmail4"
                        value={email}
                        onChange={handleInputChange}
                        autoComplete="off"
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword1" className="form-label">Contraseña</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        id="inputPassword1"
                        value={password}
                        onChange={handleInputChange}
                        autoComplete="off"
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword2" className="form-label">Confirmar contraseña</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password2"
                        id="inputPassword2"
                        value={password2}
                        onChange={handleInputChange}
                        autoComplete="off"
                    />
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary" >Registrar</button>
                </div>
            </form>
        </div>
    )
}
