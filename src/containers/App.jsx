import {BrowserRouter, Routes, Route} from 'react-router-dom'

import HojaVida from '../pages/HojaVida';
import FormRegistro from "../pages/FormRegistro";
import FormLogin from '../pages/FormLogin';
import FormBus from '../pages/FormBus';

function App() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/HojaVida" element={<HojaVida/>}/>
                <Route path="/FormRegistro" element={<FormRegistro/>}/>
                <Route path="/FormLogin" element={<FormLogin/>}/>
                <Route path="/FormBus" element={<FormBus/>}/>
            </Routes>
        </BrowserRouter>
     );
}

export default App;