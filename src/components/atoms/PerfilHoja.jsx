import "../../assets/styles/estiloPerfil.css"
import ImgCiudad from "../../assets/img/chiapas.png"
import Nacion from "../../assets/img/nacion.png"
function PerfilHoja(){
    return(
        <>
        <div id="info">
            <h3>Perfil:</h3>
            <img src={ImgCiudad} alt="" />
            <p>ciudad : Sancristobal</p>
            <img src={Nacion} alt="" />
            <p>nacionalidad : maxicana</p>
        </div> 
        <p>Edad : 23</p>
        <p>Genero : masculino</p>
        <p>Fecha : 1999/11/02</p>
        </>
    );
}
export default PerfilHoja;