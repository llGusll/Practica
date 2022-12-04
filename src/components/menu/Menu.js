import React from "react";
import { MenuList } from "./MenuList";

export const Menu = () => {
  return (
    <div className="menu-container">
    <div className="container">
      <h1 className="text-center">Este es nuestro menú semanal</h1>

      <div className="menuItem">
        <h2>Menús para diabeticos</h2>

        <MenuList publisher={"diabeticos"} />
      </div>
      <div className="menuItem">
        <h2>Menús para hipertencion</h2>

        <MenuList publisher={"hipertencion"} />
      </div>
      <div className="menuItem">
        <h2>Menús para obesidad</h2>

        <MenuList publisher={"obesidad"} />
      </div>
    </div>
    </div>
  );
};
