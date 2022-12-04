import React from 'react';
import { useNavigate } from 'react-router-dom';
import { datapreguntas } from './datapreguntas';
import "./test.css"

export const Pregunta = () => {

    //const [puntaje, setpuntaje] = useState(0)


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
            localStorage.setItem("resultado", resu);
        }
        guardar_resultado();
        navigate('/resultados',

            { replace: true }

        );

    }

    return (
        <>
            <table className="table mb-4">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">SI <br></br></th>
                        <th scope="col">NO <br></br></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        datapreguntas.map(({
                            preguntaTest
                        }, index) => {
                            return (
                                <tr>
                                    <th>
                                        {preguntaTest}
                                    </th>
                                    <th>
                                        <div className="form-check form-check-inline">
                                            <form id="form1" method="post" action="#">
                                                <input className="form-check-input" type="checkbox" name="checkbox" id={`inlineCheckbox${index}`} value="option1" />
                                                <label className="form-check-label" htmlFor={`inlineCheckbox${index}`}></label>
                                            </form>

                                        </div>
                                    </th>
                                    <th>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                                            <label className="form-check-label" htmlFor="inlineCheckbox1"></label>
                                        </div>
                                    </th>
                                </tr>
                            )
                        })

                    }
                </tbody>
            </table>
            <button type="button" onClick={handleVerResultado}>Enviar TEST</button>
        </>

    )
}
