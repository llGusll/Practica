import React, { useState } from "react";

export const ResultadoTest = () => {
  const [puntos, setpuntos] = useState(localStorage.getItem("resultado"));

  if (puntos <= 14) {
    return (
      <div className="contenedor1">
        <div className="contenedor2 cajaResultado">
          <h1>Resultados de tu ultimo test</h1>
          <div className="alert alert-danger" role="alert">
            <h4 className="alert-heading">Puntuacion {puntos}</h4>
            <p className="h2">TU ALIMENTACIÓN ES DE MALA CALIDAD</p>
            <hr />
          </div>
          <div
            className="alert alert-primary d-flex align-items-center"
            role="alert"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
              viewBox="0 0 16 16"
              role="img"
              aria-label="Warning:"
            >
              <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            <div>Recomendaciones</div>
          </div>
          <p className="h4">
            Independientemente del peso que tengas, sería importante mejorar en
            muchos aspectos, no solo para tener un peso saludable (si es que no
            lo tienes) sino para que tu organismo esté sano. Recuerda la frase
            “somos lo que comemos.
          </p>
        </div>
      </div>
    );
  } else if (puntos <= 20) {
    return (
      <div className="contenedor1">
        <div className="contenedor2">
          <h1>Resultados de tu ultimo test</h1>
          <div className="alert alert-warning" role="alert">
            <h4 className="alert-heading">Puntuacion {puntos}</h4>
            <p className="h2">ES NECESARIO MEJORAR</p>
            <hr />
          </div>
          <div
            className="alert alert-primary d-flex align-items-center"
            role="alert"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
              viewBox="0 0 16 16"
              role="img"
              aria-label="Warning:"
            >
              <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            <div>Recomendaciones</div>
          </div>
          <p className="h4">
            En este caso podemos decir que tu alimentación no es mala pero es
            posible que existan algunas brechas en las que podríamos estar
            fallando. En este caso habría que repasar más en profundidad ciertos
            factores de tu alimentación.
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="contenedor1">
        <div className="contenedor2">
          <h1>Resultados de tu ultimo test</h1>
          <div className="alert alert-success" role="alert">
            <h4 className="alert-heading">Puntuacion {puntos}</h4>
            <p className="h2">ES NECESARIO MEJORAR</p>
            <hr />
          </div>
          <div
            className="alert alert-success d-flex align-items-center"
            role="alert"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
              viewBox="0 0 16 16"
              role="img"
              aria-label="Warning:"
            >
              <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            <div>Recomendaciones</div>
          </div>
          <p className="h4">
            Seguramente puedas mejorar en algo, pero a nivel general, tu
            alimentación es buena
          </p>
        </div>
      </div>
    );
  }
};
