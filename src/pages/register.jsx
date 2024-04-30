import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"

// import img from "./notes.svg"
import "./login.css"

function Register(){

    
        const [email, setEmail]=useState('')
        const [userName, setUserName]=useState('')
        const [password, setPassword]=useState('')

        // console.log("email: " + email);
        // console.log( userName);

        const createUser=()=>{
            axios.post('http://localhost:3002/register',{
                Email:email,
                UserName:userName,
                Password:password,
            })
           .then(()=>{
            console.log("user has been created");
           })
        //    .then(data=>event.target.reset())
        //    .then((err)=>console.log(err))
        }



        return(
            <Fragment>
                <div className="flex justify-center items-center gap-2 login-cont">
                   
                        

                        <form action="http://localhost:5000/registro" onSubmit={(event)=>createUser(event)} method="post"> 
                        <h2 className="text-2xl font-semibold">Organizer</h2>                 
                        <div className="flex flex-col inputs">
                        <label className="mt-2">Usuario</label>
                        <input type="text" onChange={(event)=>setUserName(event.target.value)}  placeholder="Nombre de usuario" className=" inp font-semibold" />
                        <label className="mt-2">Email</label>
                        <input type="email"  placeholder="Email" onChange={(event)=>setEmail(event.target.value)}  className=" inp font-semibold" />
                        <label className="mt-2">Password</label>
                        <input type="password"  placeholder="********" onChange={(event)=>setPassword(event.target.value)}  className=" inp" />
                        <Link to="/login" type="submit" className="sesion" onClick={createUser}>Iniciar sesion</Link>
                        
                        <div className="flex items-center div-span">
                           <span className="flex items-center gap-2">¿ Ya esta registrado ?<Link to="/login" className="registro font-semibold">Inicia sesión</Link></span> 
                        </div>
                         
                        </div>
                        </form>
                       
                       
                    </div>
                    {/* <img src={img} alt=""/> */}
                
            </Fragment>
        )
}

export default Register;