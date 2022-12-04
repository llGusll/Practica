import React from 'react'
import { useNavigate } from 'react-router';

export const Habito = () => {


    const navigate = useNavigate();
    const handleVerResultado = () => {

        var checkboxes = document.querySelectorAll("input[name = 'checkbox']");

        var cont = 0;

        for (var x = 0; x < checkboxes.length; x++) {
            if (checkboxes[x].checked) {
                cont = cont + 1;
            }
        }
        console.log(cont);
        function guardar_resultado() {
            let resu = cont;
            localStorage.setItem("resultaHabito", resu);
        }
        guardar_resultado();
        navigate('/resultados',

            { replace: true }

        );

    }

    return (
        <div className="container contenedor-habito">
            <div className="contenedor2">
                <h2 className='text-center'>
                    CREAR UN HÁBITO
                </h2>
                <table className="table mb-4">
                    <thead>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th>
                            listo
                        </th>

                    </thead>
                    <tbody>

                        <tr className="rhabito1">
                            <th>
                                <img src="vaso01.jpg" alt="Vaso" width="50" height="50" />
                            </th>
                            <th >
                                <h4>
                                    Tomar agua
                                </h4>
                            </th>
                            <th>
                            <input className="form-control" type="text" placeholder="Litros de agua" aria-label="default input example"/>
                            </th>
                            <th>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" name="checkbox" id="inlineCheckbox1" value="option1" />
                                    <label className="form-check-label" htmlFor="inlineCheckbox1"></label>
                                </div>
                            </th>
                        </tr>
                        <tr className="rhabito2">
                            <th>
                                <img src="fruta01.jpeg" alt="Vaso" width="50" height="50" />
                            </th>
                            <th>
                                <h4>
                                    Comer fruta
                                </h4>
                            </th>
                            <th>
                            <input className="form-control" type="text" placeholder="Las veces al dia" aria-label="default input example"/>
                            </th>
                            <th>
                                <div class="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" name="checkbox" id="inlineCheckbox2" value="option1" />
                                    <label className="form-check-label" htmlFor="inlineCheckbox1"></label>
                                </div>
                            </th>
                        </tr>
                        <tr className="rhabito3">
                            <th>
                                <img src="ejercicio01.png" alt="Vaso" width="50" height="50" />
                            </th>
                            <th>
                                <h4>
                                    Ejercicio
                                </h4>
                            </th>
                            <th>
                            <input className="form-control" type="text" placeholder="Horas de entrenamiento" aria-label="default input example"/>
                            </th>
                            <th>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" name="checkbox" id="inlineCheckbox3" value="option1" />
                                    <label className="form-check-label" htmlFor="inlineCheckbox1"></label>
                                </div>
                            </th>
                        </tr>
                        <tr className="rhabito4">
                            <th>
                                <img src="relajarse01.jpeg" alt="Vaso" width="50" height="50" />
                            </th>
                            <th>
                                <h4>
                                    Relajarse
                                </h4>
                            </th>
                            <th>
                            <input className="form-control" type="text" placeholder="Horas de relajamiento" aria-label="default input example"/>
                            </th>
                            <th>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" name="checkbox" id="inlineCheckbox4" value="option1" />
                                    <label className="form-check-label" htmlFor="inlineCheckbox1"></label>
                                </div>
                            </th>
                        </tr>
                        <tr className="rhabito5">
                            <th>
                                <img src="dormir01.jpeg" alt="Vaso" width="50" height="50" />
                            </th>
                            <th>
                                <h4>
                                    Dormir bien
                                </h4>
                            </th>
                            <th>
                            <input className="form-control" type="text" placeholder="Horas de dormir" aria-label="default input example"/>
                            </th>
                            <th>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" name="checkbox" id="inlineCheckbox5" value="option1" />
                                    <label className="form-check-label" htmlFor="inlineCheckbox1"></label>
                                </div>
                            </th>
                        </tr>


                    </tbody>
                </table>
                <button type="button"  onClick={handleVerResultado}>CREAR</button>
            </div>
        </div>
    )
}
