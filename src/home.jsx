import { Fragment, useEffect, useState } from "react";


function Home(){

    const [user, setUser]=useState("");

    useEffect(()=>{
         setUser("Pedro")
    })
   
    return(
        <Fragment>
        <main className="container">
            <aside className=" flex flex-col justify-center asideCont">
                <h2>Hola {user}</h2>
                <h3>Carpetas</h3>
                <a href="/Carpetas"><i class="bi bi-folder-plus">Crear Carpeta</i></a>
            </aside>
        </main>
        </Fragment>
    )
}
export default Home;