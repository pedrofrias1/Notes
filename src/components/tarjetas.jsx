import { useState } from "react";


function Tarjetas({carpeta,setMostrarForm}) {

   
    const [carpetaEliminada, setCarpetaEliminada]=useState(false);
    // const [editarCarpeta, setEditarCarpeta]=useState(false)

    const eliminarCarpeta=async()=>{
        let id=carpeta.id
        // console.log(id);
        let respuesta=await fetch('http://localhost:5000/eliminarCarpeta',{
            method:'delete',
            headers:{
                'Content-type':"application/json"
            },
            body:JSON.stringify({id:id})
        })
        .then((data)=>{return data.json()})
        .then(()=>{
            setCarpetaEliminada(true);
            // setCapetaEliminadaID(id);
            setTimeout(()=>{setCarpetaEliminada(false)},2000)
        })
        .catch((err)=>console.log(err))
  return respuesta
    }


    


    const editarCarpeta=async()=>{
        let id=carpeta.id
        // console.log(titulo);

        let respuesta=await fetch('http://localhost:5000/cargarCarpeta/:id',{
            method:'put',
            headers:{
                'Content-type':"application/json"
            },
            body:JSON.stringify({id:id})
        })
        .then((data)=>{return data.json()})
        .then(()=>{
            setCarpetaEliminada(true);
            // setCapetaEliminadaID(id);
            setTimeout(()=>{"carpeta editada"},2000)
          
        })
        .catch((err)=>console.log(err))
  return respuesta

  setMostrarForm(true)
     
    }


    return(
<>
    <ul>
    {carpetaEliminada === false ?
                        carpeta.map((car)=>{

                            return <ul>
                                     <div className="box flex justify-between items-center gap-1">
                                        <div className="flex flex-col justify-start items-start gap-1">
                                            <h4 className="font-semibold">Carpeta:<span className="font-bold text">{car.titulo}</span></h4>
                                            <li className="description">{car.description} </li>
                                        </div>
                                        <div className='flex  flex-col gap-2'>
                                            <button className='btn ' onClick={eliminarCarpeta}>Eliminar</button>
                                            <button className='btn' onClick={editarCarpeta}>Editar Carpeta</button>                
                                        </div>
                                    </div>    
                                   </ul>
                           
                        }):
                        <p>carpeta eliminada</p>
                    }
    </ul>
</>

    )
}
export default Tarjetas;