import { useRef } from 'react';
import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";
import "../../assets/styles/estiloBus.css";
function ContenBus(){
  const navigate = useNavigate()
    const form = useRef()
    const handlerClick = (e) => {
        e.preventDefault()
        const formData = new FormData(form.current);

        let uri = 'http://34.225.239.102/api/autobus/register';
        let options = {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                clave: formData.get('clave'),
                placa: formData.get('placa'),
                numasientos: formData.get('numasientos'),
                fecha: formData.get('fecha'),
                tipo: formData.get('tipo'),
                nombre: formData.get('nombre'),
                licencia: formData.get('licencia')
            })
        }
        fetch(uri, options)
        .then((response) => response.json())
        .then((data) => {alert(JSON.stringify(data))});
    
        const newForm = new FormData(form.current)
        alert('  Clave: ' + newForm.get('clave') + 'Placa:' + newForm.get('placa'));
        
        navigate("/FormBus");
      }
    return(
    <div id="container">
      <div className="form-box">
        <form ref={form} className="c-form" name="c-form" >
          <div className="two-columns">
            <fieldset>
              <label className="c-form-label" htmlFor="last-name">Clave autobus<span className="c-form-required"></span></label>
              <input id="last-name" className="c-form-input" type="text" name='clave' placeholder="Clave autobus" required/>
            </fieldset>

            <fieldset>
              <label className="c-form-label" htmlFor="first-name">Placa autobus<span className="c-form-required"> *</span></label>
              <input id="first-name" className="c-form-input" type="text" name='placa' placeholder="Placa autobus" required/>
            </fieldset>
          </div>
          <div className="two-columns">
            <fieldset>
              <label className="c-form-label" htmlFor="last-name">Numero de asientos<span className="c-form-required"> *</span></label>
              <input id="last-name" className="c-form-input" type="number" name='numasientos' placeholder="Numero de asientos" required/>
            </fieldset>

            <fieldset>
              <label className="c-form-label" htmlFor="first-name">Fecha de alta<span className="c-form-required"> *</span></label>
              <input id="first-name" className="c-form-input" type="date" name='fecha'required/>
            </fieldset>
          </div>
          <fieldset>
            <label className="c-form-label" htmlFor="email">Tipo<span className="c-form-required"> *</span></label>
            <select name='tipo' id="" className="c-form-select">
                <option value="Turismo">Turismo</option>
                <option value="Lujo">Lujo</option>
            </select>
          </fieldset>

          <fieldset>
            <label className="c-form-label" htmlFor="subject">Nombre del chofer<span className="c-form-required"> *</span></label>
            <input id="subject" className="c-form-input" type="text" name='nombre' placeholder="nombre del chofer" required/>
          </fieldset>

          <fieldset>
            <label className="c-form-label" htmlFor="comments">Licencia<span className="c-form-required"> *</span></label>
            <input id="subject" className="c-form-input" type="text" name='licencia' placeholder="Licencia" required/>
          </fieldset>
          <button name="Ingresar" className="c-form-btn" onClick={handlerClick}>registro</button>
        </form>
      </div>
    </div>
    );
}
export default ContenBus;