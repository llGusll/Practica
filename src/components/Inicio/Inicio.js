import React from "react";
export const Inicio = () => {
  return (
    <div className="head-container">
      <div className="head">
        <img src="logo02.jpg" alt="Frutas" />
        <div className="head-caja">
          <h1>¿Qué es Nutrivida?</h1>

          <p className="h5">
            Somos un equipo de profesionales de la salud y administración
            comprometidos a ofrecer una solución integral a los múltiples
            problemas metabólicos que aquejan a nuestra población así como una
            herramienta útil y efectiva en la disminución de costos que se
            generan derivado de estos padecimientos.
          </p>
        </div>
      </div>
      <div className="container head-caja2">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6">
            <div className="card1">
              <div className="card-body">
                <h5 className="card-title text-center">
                  {" "}
                  IMPORTANCIA DE LA ALIMENTACIÓN SALUDABLE
                </h5>
                <p className="display-6 card-text">
                  Según informes de la Organización Mundial de la Salud (OMS),
                  “una dieta saludable ayuda a protegernos de la malnutrición en
                  todas sus formas, así como de las enfermedades no
                  transmisibles, como la diabetes, las cardiopatías, los
                  accidentes cerebrovasculares y el cáncer”.
                </p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6">
            <div className="card1">
              <div className="card-body">
                <h5 className="card-title text-center">
                  LA IMPORTANCIA DE HACER EJERCICIO FÍSICO A DIARIO
                </h5>
                <p className="display-6 card-text">
                  Al igual que es fundamental para nuestra salud alimentar
                  nuestro cuerpo cada día es muy importante realizar ejercicio
                  físico a diario.El sedentarismo y los problemas asociados al
                  mismo (físicos, metabólicos, obesidad, etc.) se ha convertido
                  en un problema de salud que ya ha puesto en alarma a las
                  Administraciones Públicas.Realizar una actividad física
                  diariamente aporta un gran número de beneficios a nuestra
                  salud. Los estudios científicos así lo demuestran, desde
                  mejorar nuestra forma física, pasando por evitar enfermedades,
                  mantener un peso saludable (o bajar de peso si tenemos
                  sobrepeso), hasta mejorar nuestra salud mental y nuestra vida
                  social.
                </p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
