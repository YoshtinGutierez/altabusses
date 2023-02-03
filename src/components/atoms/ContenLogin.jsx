import { useRef } from 'react';
import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";
import "../../assets/styles/estiloLogin.css"
function ContenLogin() {
const navigate = useNavigate()
    const form = useRef()
    const handlerClick = (e) => {
        e.preventDefault()
        const formData = new FormData(form.current);

        let uri = 'http://34.225.239.102/api/iniciar';
        let options = {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                usuario: formData.get('usuario'),
                contrasenia: formData.get('contrasenia'),
            
            })
        }
        fetch(uri, options)
        .then((response) => response.json())
        .then((data) => {alert(JSON.stringify(data))});
    
        const newForm = new FormData(form.current)
        alert('  UserName: ' + newForm.get('usuario') + '  Password: ' + newForm.get('contrasenia'));
        
        navigate("/FormBus");
    }
  return (
    <div id="contenedor">
    <div id="contenedorcentrado">
        <div id="login">
            <form ref={form}  id="loginform">
                <label htmlFor="usuario">Usuario</label>
                <input type="text" id="usuario" name="usuario" placeholder="Usuario" required/>            
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="contrasenia" placeholder="Contraseña" name="contrasenia" required/>
                <button name="Ingresar" onClick={handlerClick}>Login</button>
                
            </form>
        </div>
        <div id="derecho">
            <div className="titulo">
                Bienvenido
            </div>
            
            <div className="pie-form">
                     <Link to="/FormRegistro">¿No tienes Cuenta? Registrate</Link>
                             
            </div>
        </div>
    </div>
    </div>

  );
}

export default ContenLogin;