import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "../home";
import Carpeta from "../carpeta";

function Router(params) {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/carpeta" element={<Carpeta/>}/>
        </Routes>
        </BrowserRouter>
    )
}
export default Router;