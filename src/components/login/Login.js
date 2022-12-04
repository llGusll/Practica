import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGoogleLogin, startLoginEmailPassword } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";
import { Registro } from "./Registro";

export const Login = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    email: "",
    password: "",
  });

  const { email, password } = formValues;
  //const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLoginEmailPassword(email, password));
    // navigate('/inicio',
    //     { replace: true }
    // );
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  return (
    <>
      <div className="container-login">
        <div className="login-logo">
          <div>
            <img
              src="logo1.png"
              alt="Logo Nutrivida"
              width="150"
              height="150"
            />
            <h1 className="text-center">Nutrivida</h1>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <form onSubmit={handleLogin} className="title1">
              <h3 className="text-center mb-5">INGRESA CON TU CUENTA</h3>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    <h3>Correo electrónico</h3>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={email}
                    onChange={handleInputChange}
                    autoComplete="off"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    <h3>Contraseña</h3>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    id="exampleInputPassword2"
                    value={password}
                    onChange={handleInputChange}
                    autoComplete="off"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={loading}
                >
                  Iniciar sesión
                </button>
              </form>
            </div>
            <div className="col-12 col-md-6">
              <div className="title1">
                <h3 className="text-center mb-5">CREAR CUENTA</h3>
                <Registro />
                <hr />
                <div>
                  <p>Entrar con redes sociales</p>
                  <div className="google-btn" onClick={handleGoogleLogin}>
                    <div className="google-icon-wrapper">
                      <img
                        className="google-icon"
                        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                        alt="google button"
                      />
                    </div>
                    <p className="btn-text">
                      <b>Sign in with google</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container login">
                <div className="title1 row">
                </div>
                <div className="row">
                    <div className="container1 ">
                        <div className="row">
                            <div className="caja1 col-12 col-md-6">
                                <form onSubmit={handleLogin} className="title1">
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label"><h3>Correo electrónico</h3></label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            value={email}
                                            onChange={handleInputChange}
                                            autoComplete="off"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label"><h3>Contraseña</h3></label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            name="password"
                                            id="exampleInputPassword2"
                                            value={password}
                                            onChange={handleInputChange}
                                            autoComplete="off"
                                        />
                                    </div>

                                    <button type="submit" className="btn btn-primary" disabled={loading}>Iniciar sesión</button>
                                </form>

                            </div>

                            <div className="caja2 col-12 col-md-6">
                                <div className="container">
                                    <Registro/>
                                    <hr />
                                    <div>
                                        <p>
                                            Entrar con redes sociales
                                        </p>
                                        <div
                                            className="google-btn"
                                            onClick={handleGoogleLogin}
                                        >
                                            <div className="google-icon-wrapper">
                                                <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                                            </div>
                                            <p className="btn-text">
                                                <b>Sign in with google</b>
                                            </p>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
    </>
  );
};
