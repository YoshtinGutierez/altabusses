
import { useRef } from 'react';
import {useNavigate} from 'react-router-dom';
import "../../assets/styles/estiloRegistro.css";
function ContenRegistro() {
    const navigate = useNavigate()
    const name = useRef()
    const username = useRef()
    const password = useRef()

    const form = useRef()
    const endpoint = 'http://34.225.239.102/api/registrar/usuario'

    const handlerClick = (e)=>{
        e.preventDefault();
        //navigate("/home")
        const newForm = new FormData(form.current)
        //let newName = newForm.get('name')
        //alert(`Nombre: ${newForm.get('name')} \nUsername: ${newForm.get('username')}`)

        const options = {
            method: 'POST',
            headers : {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                nombre: newForm.get('nombre'),
                usuario: newForm.get('usuario'),
                correo: newForm.get('correo'),
                contrasenia: newForm.get('contrasenia')
            })
        }

        fetch(endpoint, options) 
        .then(response => response.json())
        .then(data => {
            alert(JSON.stringify(data))
        })
    }

    return ( 

            <div class="wrap">
                <form ref={form} class="login-form">
                    <div class="form-header">
                     <h2>Registro</h2>
                     <p>ingrese su informacion</p>
                    </div>    
                    <div class="form-header">
                     <label htmlFor="name">Nombre</label>
                     <input type="text" class="form-input" id="name" name='nombre' />
                    </div>
                    <div class="form-header">
                     <label>E-Mail</label>
                     <input type="email" class="form-input" id="email" name='correo'/>
                    </div>
                    <div class="form-header">
                     <label>Usuario
                     <input type="text" class="form-input" name='usuario'/>
                     </label>
                   </div>
                   <div class="form-header">
                     <label>Password</label>
                     <input type="password" class="form-input" name='contrasenia' ref={password} />
                   </div>
                   <button class="form-button" type="button" onClick={handlerClick}>Registro</button>
                </form>
            </div>
     );
}
export default ContenRegistro;