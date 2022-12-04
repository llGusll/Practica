import React from "react";

export const MenuCard = ({ id, title1, descriocion1, doc }) => {
  return (
    <div className="cardItem">
      <div className="cardImg">
        <img src={`./fotoMenu/${id}.jpg`} className="card-img" alt="foto" />
      </div>

      <div className="cardBody">
        <div className="cardDescription">
          <h5>{title1}</h5>
          <p>{descriocion1} </p>
        </div>
        <div className="cardButtom">
          <a href={`../docu/${doc}.pdf`}>
            <button>Descargar...</button>
          </a>
        </div>
      </div>
    </div>
  );
};
