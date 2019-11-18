import React, {useRef, useState} from 'react';
import './formulario.css';



function Formulario () {

    const [cnpjValida,setcnpjValida]  = useState("")
    const [senhaValida,setsenhaValida] = useState("")
    const cnpjInput = useRef()
    const senhaInput = useRef()
    
    function validaCnpj (eventopj) {
        eventopj.preventDefault()

        const pjValue = cnpjInput.current.value
        if (pjValue.length === 14) {
             setcnpjValida("sucesso");
        } 
        else {
           setcnpjValida("error");
        }
    }  
    
    function validaSenha (eventops) {
        eventops.preventDefault()

        const psValue = senhaInput.current.value
        if (psValue.length === 6) {
             setsenhaValida("sucesso");
        } 
        else {
           setsenhaValida("error");
        }
    }

  
    return (
         <div className="container-form">
         <form>
         <h1>Internet Banking</h1>
         <h1> Autônomos e Pequenas Empresas</h1>
         <label>
         <input className={"cnpj " + cnpjValida} onChange={validaCnpj} placeholder="cnpj 14 caracteres" required ref={cnpjInput} />
         </label>
         <input className={"senha " + senhaValida} type="password" onChange={validaSenha} placeholder="senha 6 caracteres" required ref={senhaInput}/>
         <button className="btn-form" >Proximo</button>
         </form>
         <a className="btn-cadastro"
         href="https://contasimples.com/pedir-convite"
         target="_blank"
         rel="noopener noreferrer">Cadastrese</a>
        
            
         

         </div>
        




    );

}


export default Formulario;