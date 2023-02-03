
import IntroducHoja from "../atoms/IntroducHoja"
import HerderHoja from "../atoms/HederHoja"
import "../../assets/styles/estiloHoja.css"


function HojaContainer(){
    return (  
        <center>
        <div id='contenedor'>
        <>
        <HerderHoja/>
        <IntroducHoja/>
        </>
        </div>
        </center>
    );
}
export default HojaContainer;