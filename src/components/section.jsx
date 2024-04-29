import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

function Section({carp}){
   
    const [carpe, setCarpe]=useState(false);

  

    return(
        <Fragment>
            <div className="flex flex-col section">
                <div className="flex justify-between items-center pt-5 pr-3 div-sect">
                    { carpe === false ? 
                    <h3 className="font-bold text-3xl">No tienes carpetas aún</h3>:
                    <h3>{carp.titulo} </h3>
                    }
                
                <Link to="/carpeta" className="boton font-semibold create-carp">Crear carpeta +</Link>
            </div>

            <div className="sect-contenido">
                <ul>
                    {
                        carp.map((car)=>{

                            return <ul>
                                    <div className="box flex flex-col justify-start items-start gap-1">
                                        <h4 className="font-semibold">Carpeta: <span className="font-bold text">{car.titulo}</span></h4>
                                        <li className="description">{car.description} </li>
                                    </div>    
                                   </ul>
                           
                        })
                    }
                </ul>
                    
            </div>
            </div>
            
        </Fragment>
    )
}
export default Section;