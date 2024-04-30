import { useState } from "react";
function Formulario(){

    
    const [metodo,setMetodo]=useState("");
    const [formData,setFormData]=useState({});
    const [opOk,setOpOk]=useState(false)

    const cambioValor=(e)=>{
   
        console.dir(e.target)
        setFormData({...formData,[e.target.name]:e.target.value})//estamos seteando(actualizando) la informacion del objeto que usamos en el value de cada input , con el nuevo valor que vamos tipeando
        console.log(formData)
    }

    return(

        <>
        {
            opOk == false?
            <form>
                <label htmlFor="titulo">titulo carpeta</label>
                <textarea name="titulo" id="titulo" cols="30" rows="10" value={formData.titulo} onChange={(event)=>cambioValor(event)}></textarea>

                <label htmlFor="description">descripcion </label>
                <textarea name="description" id="description" cols="30" rows="10" value={formData.titulo} onChange={(event)=>cambioValor(event)}></textarea>
                <input className="btn btn-success d-block" type="submit"  value={"Cargar"}/>
            </form>:
            <p>Accion realizada</p>
        }
        
        </>
    )

}
export default Formulario;