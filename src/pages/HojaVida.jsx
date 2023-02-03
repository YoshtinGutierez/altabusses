
import IntroducHoja from "../../src/components/organism/IntroducHoja"
import HerderHoja from "../../src/components/atoms/HederHoja"
import "../assets/styles/estiloHoja.css"
function HojaVida(){
    return(
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
export default HojaVida;