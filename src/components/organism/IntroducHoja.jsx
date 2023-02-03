import React from 'react';
import WorkExper from '../atoms/WorkExper';
import PerfilHoja from '../atoms/PerfilHoja';
import FooterHoja from '../atoms/FooterHoja';
import '../../assets/styles/estiloIntroduc.css'

function ItemHoja(){
    return (
      <>
        <body>  
        <div id='main'>
           <article><WorkExper/></article>
           <nav><PerfilHoja/></nav>
        </div>
         <FooterHoja/>
         </body>
         </>
      );
}
export default ItemHoja;