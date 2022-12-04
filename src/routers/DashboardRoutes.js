import { Routes, Route } from "react-router-dom";

import { Habito } from "../components/habitos/Habito";
import { Inicio } from "../components/Inicio/Inicio";
import { Menu } from "../components/menu/Menu";
import { SideBar } from "../components/NavBar/SideBar";
import { Resultados } from "../components/resultados/Resultados";
import { EvaluacionTess } from "../components/tess/EvaluacionTess"
import { ResultadoTest } from "../components/tess/ResultadoTest";

export const DashboardRoutes = () => {
    return (
        <>
            
            <SideBar/>
            
            <Routes>
                <Route path="inicio" element={<Inicio />} />
                <Route path="menu" element={<Menu />} />
                <Route path="evaluacionTest" element={<EvaluacionTess />} />
                <Route path="habitos" element={<Habito />} />
                <Route path="resultados" element={<Resultados />} />
                <Route path="resultadoTest" element={<ResultadoTest/>}/>
            

                <Route path="/" element={<Inicio />} />
            </Routes>
        </>
    )
}
