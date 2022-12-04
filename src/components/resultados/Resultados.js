import React, { useState } from "react";
import { ResultadoTest } from "../tess/ResultadoTest";
import "./resultados.css";

export const Resultados = () => {
  const [puntos] = useState(localStorage.getItem("resultaHabito"));

  if (puntos <= 2) {
    return (
      <div className="container container-resultados">
        <h1 className="resultados-titulo">Resultado de tus habitos:</h1>
        <div className="row">
          <div className="col-12 col-md-6 cajaResultado">
            <h1>Cuide de sus habitos</h1>
            <div className="alert alert-danger" role="alert">
              <h4 className="alert-heading">Puntuacion {puntos}0% </h4>
              <p className="h2">
                Pésimo, estas muy por debajo de poder cumplir tus objetivos,
                debes de esforzarte más y recordar que es importante mantener
                una buena salud{" "}
              </p>
              <hr />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <ResultadoTest />
          </div>
        </div>
      </div>
    );
  } else if (puntos <= 4) {
    return (
      <div className="container container-resultados">
        <h1 className="resultados-titulo">Resultado de tus habitos:</h1>
        <div className="row">
          <div className="col-12 col-md-6 cajaResultado">
            <h1>Nada mal, pero puede mejorar</h1>
            <div className="alert alert-warning" role="alert">
              <h4 className="alert-heading">Puntuacion {puntos}0%</h4>
              <p className="h2">
                Regular, procura esforzarte más por cumplir tus objetivos del
                día, recuerda que el cuidado de la salud es muy importante{" "}
              </p>
              <hr />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <ResultadoTest />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container container-resultados">
        <h1 className="resultados-titulo">Resultado de tus habitos:</h1>
        <div className="row">
          <div className="col-12 col-md-6 cajaResultado">
            <h1>Excelente, estas al día</h1>
            <div className="alert alert-success" role="alert">
              <h4 className="alert-heading">Puntuacion {puntos}0%</h4>
              <p className="h2">
                Excelente tienes un buen habito, sigue manteniéndote y recuerda
                que el cuidar nuestro salud es importante{" "}
              </p>
              <hr />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <ResultadoTest />
          </div>
        </div>
      </div>
    );
  }
};
