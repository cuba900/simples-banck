import React from 'react';
import logo from './logo-conta-simples.svg';
import imagen from './simplesbank.jpg';
import imagen1 from './conta-simples.jpg';
import './App.css';
import Formulario from './components/formulario/formulario.js';
import instagram from './Redes Sociais/instagram-logo.png';
import linkedin from './Redes Sociais/linkedin-logo.png';
import facebook from './Redes Sociais/facebook-logo.png';
import simples from './Redes Sociais/simplesicon.ico';


function simplesApp() {

     return (
        <div className="container">
          <div className="item header">
            <div id="logotipe">
              <a href='./public/index.html'>
               <img src={logo} className="App-logo" href='./public/index.html' alt="voltar pagina home"/>
              </a> 
            </div>
               <h2>A conta digital PJ feita para autônomos e pequenas empresas</h2>
          </div>
         <div className="item sidebar">
        <Formulario />
       </div>
        <div className="item content-1"></div> 
       
        
        <div className="item content-2">
        <a target="new" href="https://contasimples.com/pedir-convite">
        <img className="App-imagen" src={imagen} alt="simples-banck"/>
        </a>
        </div>
        <div className="item content-3">
        <a target="new" href="https://contasimples.com/cartao-de-credito/">
        <img className="App-imagen" src={imagen1} alt="conta-simples"/>
        </a>
        </div>
        <div className="item footer">
        <section>
        <h3>Conecte-se</h3>
        <div  className="redes">
       
        <a className="linkedin" target="new" title="linkedin" href="https://www.linkedin.com/company/contasimples"><img src={linkedin} onmouseover="this.width=41;this.height=41;" onmouseout= 'this.width=40, this.height=40' width="40" height="40" alt="linkedin-logo"/></a>

        <a className="instagram" target="new" title="instagram" href="https://www.instagram.com/toti.br/"><img src={instagram} onmouseover="this.width=41;this.height=41;" onmouseout="this.width=40;this.height=40;" width="40" height="40" alt="instagram-logo"/></a>

        <a className="facebook" target="new" title="facebook" href="https://www.facebook.com/contasimplesBR/"><img src={facebook} onmouseover="this.width=41;this.height=41;" onmouseout="this.width=40;this.height=40;" width="40" height="40" alt="facebook-logo"/></a>

        <a className="simples" target="new" title="simples" href="https://contasimples.com/"><img src={simples} onmouseover="this.width=41;this.height=41;" onmouseout="this.width=40;this.height=40;" width="40" height="40" alt="youtube-logo"/></a>

      </div>
        </section>
      </div>
      </div>  
      
      
     
    
      
    
     );
}



export default simplesApp;