import { Fragment } from "react";
import {  Link } from "react-router-dom";
import svg from "./svg-inicio.png"

function Main(){
    return(
        <Fragment>
            <main className="pt-20 flex justify-center items-center">
                <div className="flex gap-40 justify-center items-center line">
                    <div className="flex flex-col cont-main">
                      <h1 className="font-bold text-5xl">Crea tus notas y tareas, organizandolas de la mejor forma</h1>
                      <span className="pt-8 font-semibold text-2xl">La mejor interfaz para una mejor experiencia</span>
                      <Link to="/login" className="btn btn-empezar font-semibold flex items-center gap-2 mt-5">Empezar<i className="bi bi-arrow-right "></i></Link>
                </div>
                <img src={svg} alt="imgan de notes" className="img-main" />
                </div>
                
              
            </main>
        </Fragment>
    )
}
export default Main;