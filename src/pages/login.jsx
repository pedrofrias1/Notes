import { Fragment , useState} from "react";
import { Link , useNavigate} from "react-router-dom";
import Axios from "axios"
import img from "./notes.svg"
import "./login.css"


function Login(){

    const [loginUserName, setLoginUserName]=useState('')
    const [loginPassword, setLoginPassword]=useState('')
    const navigateTo=useNavigate()

    console.log(loginUserName);
    const loginUser=(e)=>{
        e.preventDefault()
        Axios.post('http://localhost:3002/login',{
            LoginUserName:loginUserName,
            LoginPassword:loginPassword,
        })
       .then((response)=>{
        // console.log(response.data.message);
        if (response.data.message ) {
            navigateTo('/')
        }
        else{
            navigateTo('/Home')
        }

       })
    //    .then(data=>event.target.reset())
    //    .then((err)=>console.log(err))
    }
        return(
            <Fragment>
                <div className="flex justify-center items-center gap-2 login-cont">
                    <div className="flex flex-col inputs">
                        <h2 className="text-2xl font-semibold">Organizer</h2>
                        <input type="text" placeholder="Nombre de usuario" onChange={(event)=>setLoginUserName(event.target.value)} className="mt-2 inp font-semibold"/>
                        <input type="password" placeholder="" className="mt-2 inp" onChange={(event)=>setLoginPassword(event.target.value)}/>
                        <input type="submit" className="mt-2 sesion" id="sesion" value="Iniciar sesion" onClick={loginUser} />
                        <span className="flex items-center gap-2">¿ No tiene cuenta ?<Link to="/registro" className="registro font-semibold">Regitrarse</Link></span>
                    </div>
                    <img src={img} alt=""/>
                </div>
              
            </Fragment>
        )
}

export default Login;
