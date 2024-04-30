import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "../home";
import Carpeta from "../carpeta";
import Inicio from "../inicio";
import Login from "../pages/login";
import Register from "../pages/register";
import Formulario from "../components/formulario/form";

function Router(params) {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/registro" element={<Register/>}/>
            <Route path="/carpeta" element={<Carpeta/>}/>
            <Route path="/form" element={<Formulario/>}/>
        </Routes>
        </BrowserRouter>
    )
}
export default Router;